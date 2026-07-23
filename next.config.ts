import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bug",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
