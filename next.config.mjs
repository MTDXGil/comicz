/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
  experimental: {
    staleTimes: {
      dynamic: 300,
      static: 18000,
    },
  },
};

export default nextConfig;
