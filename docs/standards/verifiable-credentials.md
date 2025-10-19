---
standard: "Verifiable Credentials"
specification: "W3C VC Data Model 2.0"
published: "2025-05"
standards_body: "W3C"
status: "W3C Recommendation 2.0 (May 2025)"
adoption_level: "Growing"
use_cases:
  - "Digital Credentials"
  - "Mobile Driver's Licenses"
  - "Educational Diplomas"
  - "Professional Licenses"
industries:
  - "Government"
  - "Higher Education"
  - "Healthcare"
related_standards:
  - "DIDs"
  - "OpenID4VCI"
  - "OpenID4VP"
  - "SD-JWT"
---

# Verifiable Credentials

## Summary

**Purpose:** Interoperable format for tamper-evident digital credentials (driver's licenses, diplomas, professional licenses)

**Adoption:** Growing (government-driven) - EU eIDAS 2.0 mandates EUDI Wallet with VCs, 30+ jurisdictions implementing

**Plain-Language:** Verifiable Credentials are digital versions of physical credentials. Like a driver's license in your phone's wallet, digitally signed by the issuing authority, verifiable by anyone, privacy-preserving (show only what's needed). TSA accepts mobile driver's licenses from 15 US states using VCs.

## Technical Details

- **Components:** Issuer signs credential → Holder stores in wallet → Verifier checks validity
- **Formats:** JSON-LD with Data Integrity, JWT (JOSE), COSE (binary)
- **Selective Disclosure:** BBS+ cryptosuite enables proving "over 21" without revealing birthdate
- **Revocation:** W3C Bitstring Status List for efficient revocation checking

**Major Driver:** EU eIDAS 2.0 regulation mandates EUDI Wallet rollout 2026-2027, targeting 80% of Europeans using digital wallets by 2030.

## Industry Usage

**Government:** Mobile driver's licenses (15 US states), EU EUDI Wallet (400M+ potential users)
**Education:** Digital diplomas (CLR 2.0, Open Badges 3.0)
**Healthcare:** Health credentials, professional licenses

**References:**
- W3C VC Data Model 2.0: https://www.w3.org/TR/vc-data-model-2.0/

**Last Updated:** 2025-10-19
