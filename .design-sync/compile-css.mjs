/**
 * Pre-compiles app/globals.css (Tailwind v4) to a static CSS file that the
 * design-sync converter can bundle into ds-bundle/styles.css.
 *
 * Run this before package-build.mjs on every re-sync:
 *   node .design-sync/compile-css.mjs
 *
 * Output: ds-bundle-tmp/compiled-tailwind.css
 */

import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const require = createRequire(import.meta.url);

// Load from the project's own node_modules
const postcss = (await import(path.join(root, 'node_modules/postcss/lib/postcss.js'))).default;
const tailwind = (await import(path.join(root, 'node_modules/@tailwindcss/postcss/dist/index.mjs'))).default;

const from = path.join(root, 'app/globals.css');
const outDir = path.join(root, 'ds-bundle-tmp');
const to = path.join(outDir, 'compiled-tailwind.css');

fs.mkdirSync(outDir, { recursive: true });

// Prepend @source directives so Tailwind scans component files for class usage
const base = fs.readFileSync(from, 'utf8');
const css = `@source "../components/**/*.tsx";\n@source "../app/**/*.tsx";\n${base}`;

const result = await postcss([tailwind]).process(css, { from, to });
fs.writeFileSync(to, result.css);
console.log(`[compile-css] wrote ${result.css.length} bytes → ${path.relative(root, to)}`);
