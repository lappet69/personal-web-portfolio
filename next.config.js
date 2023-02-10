/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["images.glints.com", "placeimg.com", "https://picsum.photos"],
  },
};
