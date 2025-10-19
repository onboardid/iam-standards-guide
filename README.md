# IAM Standards Guide

The Definitive Identity and Access Management Standards Guide - a comprehensive, vendor-agnostic reference for IAM standards.

## Overview

This guide maps 50+ open IAM standards to real-world implementation needs, providing:

- **Comprehensive Standards Catalog** - OAuth, OIDC, SAML, FIDO2, Passkeys, SCIM, DIDs, Verifiable Credentials, and more
- **Industry-Specific Guidance** - Financial Services, Healthcare, Government, Higher Education, Enterprise, Consumer
- **Decision Trees** - "Which authentication standard should I use?" answered clearly
- **Migration Guides** - SAML→OIDC, Password→Passkeys, OAuth 2.0→2.1
- **Compliance Mapping** - NIST 800-63, PSD2, HIPAA, GDPR, FedRAMP requirements
- **Historical Timeline** - Evolution of standards from 1988-2025

## Prerequisites

- **Node.js** 20.0 or higher
- **npm** or **yarn**
- **Git**

## Getting Started

### Installation

```bash
git clone https://github.com/onboardid/iam-standards-guide.git
cd iam-standards-guide
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Type Checking

```bash
npm run typecheck
```

Runs TypeScript type checking across the project.

## Project Structure

```
iam-standards-guide/
├── docs/               # Markdown documentation
│   ├── standards/     # Individual standard pages (to be created)
│   ├── industries/    # Industry-specific guides (to be created)
│   └── guides/        # Migration guides (to be created)
├── blog/              # Blog/updates
├── src/               # React components
├── static/            # Static assets
├── .github/
│   └── workflows/     # CI/CD pipelines
├── docusaurus.config.ts
├── sidebars.ts
└── package.json
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

The site is automatically deployed to Vercel/Netlify on every push to the `main` branch.

- **Production:** https://iam-standards-guide.vercel.app (or custom domain)
- **Preview:** Automatic preview deployments for all pull requests

## Technology Stack

- **Framework:** Docusaurus 3.x (React-based)
- **Language:** TypeScript
- **Hosting:** Vercel/Netlify
- **CI/CD:** GitHub Actions
- **Version Control:** Git/GitHub

## License

UNLICENSED - All rights reserved.

## Contact

For questions or contributions, please open an issue on GitHub: https://github.com/onboardid/iam-standards-guide/issues
