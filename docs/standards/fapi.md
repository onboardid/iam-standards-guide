---
standard: "FAPI 2.0"
specification: "OpenID FAPI 2.0 Security Profile"
published: "2025-02"
standards_body: "OpenID Foundation"
status: "Final (February 2025)"
adoption_level: "Widely Implemented"
use_cases:
  - "Financial-Grade API Security"
  - "Open Banking"
  - "High-Security OAuth"
industries:
  - "Financial Services"
related_standards:
  - "OAuth 2.0"
  - "OpenID Connect"
  - "PKCE"
  - "PAR"
  - "DPoP"
  - "RAR"
supersedes:
  - "FAPI 1.0 Advanced"
---

# FAPI 2.0 (Financial-Grade API)

## Summary

**Purpose:** High-security OAuth/OIDC profile for financial services and Open Banking

**Adoption:** Widely Implemented - required for PSD2, Open Banking (UK, Brazil, Australia, EU)

**Plain-Language:** FAPI 2.0 is the ultra-secure version of OAuth for banking and payments. When you use Open Banking to share financial data or initiate payments, FAPI 2.0 protects those high-value transactions. Mandatory requirements: PKCE, PAR, sender-constrained tokens (DPoP or mTLS), short token lifetimes (≤15 min).

## Technical Details

**FAPI 2.0 Requirements:**
- PKCE mandatory
- PAR mandatory
- DPoP or mTLS (sender-constrained tokens)
- Token lifetime ≤15 minutes
- Certificate-based client authentication
- Non-repudiation for transactions

**Certification:** OpenID FAPI Certification required for compliance

**References:**
- FAPI 2.0: https://openid.net/specs/fapi-2_0-security-profile.html

**Last Updated:** 2025-10-19
