
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  cacheComponents: false,

  experimental: {
    agentFeedback: true,
  },

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
