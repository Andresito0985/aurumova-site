import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata exported per Next 16 opengraph-image convention.
// Next.js automatically injects <meta property="og:image"> + width/height/type/alt.
export const alt =
  "Aurum Nova Wellness Clinic — Premium Medical Wellness, Arecibo Puerto Rico";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Node runtime so we can readFile the logo from the filesystem at build time.
// Default behavior is static optimization (PNG cached + cooked at build).
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  // Load the official transparent logo as base64 — embedded directly in
  // the generated PNG, no runtime fetch.
  const logoData = await readFile(
    join(process.cwd(), "public", "brand", "aurum-nova-logo-transparent-4096.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A1A1A 0%, #0E0E0E 100%)",
          position: "relative",
        }}
      >
        {/* Radial gold glow behind the logo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 50% 38%, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.06) 30%, transparent 55%)",
            display: "flex",
          }}
        />

        {/* Subtle clinical grid texture */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.04,
            display: "flex",
          }}
        />

        {/* Thin gold inset frame */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: "1px solid rgba(201,168,76,0.32)",
            borderRadius: 6,
            display: "flex",
          }}
        />

        {/* Top horizontal accent line — fades in from both sides */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 80,
            right: 80,
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.55) 50%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Bottom horizontal accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            left: 80,
            right: 80,
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.55) 50%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Logo — centered with soft drop shadow glow */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={240}
          height={240}
          style={{
            objectFit: "contain",
            marginBottom: 30,
            filter:
              "drop-shadow(0 12px 36px rgba(201,168,76,0.35)) drop-shadow(0 0 18px rgba(201,168,76,0.18))",
          }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: -1.5,
            textAlign: "center",
            lineHeight: 1.02,
            marginBottom: 24,
            display: "flex",
          }}
        >
          Aurum Nova Wellness Clinic
        </div>

        {/* Decorative gold rule */}
        <div
          style={{
            width: 64,
            height: 1,
            background: "#C9A84C",
            marginBottom: 24,
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#E2C97E",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 16,
            display: "flex",
          }}
        >
          Premium Medical Wellness
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 22,
            color: "#F4EBD0",
            letterSpacing: 1,
            fontWeight: 400,
            display: "flex",
          }}
        >
          Arecibo · Puerto Rico
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
