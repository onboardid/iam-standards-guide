---
standard: "DIDs"
specification: "W3C DID Core 1.0"
published: "2022-07"
standards_body: "W3C"
status: "W3C Recommendation 1.0 (July 2022), v1.1 in progress"
adoption_level: "Emerging"
use_cases:
  - "Decentralized Identity"
  - "Self-Sovereign Identity"
  - "Verifiable Credential Infrastructure"
industries:
  - "Government"
  - "Enterprise"
related_standards:
  - "Verifiable Credentials"
  - "OpenID4VCI"
  - "OpenID4VP"
---

# DIDs (Decentralized Identifiers)

## Summary

**Purpose:** URI-based identifiers without centralized authorities, enabling self-sovereign identity

**Adoption:** Emerging - 184 DID methods registered, government adoption via eIDAS 2.0, limited enterprise

**Plain-Language:** DIDs are like email addresses you control yourself without needing Gmail or Outlook. A DID (e.g., `did:web:example.com`) maps to a DID Document containing your public keys. You prove ownership through cryptographic signatures, no central registry needed.

## Technical Details

- **Format:** did:method:identifier (e.g., `did:web:alice.example`)
- **DID Document:** JSON with public keys, service endpoints
- **184 DID Methods:** did:web (most used), did:key, did:ion, did:ethr, etc.
- **Resolution:** Retrieve DID Document from verifiable data registry

**Adoption Reality:** Most implementations remain pilot/PoC phase. Government initiatives (EU eIDAS 2.0, national digital IDs) drive concrete adoption. did:web dominates actual usage despite security concerns.

## Industry Usage

**Government:** EU EUDI Wallet, national digital identity programs
**Enterprise:** Limited production scale

**References:**
- W3C DID Core: https://www.w3.org/TR/did-core/

**Last Updated:** 2025-10-19
