import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel supplies its own Next.js deployment adapter. Next.js 16.3 currently
  // conflicts with that adapter when standalone output is enabled, while the
  // standalone bundle is still required by the repository's Docker image.
  ...(process.env.VERCEL === "1" ? {} : { output: "standalone" as const }),
};

export default nextConfig;
