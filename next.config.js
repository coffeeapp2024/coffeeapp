/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
  // disable: true,
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "cache-first",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24,
        },
      },
    },
  ],
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
