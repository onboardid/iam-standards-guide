---
standard: "OpenID4VCI/VP"
specification: "OpenID for Verifiable Credential Issuance 1.0, OpenID for Verifiable Presentations 1.0"
published: "2025-09"
standards_body: "OpenID Foundation"
status: "Final (September 2025)"
adoption_level: "Widely Implemented"
use_cases:
  - "Verifiable Credential Issuance"
  - "Credential Presentation"
  - "Digital Wallet Integration"
industries:
  - "Government"
  - "Higher Education"
  - "Healthcare"
related_standards:
  - "Verifiable Credentials"
  - "DIDs"
  - "OpenID Connect"
---

# OpenID4VCI/VP (OpenID for Verifiable Credentials)

## Summary

**Purpose:** Standard protocols for issuing and presenting Verifiable Credentials using OIDC patterns

**Adoption:** Widely Implemented - 30+ jurisdictions (California DMV, UK Gov, Swiss Confederation, Japan Digital Agency), EU eIDAS 2.0 EUDI Wallet

**Plain-Language:** OpenID4VCI/VP connects the worlds of Verifiable Credentials and OpenID Connect. When your phone's digital wallet needs to get a driver's license (OpenID4VCI = issuance) or prove your age to a verifier (OpenID4VP = presentation), these protocols handle the secure exchange. Final specifications (September 2025) drive EU digital wallet implementations.

## Technical Details

**OpenID4VCI (Credential Issuance):**
- Issuer provides credentials to wallet
- Uses OAuth 2.0 patterns for authorization
- Supports both W3C VCs and ISO mDL formats

**OpenID4VP (Verifiable Presentations):**
- Wallet presents credentials to verifier
- Selective disclosure supported
- Privacy-preserving

**Driver:** EU eIDAS 2.0 mandate for EUDI Wallet (400M+ potential users by 2027)

---

## Industry Usage

**Government:** 30+ jurisdictions implementing
**Education:** Digital diplomas (CLR 2.0, Open Badges 3.0)
**Driver:** Regulatory mandates (eIDAS 2.0)

---

## References

- **OpenID4VCI:** https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html
- **OpenID4VP:** https://openid.net/specs/openid-4-verifiable-presentations-1_0.html

---

**Last Updated:** 2025-10-19
