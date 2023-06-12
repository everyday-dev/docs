// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'everyday⚡dev',
//   titleDelimiter: '⚡',
  tagline: 'Free & Open Source Hardware, Firmware, and Software projects',
  url: 'https://os.everydaydev.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/everydaydev.favicon',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'everyday-dev', // Usually your GitHub org/user name.
  projectName: 'opensource', // Usually your repo name.

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
            'https://github.com/everyday-dev/opensource/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          blogTitle: "blog posts and guides",
          blogDescription: "Guides, walkthroughs and general updates for the everyday dev org can all be found here!",
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
        // title: 'everyday⚡dev',
        logo: {
            alt: 'everyday dev logo',
            src: 'img/everydaydev_black_txtOnly.svg',
            width: 130,
            className: 'header-logo'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          {to: '/blog', label: 'blog', position: 'left'},
        //   {
        //     href: 'https://everydaydev.io',
        //     // label: 'Hire Us ⚡',
        //     position: 'right',
        //     className: 'header-hireus-link',
        //   },
          {
            href: 'https://github.com/everyday-dev',
            // label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'light',
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
                    label: '✉️ hello@everydaydev.io',
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
                href: 'https://github.com/everyday-dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} everyday dev - Built with Docusaurus.`,
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
