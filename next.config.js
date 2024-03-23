/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // disable: true,
  runtimeCaching,
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: false,
});
