/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/base',
  async redirects() {
    return {
      source: '/',
      destination: '/base',
    };
  },
  i18n: {
    defaultLocale: 'de',
    domains: [
      {
        domain: 'vercel-next-js-iuqchb--3000.local.webcontainer.io',
        locales: ['de'],
      },
    ],
  },
};
