/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_API_URL: "https://sp-n.vercel.app",
  },
};

module.exports = nextConfig;
