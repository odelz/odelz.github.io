import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.join(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;