/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ru-RU", "en-US"],
    defaultLocale: "ru-RU",
  }
}

module.exports = nextConfig
