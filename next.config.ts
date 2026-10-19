import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
   cacheComponents: false,
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
