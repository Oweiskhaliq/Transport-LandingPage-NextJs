import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    // 👈 This allows production builds to successfully complete even with lint errors
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
