// Fork of .ds-sync/lib/bundle.mjs
// Changes vs. upstream:
//   1. Adds `process` global shim in esbuild defines so Next.js env checks
//      (process.env.__NEXT_IMAGE_OPTS, process.env.__NEXT_ROUTER_BASEPATH, etc.)
//      don't throw ReferenceError in the browser preview sandbox.
//   2. Adds a nextShim esbuild plugin that replaces next/image, next/link,
//      next/head, next/navigation, next/router and next/font/* with
//      lightweight browser stubs instead of bundling the real Next.js runtime.

// esbuild lives in .ds-sync/node_modules, not the repo root — import by path.
import { build } from '../../.ds-sync/node_modules/esbuild/lib/main.js';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { IIFE_IMPORT_META_DEFINE } from '../../.ds-sync/lib/common.mjs';
import { reactShim, tsconfigPathsPlugin } from '../../.ds-sync/lib/bundle.mjs';

// Re-export everything that doesn't need changing.
export {
  resolveDistEntry,
  reactShim,
  bundleExportEvidence,
  stampHeader,
  tsconfigPathsPlugin,
} from '../../.ds-sync/lib/bundle.mjs';

// ---------------------------------------------------------------------------
// Next.js browser stubs
// ---------------------------------------------------------------------------
// Converts 'next/image' → 'next-image', 'next/font/google' → 'next-font-google'
// so load filters can use simple exact/prefix matches.
function nextPath(importPath) {
  return importPath.replace('/', '-').replace('/', '-');
}

const nextShim = {
  name: 'next-shim',
  setup(b) {
    const ns = 'next-shim';

    b.onResolve(
      { filter: /^next\/(image|link|head|navigation|router|font\/.+)$/ },
      (args) => ({ path: nextPath(args.path), namespace: ns }),
    );

    // next/image → <img> passthrough
    b.onLoad({ filter: /^next-image$/, namespace: ns }, () => ({
      contents: [
        'var R=window.React;',
        'function NextImage({src,alt,width,height,fill,priority,quality,...p}){',
        '  var s=typeof src==="object"&&src.src?src.src:src;',
        '  return R.createElement("img",Object.assign({src:s,alt:alt||""},p));',
        '}',
        'module.exports=NextImage;',
        'module.exports.default=NextImage;',
      ].join(''),
      loader: 'js',
    }));

    // next/link → <a> passthrough
    b.onLoad({ filter: /^next-link$/, namespace: ns }, () => ({
      contents: [
        'var R=window.React;',
        'function NextLink({href,children,prefetch,...p}){',
        '  return R.createElement("a",Object.assign({href:href||"#"},p),children);',
        '}',
        'module.exports=NextLink;',
        'module.exports.default=NextLink;',
      ].join(''),
      loader: 'js',
    }));

    // next/head → renders nothing
    b.onLoad({ filter: /^next-head$/, namespace: ns }, () => ({
      contents: [
        'var R=window.React;',
        'function Head(){return null;}',
        'module.exports=Head;',
        'module.exports.default=Head;',
      ].join(''),
      loader: 'js',
    }));

    // next/navigation → stub hooks
    b.onLoad({ filter: /^next-navigation$/, namespace: ns }, () => ({
      contents: [
        'var n=function(){};',
        'exports.useRouter=function(){return{push:n,replace:n,back:n,forward:n,refresh:n,prefetch:n,pathname:"/",query:{}};};',
        'exports.usePathname=function(){return"/";};',
        'exports.useSearchParams=function(){return{get:function(){return null;},getAll:function(){return[];},has:function(){return false;},keys:function(){return[].values();},values:function(){return[].values();},entries:function(){return[].values();}};};',
        'exports.useParams=function(){return{};};',
        'exports.redirect=n;',
        'exports.permanentRedirect=n;',
        'exports.notFound=n;',
      ].join(''),
      loader: 'js',
    }));

    // next/router → stub
    b.onLoad({ filter: /^next-router$/, namespace: ns }, () => ({
      contents: [
        'var n=function(){};',
        'exports.useRouter=function(){return{push:n,replace:n,back:n,reload:n,prefetch:n,pathname:"/",query:{},asPath:"/",route:"/",events:{on:n,off:n,emit:n}};};',
      ].join(''),
      loader: 'js',
    }));

    // next/font/* → return className/style object (used at call-site, not as component)
    b.onLoad({ filter: /^next-font/, namespace: ns }, () => ({
      contents: [
        'function noop(){return{className:"",style:{}};};',
        'module.exports=noop;',
        'module.exports.default=noop;',
      ].join(''),
      loader: 'js',
    }));
  },
};

// ---------------------------------------------------------------------------
// Shared esbuild options (mirrors upstream but adds process + nextShim)
// ---------------------------------------------------------------------------
function sharedBuildOptions({ nodePaths, tsconfig: tsconfigPath }) {
  const pathsPlugin = tsconfigPath ? tsconfigPathsPlugin(tsconfigPath) : null;
  const plugins = [reactShim, nextShim];
  if (pathsPlugin) plugins.unshift(pathsPlugin);
  return {
    bundle: true,
    platform: 'browser',
    target: 'es2020',
    nodePaths: [nodePaths],
    plugins,
    metafile: true,
    loader: {
      '.svg': 'dataurl',
      '.png': 'dataurl',
      '.woff': 'dataurl',
      '.woff2': 'dataurl',
    },
    minify: false,
    define: { 'process.env.NODE_ENV': '"development"' },
    // Prepend a process global shim before the IIFE. esbuild define replaces
    // process.env.NODE_ENV inline, but other Next.js env checks
    // (process.env.__NEXT_IMAGE_OPTS, process.env.__NEXT_ROUTER_BASEPATH, etc.)
    // remain as-is and throw ReferenceError in the browser. The banner guard
    // (typeof check) is a no-op in Node.js test contexts where process exists.
    banner: {
      js: 'var process=typeof process!=="undefined"?process:{env:{NODE_ENV:"development"},platform:"browser"};',
    },
  };
}

// ---------------------------------------------------------------------------
// bundleToIife — copy of upstream with sharedBuildOptions swapped out
// ---------------------------------------------------------------------------
export async function bundleToIife({ entry, globalName, nodePaths, out, tsconfig }) {
  const bundleJs = join(out, '_ds_bundle.js');
  const bundleCss = join(out, '_ds_bundle.css');
  const shared = sharedBuildOptions({ nodePaths, tsconfig });
  let buildResult;
  try {
    buildResult = await build({
      ...shared,
      entryPoints: [entry],
      format: 'iife',
      globalName,
      footer: { js: `window.${globalName}=${globalName}.__dsMainNs?Object.assign({},${globalName},${globalName}.__dsMainNs,{__dsMainNs:undefined}):${globalName};` },
      outfile: bundleJs,
      logLevel: 'warning',
      define: { ...shared.define, ...IIFE_IMPORT_META_DEFINE },
    });
  } catch (e) {
    const unresolved = [...new Set((e.errors ?? []).map((er) => er.text.match(/Could not resolve "([^"]+)"/)?.[1]).filter(Boolean))];
    const siblings = unresolved.filter((p) => {
      const pj = join(nodePaths, p, 'package.json');
      if (!existsSync(pj)) return false;
      try {
        const j = JSON.parse(readFileSync(pj, 'utf8'));
        const ent = j.module ?? j.main ?? 'index.js';
        return !existsSync(join(nodePaths, p, ent));
      } catch { return false; }
    });
    if (siblings.length) {
      console.error(`[WORKSPACE_SIBLING] ${siblings.join(', ')} exist in node_modules but aren't built (no dist entry). Run their build, or npm install the published versions.`);
    } else if (unresolved.length) {
      console.error(`[UNRESOLVED_IMPORT] ${unresolved.join(', ')} — missing from node_modules.`);
    }
    throw e;
  }
  const REACT_PKGS = new Set(['react', 'react-dom', 'react-is']);
  const inlinedExternals = [
    ...new Set(
      Object.keys(buildResult?.metafile?.inputs ?? {})
        .map((p) => p.match(/(?:^|\/)node_modules\/((?:@[^/]+\/)?[^/]+)\//)?.[1])
        .filter((pkg) => pkg && !REACT_PKGS.has(pkg)),
    ),
  ].sort();
  console.error(`  bundle: ${(statSync(bundleJs).size / 1024).toFixed(0)} KB`);
  console.error(`  inlined npm packages: ${inlinedExternals.length}`);
  return { bundleJs, bundleCss, inlinedExternals };
}
