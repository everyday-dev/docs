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
  favicon: 'img/lightning_white_33x33.png',

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

  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    'docusaurus2-dotenv'
  ],

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
        gtag: {
            trackingID: process.env.GA_TRACKING_ID,
            anonymizeIP: false
        }
      })
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/everydaydev_black_on_white_1200x627.png',
      navbar: {
        // title: 'everyday⚡dev',
        logo: {
            alt: 'everyday dev logo',
            src: 'img/everydaydev_black.svg',
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
          {
            href: 'https://www.everydaydev.io',
            position: 'right',
            className: 'header-hireus-link',
          },
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
                // {
                //     label: '🦣 Mastodon',
                //     href: 'https://fosstodon.org/@stephendpmurphy',
                // },
                {
                    label: '✉️ hello@everydaydev.io',
                    href: 'mailto:hello@everydaydev.io?body=Say%20hello%2C%20ask%20questions%2C%20or%20send%20us%20whatever%20else%20you%20want%20to%20chat%20about!&subject=Hello%20%F0%9F%91%8B',
                },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '📙 Blog',
                to: '/blog',
              },
              {
                label: '💾 Github',
                href: 'https://github.com/everyday-dev',
              },
              {
                label: '✨ Hire us',
                href: 'https://www.everydaydev.io',
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
