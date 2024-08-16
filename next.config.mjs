/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s3.amazonaws.com",
        protocol: "https",
      },
      {
        hostname: "assets.tina.io",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
