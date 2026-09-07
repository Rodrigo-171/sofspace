import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local, self-authored placeholder imagery only (see scripts/generate-
    // placeholders.mjs). Remove dangerouslyAllowSVG once real photography
    // replaces these files.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
