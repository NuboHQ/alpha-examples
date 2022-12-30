/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    searchUrl: process.env.NEXT_PUBLIC_NUBO_SEARCH_URL,
    searchKey: process.env.NEXT_PUBLIC_NUBO_SEARCH_KEY,
  },
};

module.exports = nextConfig;
