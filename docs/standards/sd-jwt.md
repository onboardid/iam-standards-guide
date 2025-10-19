---
standard: "SD-JWT"
specification: "SD-JWT Draft (approaching RFC)"
published: "2022-01"
standards_body: "IETF"
status: "Draft 22 (late 2024, approaching RFC status)"
adoption_level: "Growing"
use_cases:
  - "Selective Disclosure for JWTs"
  - "Privacy-Preserving Credentials"
  - "EUDI Wallet Implementation"
industries:
  - "Government"
  - "Healthcare"
  - "Financial Services"
related_standards:
  - "JWT"
  - "Verifiable Credentials"
  - "OpenID4VCI"
---

# SD-JWT (Selective Disclosure for JWTs)

## Summary

**Purpose:** Enables selective disclosure of JWT claims while maintaining cryptographic integrity

**Adoption:** Growing - EU EUDI Wallet, Japan Digital Agency, UK Government, Swiss implementations

**Plain-Language:** SD-JWT lets you share only the information needed from a credential. Have a digital driver's license? SD-JWT lets you prove "I'm over 21" without revealing your exact birthdate. The verifier confirms the claim is legitimate (cryptographically signed by DMV) without seeing unnecessary personal data.

## Technical Details

- **Approach:** Individual JWT claims can be disclosed selectively
- **Use Case:** Age verification (prove >21 without birthdate), nationality proof (without full ID details)
- **EUDI Wallet:** European digital wallet uses SD-JWT VC format
- **Status:** Approaching RFC (draft 22 in late 2024)

**Privacy Benefit:** Data minimization - share only what's necessary, not entire credential

---

## Industry Usage

**Government:** EU EUDI Wallet (primary driver), national digital ID programs
**Healthcare:** Patient data sharing with selective disclosure

---

## References

- **SD-JWT Draft:** https://datatracker.ietf.org/doc/html/draft-ietf-oauth-selective-disclosure-jwt

---

**Last Updated:** 2025-10-19
