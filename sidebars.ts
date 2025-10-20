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
      label: 'Quick Start',
      items: [
        'guides/which-authentication-standard',
        'guides/which-authorization-standard',
      ],
    },
    {
      type: 'category',
      label: 'Industry Guides',
      items: [
        'industries/financial-services',
        'industries/healthcare',
        'industries/government',
      ],
    },
    'timeline',
    'relationships',
    {
      type: 'category',
      label: 'IAM Standards',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'standards/index',
      },
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
        {
          type: 'category',
          label: 'OAuth Security Extensions',
          items: [
            'standards/dpop',
            'standards/par',
            'standards/rar',
          ],
        },
        {
          type: 'category',
          label: 'Provisioning & Lifecycle',
          items: [
            'standards/scim',
          ],
        },
        {
          type: 'category',
          label: 'Directory & Network',
          items: [
            'standards/x509',
            'standards/ldap',
            'standards/kerberos',
            'standards/radius',
          ],
        },
        {
          type: 'category',
          label: 'Authorization Policy',
          items: [
            'standards/opa',
            'standards/cedar',
            'standards/openfga',
            'standards/xacml',
          ],
        },
        {
          type: 'category',
          label: 'Security Profiles',
          items: [
            'standards/fapi',
            'standards/jar',
            'standards/jarm',
          ],
        },
        {
          type: 'category',
          label: 'Security Signals & Events',
          items: [
            'standards/sse',
            'standards/caep',
            'standards/risc',
          ],
        },
        {
          type: 'category',
          label: 'Decentralized Identity',
          items: [
            'standards/dids',
            'standards/verifiable-credentials',
            'standards/openid4vc',
            'standards/sd-jwt',
          ],
        },
        {
          type: 'category',
          label: 'Workload Identity & Advanced',
          items: [
            'standards/spiffe-spire',
            'standards/gnap',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
