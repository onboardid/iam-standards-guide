# IAM Standards Guide - Metadata Schema Specification

Version: 1.0
Last Updated: 2025-10-19

## Overview

This document defines the metadata schema for all IAM standard documentation pages. Consistent metadata enables filtering, searching, cross-referencing, and automated validation across the standards catalog.

## Required Fields

All standard pages MUST include these fields in YAML front matter:

### `standard` (string, required)
**Full name of the standard**
- Example: `"OAuth 2.0"`
- Example: `"OpenID Connect 1.0"`
- Format: Official standard name as specified by standards body

### `specification` (string, required)
**RFC/specification number or identifier**
- Example: `"RFC 6749"`
- Example: `"W3C Recommendation"`
- Example: `"OASIS Standard v2.0"`

### `published` (string, required)
**Publication date in YYYY-MM format**
- Example: `"2012-10"`
- Example: `"2014-02"`
- Use initial publication date for the current major version

### `standards_body` (enum, required)
**Organization that published the standard**

Allowed values:
- `IETF` - Internet Engineering Task Force
- `W3C` - World Wide Web Consortium
- `OpenID Foundation` - OpenID Foundation
- `OASIS` - OASIS Open
- `FIDO Alliance` - FIDO Alliance
- `NIST` - National Institute of Standards and Technology
- `CNCF` - Cloud Native Computing Foundation
- `ISO` - International Organization for Standardization
- `ITU` - International Telecommunication Union
- `Kantara` - Kantara Initiative
- `DIF` - Decentralized Identity Foundation
- `Other` - For non-standard bodies (document in notes)

### `status` (string, required)
**Current version or status**
- Example: `"RFC 6749 (October 2012)"`
- Example: `"v2.0 Final"`
- Example: `"Draft 13 (approaching RFC)"`

### `adoption_level` (enum, required)
**Current adoption/maturity level**

Allowed values:
- `Universal` - Used everywhere, de facto standard (OAuth 2.0, OIDC, X.509, JWT)
- `Widely Implemented` - Production use across many organizations (SAML 2.0, SCIM, FIDO2, LDAP, Kerberos)
- `Industry Standard` - Dominant in specific sectors (FAPI for finance, SMART on FHIR for healthcare)
- `Growing` - Increasing adoption, moving toward widespread (Passkeys, DPoP, PAR, RAR, DIDs, VCs)
- `Emerging` - Specifications finalized, limited production use (GNAP, OAuth 2.1, CAEP, Token Status List)
- `Legacy/Declining` - Previously deployed, new implementations rare (XACML, WS-Federation, FIDO U2F)
- `Deprecated` - No longer recommended, being phased out (OAuth Implicit Flow, OpenID 2.0, SPML, ROPC Flow)
- `Experimental` - Published RFCs/specs, minimal production adoption (research/exploration phase)

### `use_cases` (array of strings, required)
**Primary use cases for this standard**
- Minimum: 1 use case
- Maximum: 5 use cases
- Example: `["API Authorization", "Third-party Access", "Delegated Authorization"]`
- Be specific and actionable

### `industries` (array of strings, required)
**Industries/sectors where this standard is commonly used**

Allowed values (select all that apply):
- `All` - Universal across all industries
- `Financial Services` - Banking, fintech, payments
- `Healthcare` - Hospitals, EHR systems, health tech
- `Government` - Public sector, federal/state agencies
- `Higher Education` - Universities, research institutions
- `Enterprise` - General B2B/corporate use
- `Consumer` - B2C applications, social platforms
- `Telecommunications` - Telecom providers, ISPs
- `IoT` - Internet of Things, device identity
- `Cloud/SaaS` - Cloud-native applications

### `related_standards` (array of strings, required)
**Standards that relate to this one**
- Include: Dependencies, complementary standards, extensions
- Example: `["OpenID Connect", "PKCE", "OAuth 2.1", "DPoP", "PAR"]`
- Minimum: 0 (if truly standalone)
- Use official standard names consistently

## Optional Fields

### `supersedes` (array of strings, optional)
**Standards that this replaces or succeeds**
- Example: `["OAuth 1.0"]`
- Example: `["OpenID 2.0"]`

### `deprecated_by` (string, optional)
**If this standard is deprecated, what replaces it**
- Example: `"OAuth 2.1"`
- Only use for deprecated standards

### `certification_available` (boolean, optional)
**Whether official certification programs exist**
- Example: `true` (for FAPI, FIDO)
- Default: `false`

### `profiles` (array of strings, optional)
**Industry-specific profiles or extensions**
- Example (for OIDC): `["FAPI", "iGov", "HEART", "SMART on FHIR", "eKYC"]`

## Example Complete Metadata

```yaml
---
standard: "OAuth 2.0"
specification: "RFC 6749"
published: "2012-10"
standards_body: "IETF"
status: "RFC 6749 (October 2012), current standard"
adoption_level: "Universal"
use_cases:
  - "API Authorization"
  - "Third-party Application Access"
  - "Delegated Authorization"
industries:
  - "All"
related_standards:
  - "OpenID Connect"
  - "PKCE"
  - "OAuth 2.1"
  - "DPoP"
  - "PAR"
  - "RAR"
  - "FAPI"
supersedes:
  - "OAuth 1.0"
---
```

## Validation Rules

1. **Required fields** - Build must fail if any required field missing
2. **Enum values** - `standards_body` and `adoption_level` must match allowed values
3. **Date format** - `published` must be YYYY-MM format
4. **Array minimum** - `use_cases`, `industries`, `related_standards` must have at least 1 item (or be explicitly empty for related_standards)
5. **Consistency** - `related_standards` names must match other standard page `standard` field values

## Usage in Code

Metadata can be accessed in React components via Docusaurus frontmatter:

```typescript
import {useDoc} from '@docusaurus/theme-common/internal';

const {frontMatter} = useDoc();
const adoptionLevel = frontMatter.adoption_level;
```

## Future Enhancements

Potential additions for Phase 2:
- `security_concerns`: Known vulnerabilities or risks
- `migration_guides`: Links to relevant migration documentation
- `last_updated`: Automatic timestamp of content updates
- `accuracy_confidence`: Scoring based on review status
