import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_API_URL: "https://sp-n.vercel.app",
  },
};

export default nextConfig;
