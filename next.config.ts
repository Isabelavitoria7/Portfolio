/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false, // Desativa o spinner de build
  },
  experimental: {
    monitoring: false, // Desativa o botão de Issue da Vercel
  },
};

module.exports = nextConfig;
