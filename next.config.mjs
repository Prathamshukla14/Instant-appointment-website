/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces .next/standalone with a self-contained Node server.
  // Ideal for running on EC2 behind Nginx + PM2 (no Vercel needed).
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
