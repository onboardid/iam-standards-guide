import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IAM Standards Guide',
  tagline: 'The Definitive Identity and Access Management Standards Reference',
  favicon: 'img/favicon.ico',

  // Mermaid diagrams support
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://iam-standards-guide.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'onboardid',
  projectName: 'iam-standards-guide',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/onboardid/iam-standards-guide/tree/main/',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/onboardid/iam-standards-guide/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IAM Standards Guide',
      logo: {
        alt: 'IAM Standards Guide Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Standards',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/onboardid/iam-standards-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Standards',
          items: [
            {
              label: 'Browse Catalog',
              to: '/docs/standards/',
            },
            {
              label: 'Authentication',
              to: '/docs/guides/which-authentication-standard',
            },
            {
              label: 'Authorization',
              to: '/docs/guides/which-authorization-standard',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Timeline (1988-2025)',
              to: '/docs/timeline',
            },
            {
              label: 'Relationships',
              to: '/docs/relationships',
            },
            {
              label: 'Industry Guides',
              to: '/docs/industries/financial-services',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/onboardid/iam-standards-guide',
            },
            {
              label: 'Report Issue',
              href: 'https://github.com/onboardid/iam-standards-guide/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IAM Standards Guide. Powered by Onboard.id`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
