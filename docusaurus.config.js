// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Interview',
  tagline: '우왕',
  favicon: 'img/favicon.ico',
  url: 'https://bttb-interview.vercel.app',
  baseUrl: '/',
  organizationName: 'back-to-the-basic',
  projectName: 'interview',
  onBrokenLinks: 'ignore',
  // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/back-to-the-basic/interview',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/back-to-the-basic/interview',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TIL',
        // logo: {
        // alt: 'MOZI',
        // src: 'img/mozi.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'operating-system/공룡책/서론',
            position: 'left',
            label: '운영체제',
          },
          {
            type: 'doc',
            docId: 'network/면접/google.com',
            position: 'left',
            label: '네트워크',
          },
          {
            type: 'doc',
            docId: 'javascript/1',
            position: 'left',
            label: 'JavaScript',
          },
          {
            type: 'doc',
            docId: 'computer-structure/개념/1',
            position: 'left',
            label: '컴퓨터구조',
          },
          {
            type: 'doc',
            docId: 'react/Flux',
            position: 'left',
            label: 'React',
          },
          {
            type: 'doc',
            docId: 'web/쿠키와세션',
            position: 'left',
            label: 'WEB',
          },
          {
            type: 'doc',
            docId: 'project/방슐랭가이드/index',
            position: 'left',
            label: '프로젝트',
          },
          {
            href: 'https://github.com/back-to-the-basic/interview',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(111, 91, 246)',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-7NECSDQ2KN',
        anonymizeIP: true,
      },
    ],
  ],
};

module.exports = config;
