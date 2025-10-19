import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'IAM Standards',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Authentication & Authorization',
          items: [
            'standards/oauth-2.0',
            'standards/openid-connect',
            'standards/pkce',
            'standards/saml',
            'standards/fido2-webauthn',
          ],
        },
        // Future categories:
        // {
        //   type: 'category',
        //   label: 'Provisioning & Lifecycle',
        //   items: ['standards/scim', ...],
        // },
        // {
        //   type: 'category',
        //   label: 'Decentralized Identity',
        //   items: ['standards/dids', 'standards/verifiable-credentials', ...],
        // },
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};

export default sidebars;
