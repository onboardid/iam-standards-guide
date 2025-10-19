# Content Author Guide

Welcome to the IAM Standards Guide content authoring process! This guide will help you create consistent, high-quality documentation for IAM standards.

## Quick Start

1. **Copy the template:** `docs/_templates/standard-template.md`
2. **Create new file:** `docs/standards/[standard-name].md` (use lowercase with dashes)
3. **Fill in metadata:** Complete all required fields in YAML front matter
4. **Write content:** Follow the template sections
5. **Validate:** Run `npm run validate-metadata`
6. **Test:** Run `npm start` to preview locally
7. **Submit:** Create pull request

## Metadata Schema

All standard pages MUST include metadata in YAML front matter. See `_templates/METADATA_SCHEMA.md` for complete specification.

### Required Fields

```yaml
---
standard: "Full Standard Name"
specification: "RFC Number or Spec ID"
published: "YYYY-MM"
standards_body: "[IETF|W3C|OpenID Foundation|etc.]"
status: "Current Version/Status"
adoption_level: "[Universal|Widely Implemented|Growing|etc.]"
use_cases:
  - "Primary use case"
industries:
  - "Industry name"
related_standards:
  - "Related Standard"
---
```

### Adoption Level Guide

Choose the appropriate level based on real-world deployment:

- **Universal:** Everyone uses it (OAuth 2.0, OIDC, X.509, JWT)
- **Widely Implemented:** Most organizations in relevant sectors (SAML, SCIM, FIDO2, LDAP)
- **Industry Standard:** Dominant in specific sector (FAPI for finance, SMART on FHIR for healthcare)
- **Growing:** Increasing adoption, moving mainstream (Passkeys, DPoP, PAR, DIDs, VCs)
- **Emerging:** Specs done, limited production use (GNAP, OAuth 2.1, CAEP)
- **Legacy/Declining:** Old deployments, rare new adoption (XACML, WS-Federation)
- **Deprecated:** Phased out, don't use (OAuth Implicit Flow, OpenID 2.0, SPML)
- **Experimental:** Research phase, minimal production (early drafts)

## Content Structure

### Summary Section

**Purpose:** Give readers immediate understanding without technical jargon.

**Plain-Language Overview** (2-3 paragraphs):
- What problem does this standard solve?
- Who uses it and why?
- What makes it important?

**Target Audience:** Executives, compliance managers, architects making quick decisions

**Good Example:**
> OAuth 2.0 is an authorization framework that lets applications access user resources without sharing passwords. When you click "Sign in with Google" to access a third-party app, OAuth 2.0 enables that secure access. It's used by billions of users daily across consumer and enterprise applications.

**Bad Example:**
> OAuth 2.0 (RFC 6749) is an authorization framework providing several grant types including authorization code flow with PKCE extension mandatory per RFC 7636...

*(Too technical for summary - save for Technical Details)*

**For Developers** (1-2 paragraphs):
- Brief technical context
- Key implementation concepts
- Links to official specs

### Technical Details Section

**Purpose:** Provide architects and developers with implementation-level information.

**What to Include:**
- Specification references (RFC numbers, W3C Recommendation status)
- Key technical concepts explained
- Protocol flows or mechanisms
- Security considerations
- Common configurations

**Citation Requirements:**
- Link to official RFC/specification
- Include version numbers and dates
- Reference primary sources, not blog posts

### Relationships Section

**Purpose:** Show how standards interconnect.

**What to Document:**
- **Depends On:** What this standard requires (e.g., OIDC depends on OAuth 2.0)
- **Complements:** Standards that work alongside (e.g., SCIM complements OIDC for provisioning)
- **Extensions:** Standards that build upon this (e.g., PKCE extends OAuth 2.0)
- **Supersedes:** What this replaces (e.g., OAuth 2.0 supersedes OAuth 1.0)

**Relationship Descriptions:**
Explain HOW they relate, not just that they do:
- ✅ Good: "OIDC builds authentication layer on top of OAuth 2.0's authorization framework"
- ❌ Bad: "Related to OAuth 2.0"

### Industry Usage Section

**Purpose:** Show sector-specific adoption and requirements.

**What to Include:**
- Which industries actively use this standard
- Regulatory drivers (PSD2 requires FAPI, 21st Century Cures requires SMART on FHIR)
- Compliance framework mapping
- Industry-specific profiles or configurations

### Open Source Implementations Section

**Purpose:** Help developers find production-ready tools.

**What to Include:**
- Project name and primary language/platform
- Setup complexity (Low/Medium/High)
- Production readiness (star rating or assessment)
- Brief notes on strengths/use cases
- Links to official documentation

**Setup Complexity Guide:**
- **Low:** 2-4 hours, Docker or simple config
- **Medium:** 8-40 hours, database + certificates + configuration
- **High:** 40+ hours, enterprise deployment, specialized expertise

**Testing Tools:**
List tools for development and testing (playgrounds, debuggers, validators)

### References Section

**Purpose:** Provide authoritative sources.

**Must Include:**
- Primary specification (RFC, W3C Recommendation, etc.)
- Standards body homepage
- Official working group or community resources

**Quality Standards:**
- Prefer official sources over blogs
- Use permanent URLs (RFCs, W3C TRs)
- Check links aren't broken

## Writing Guidelines

### Tone and Style

**Professional and Accessible:**
- Write for multiple audiences (executives, compliance, architects, developers)
- Start simple (summary), then get technical (details)
- Avoid jargon in summaries, use it appropriately in technical sections

**Objective and Vendor-Neutral:**
- Present facts, not opinions
- Don't favor specific vendors or products
- When listing implementations, include multiple options
- Avoid superlatives ("best", "most powerful") - use measurable terms

**Concise and Scannable:**
- Use bullet points and tables over long paragraphs
- Break complex topics into subsections
- Use headings effectively
- Keep paragraphs to 3-4 sentences

### Accuracy Standards

**Primary Sources Required:**
- All technical claims must cite official specifications
- Adoption levels based on observable data (vendor support, conference mentions, job postings)
- Version numbers and dates must be current

**Verification:**
- Double-check RFC numbers and publication dates
- Verify standards body attribution
- Test any links you include
- Review for factual accuracy before submitting

### Common Mistakes to Avoid

❌ **Mixing up authentication and authorization**
- Authentication = Who are you? (OIDC, SAML, FIDO2)
- Authorization = What can you do? (OAuth 2.0, XACML, OPA)

❌ **Confusing related standards**
- OAuth 2.0 ≠ OpenID Connect (OIDC builds on OAuth)
- FIDO2 ≠ Passkeys (Passkeys use FIDO2)
- SAML ≠ OAuth (different protocols for different use cases)

❌ **Outdated information**
- Check current adoption (don't rely on 2015 blog posts for 2025 adoption)
- Verify specification status (draft vs final)
- Note recent security updates

❌ **Vendor bias**
- Don't say "Auth0 is the best OAuth provider"
- Do say "Auth0, Okta, Keycloak, Ory Hydra are production-ready OAuth implementations"

## Content Review Process

### Self-Review Checklist

Before submitting, verify:

- [ ] All required metadata fields present
- [ ] Metadata validation passes (`npm run validate-metadata`)
- [ ] Summary includes plain-language overview
- [ ] Technical details cite official specifications
- [ ] Relationships documented with explanations
- [ ] Industry usage reflects actual adoption
- [ ] Open-source implementations listed with complexity indicators
- [ ] All links work (run `npm run build` - broken links fail build)
- [ ] Page renders correctly (`npm start` and check in browser)
- [ ] Content is vendor-neutral
- [ ] Facts are cited with sources

### Peer Review

Content will be reviewed for:
1. **Accuracy:** Technical correctness, current information
2. **Completeness:** All sections filled appropriately
3. **Clarity:** Understandable to target audiences
4. **Consistency:** Follows template and style guidelines
5. **Citations:** Claims backed by authoritative sources

## Examples

### Good vs Poor Content

**Good - Plain Language Summary:**
> SAML 2.0 is an XML-based protocol that enables single sign-on across different organizations. When you log into a company's systems and gain automatic access to third-party SaaS applications, SAML is often handling that federation. It's been the enterprise SSO standard since 2005, though newer alternatives like OpenID Connect are gaining adoption for modern applications.

**Poor - Too Technical for Summary:**
> SAML 2.0 (Security Assertion Markup Language) uses XML-based assertions with digital signatures transported via HTTP redirects or POST bindings to convey authentication and attribute information between Identity Providers and Service Providers through trust relationships established via metadata exchange.

**Good - Relationship Documentation:**
> **OpenID Connect** extends OAuth 2.0 by adding an authentication layer. While OAuth 2.0 handles authorization (granting apps access to resources), OIDC adds identity verification through ID Tokens. Together they provide complete authentication and authorization.

**Poor - Vague Relationship:**
> Related to OpenID Connect.

## Getting Help

- **Questions about metadata:** See `_templates/METADATA_SCHEMA.md`
- **Template structure questions:** Check `_templates/standard-template.md`
- **OAuth 2.0 example:** See `docs/standards/oauth-2.0.md` (created in Story 1.2)
- **Technical issues:** Open GitHub issue
- **Content clarification:** Ask maintainers in PR discussion

## Validation Commands

```bash
# Validate metadata schema
npm run validate-metadata

# Type check TypeScript
npm run typecheck

# Full validation (type check + metadata)
npm run validate

# Build (includes link checking, fails on broken links)
npm run build

# Preview locally
npm start
```

## Quick Reference

**File Naming:** lowercase-with-dashes.md (e.g., `oauth-2.0.md`, `openid-connect.md`)

**Standard Names in Metadata:** Use official names exactly (`"OAuth 2.0"` not `"OAuth2"`)

**Adoption Levels:** Be objective, use observable criteria

**Industry Tags:** Select all applicable, use `"All"` for universal standards

**Related Standards:** Link by exact `standard` field value for consistency

---

**Ready to author? Copy the template and start documenting!**
