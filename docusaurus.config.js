// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'great lakes dev',
  titleDelimiter: '⚡',
  tagline: 'Free & Open Source Hardware, Firmware, and Software',
  url: 'https://greatlakesdev.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gld-logo.favicon',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'greatlakesdev', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/greatlakesdev/docs/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          blogTitle: "great lakes dev blog posts and guides",
          blogDescription: "Guides, walkthroughs and general updates for the great lakes dev org can all be found here!",
          showReadingTime: true,
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
        title: 'great lakes dev',
        logo: {
          alt: 'great lakes dev logo',
          src: 'img/gld-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          {to: '/blog', label: 'blog', position: 'left'},
          {
            href: 'https://github.com/greatlakesdev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: '⚡ DEV101',
                to: '/blog/tags/dev-101',
              },
              {
                label: '🔩 Hardware Docs',
                to: '/docs/hardware',
              },
              {
                label: '🏗️ Templates Docs',
                to: '/docs/templates',
              },
            ],
          },
          {
            title: 'Say hello',
            items: [
                {
                    label: '🦣 Mastodon',
                    href: 'https://fosstodon.org/@stephendpmurphy',
                },
                {
                    label: '✉️ hello@greatlakesdev.io',
                    href: '#',
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
                href: 'https://github.com/greatlakesdev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} great lakes dev - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
    }),
};

module.exports = config;
