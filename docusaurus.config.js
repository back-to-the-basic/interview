// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Interview',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  themeConfig: {},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      navbar: {
        title: 'Interview',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'os/개념/1',
            position: 'left',
            label: '운영체제',
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
            docId: 'javascript/1',
            position: 'left',
            label: 'JavaScript',
          },
          {
            href: 'https://github.com/back-to-the-basic/interview',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      plugins: [
        [
          '@docusaurus/plugin-pwa',
          {
            debug: true,
            offlineModeActivationStrategies: [
              'appInstalled',
              'standalone',
              'queryString',
            ],
            pwaHead: [
              {
                tagName: 'link',
                rel: 'icon',
                href: '/img/docusaurus.png',
              },
              {
                tagName: 'link',
                rel: 'manifest',
                href: '/manifest.json', // your PWA manifest
              },
              {
                tagName: 'meta',
                name: 'theme-color',
                content: 'rgb(37, 194, 160)',
              },
            ],
          },
        ],
      ],
    }),
};

module.exports = config;
