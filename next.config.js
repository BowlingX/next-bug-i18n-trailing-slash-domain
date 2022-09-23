/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/base',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    domains: [
      {
        domain: 'vercel-next-js-iuqchb--3000.local.webcontainer.io',
        defaultLocale: 'de',
      },
      {
        domain: 'en.vercel-next-js-iuqchb--3000.local.webcontainer.io',
        defaultLocale: 'en',
      },
    ],
  },
};
