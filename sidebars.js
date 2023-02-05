/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    sidebar: [
    {
        type: 'doc',
        label: '👋 Introduction',
        id: 'intro'
    },
    {
        type: 'category',
        label: '🔩 Hardware',
        link: {
            type: 'doc',
            id: 'hardware/index',
          },
        items: [
            {
              type: 'category',
              label: 'atmega32u4 breakout',
              link: {
                type: 'doc',
                id: 'hardware/atmega32u4-breakout/index',
              },
              items: [
                'hardware/atmega32u4-breakout/introduction',
                'hardware/atmega32u4-breakout/hardware-overview',
                'hardware/atmega32u4-breakout/getting-started',
                {
                    type: 'category',
                    label: 'Advanced Guides',
                    link: {
                      type: 'doc',
                      id: 'hardware/atmega32u4-breakout/advanced-guides/index',
                    },
                    items: [
                      'hardware/atmega32u4-breakout/advanced-guides/arduino',
                      'hardware/atmega32u4-breakout/advanced-guides/bare-metal',
                      'hardware/atmega32u4-breakout/advanced-guides/usb-dfu',
                    ],
                },
              ],
            },
            'hardware/breadboard-io/breadboard-io',
        ],
    },
    {
        type: 'category',
        label: '🏗️ Templates',
        link: {
            type: 'doc',
            id: 'templates/index',
          },
        items: [
            'templates/avr-cmake-template/avr-cmake-template',
            'templates/kicad-project-template/kicad-project-template'
        ],
    },
  ],
};

module.exports = sidebars;
