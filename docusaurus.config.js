// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',
        // ... other options ...
      },
    ],[
      '@docusaurus/plugin-content-blog',
      {
        id: 'aptitude',
        routeBasePath: 'aptitude',
        path: './aptitude',
        // ... other options ...
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'dev-ops',
        routeBasePath: 'dev-ops',
        path: './dev-ops',
        // ... other options ...
      },
    ],
  ],
  title: 'Code Camp',
  tagline: 'Tech Stack Trainning',
  url: 'http://localhost:1444',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mwangigikonyo/codecamp/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mwangigikonyo/codecamp/edit/main/',
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
        title: 'Home',
        logo: {
          alt: 'Home',
          src: 'img/SozuriLogo.png',
        },
        items: [
          {to: '/docs/sailsjs-tutorial/index', label: 'Sails JS Tutorial', position: 'left'},
          {to: '/dev-ops', label: 'Dev Ops', position: 'left'},
          {to: '/aptitude', label: 'Aptitude', position: 'left'},
          {
            href: 'https://github.com/mwangigikonyo/codecamp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mwangigikonyo/codecamp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sozuri Code Camp`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    stylesheets: [
      '/css/custom.css',
    ],
};

module.exports = config;
