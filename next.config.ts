import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence the workspace root warning from the parent-directory lockfile
  turbopack: {
    root: path.join(__dirname),
  },

  // Images: allow external domains here when you add hosted images
  images: {
    formats: ["image/avif", "image/webp"],
    // Add remote patterns here when hosting images externally:
    // remotePatterns: [
    //   { protocol: "https", hostname: "cdn.example.com" },
    // ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
