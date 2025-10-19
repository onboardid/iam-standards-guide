# Multi-Tenant Architecture for Tailored Websites

## Overview

The IAM Standards Guide supports multiple client deployments from a single codebase using Git branches and Docusaurus configuration. Each client gets a customized, branded version of the guide with filtered content matching their specific needs.

## Architecture Strategy

### Git Branching Model

```
main (master branch)
├── All 29 standards
├── Complete guide
├── Public deployment
└── Source of truth

client-acme-financial (client branch)
├── Filtered to 8 standards (OAuth, OIDC, PKCE, FAPI, DPoP, PAR, JAR, JARM)
├── Acme Financial branding
├── Financial Services compliance focus
└── Independent Vercel deployment

client-healthtech-pro (client branch)
├── Filtered to 6 standards (OIDC, SAML, SCIM, PKCE, FIDO2, X.509)
├── HealthTech Pro branding
├── Healthcare/HIPAA compliance focus
└── Independent Vercel deployment
```

### Content Updates Flow

```
1. Update standard on main branch
   ↓
2. Merge main → client branches
   ↓
3. Each client deployment auto-updates
   ↓
4. Clients get latest content with their customization preserved
```

## Client Configuration Schema

Each client has a `client-config.yaml` file:

```yaml
# Client Configuration
client_id: "acme-financial"
client_name: "Acme Financial Services"
client_domain: "standards.acmefinancial.com" # Optional custom domain

# Branding
branding:
  site_title: "Acme IAM Standards Reference"
  tagline: "Internal Identity Standards Guide"
  primary_color: "#003366"  # Acme blue
  logo_url: "/img/acme-logo.svg"

# Content Filtering
selected_standards:
  - oauth-2.0
  - openid-connect
  - pkce
  - fapi
  - dpop
  - par
  - jar
  - jarm
  - scim
  - x509

# Compliance Focus
compliance_frameworks:
  - "PSD2"
  - "Open Banking"
  - "SOC 2"
  - "GDPR"

# Team Information
team_size: 200
contact_email: "identity-team@acmefinancial.com"
subscription_tier: "standard" # standard | premium | enterprise
```

## Creating a New Client Instance

### Step 1: Create Client Branch

```bash
# From main branch
git checkout main
git pull origin main

# Create client branch
git checkout -b client-acme-financial

# Create client configuration
cp client-config.template.yaml client-config.yaml
# Edit client-config.yaml with client details
```

### Step 2: Apply Client Customization

```bash
# Run customization script (filters content, applies branding)
npm run customize-client

# This script:
# - Reads client-config.yaml
# - Updates docusaurus.config.ts with branding
# - Filters sidebars.ts to show only selected standards
# - Updates site title, colors, logo
# - Removes standards not in selected_standards list
```

### Step 3: Test Locally

```bash
npm start
# Verify: Only selected standards appear
# Verify: Client branding applied
# Verify: Site builds successfully
```

### Step 4: Deploy to Vercel

```bash
# Push client branch
git add .
git commit -m "Setup client: Acme Financial"
git push origin client-acme-financial

# In Vercel Dashboard:
# - Create new project
# - Import from client-acme-financial branch
# - Configure custom domain (optional)
# - Deploy
```

### Step 5: Ongoing Updates

```bash
# When main branch content updates:
git checkout client-acme-financial
git merge main
# Resolve any conflicts (typically none)
git push origin client-acme-financial
# Vercel auto-deploys updated content with client customization preserved
```

## Content Filtering Mechanism

### Approach 1: Sidebar Filtering (Simple)

Edit `sidebars.ts` to include only client's selected standards:

```typescript
// For client-acme-financial
items: [
  'standards/oauth-2.0',
  'standards/openid-connect',
  'standards/pkce',
  'standards/fapi',
  // Only financial-relevant standards
]
```

### Approach 2: Build-Time Filtering (Advanced - Phase 2)

Use Docusaurus plugin to filter content at build time based on client-config.yaml

## Client Customization Options

**Tier 1 - Standard ($2K/month):**
- Content filtering (select 10-15 standards)
- Basic branding (logo, colors, site title)
- Standard deployment (Vercel subdomain)

**Tier 2 - Premium ($3K-$4K/month):**
- All Tier 1 features
- Custom domain
- Custom content additions
- Priority support

**Tier 3 - Enterprise ($5K/month):**
- All Tier 2 features
- SSO integration
- Role-based content views
- White-glove onboarding
- Dedicated success manager

## Deployment Architecture

```
Main Repository (GitHub)
├── main branch → iam-standards-guide.vercel.app (public)
├── client-acme-financial → acme-standards.vercel.app
├── client-healthtech → healthtech-standards.vercel.app
└── client-govtech → govtech-standards.vercel.app

Each deployment:
- Independent Vercel project
- Separate analytics
- Custom branding
- Filtered content
- Automatic updates from main (via merge)
```

## Scalability

**Current Approach (MVP):**
- Handles 5-10 clients efficiently
- Manual branch management
- Manual deployment setup

**Phase 2 Automation:**
- Automated branch creation
- Self-service client portal
- API-driven deployments
- Automated billing integration

## Cost Structure

**Infrastructure per client:**
- Vercel hosting: $0 (free tier covers most)
- Custom domain: $12/year (optional)
- Total: ~$0-20/month per client

**At 10 clients:**
- Infrastructure: ~$50-200/month total
- Revenue: $20K-$50K/month
- **Margin: 99%+ on infrastructure** (labor is main cost)

## Next Steps

1. Validate PoC with 2 test deployments
2. Refine based on learnings
3. Document client onboarding process
4. Build automation tools (Story 2.8, 2.13)
5. Create demo for sales (Story 2.3)

---

**Last Updated:** 2025-10-19
