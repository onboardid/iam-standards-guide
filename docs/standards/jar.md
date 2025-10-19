---
standard: "JAR"
specification: "RFC 9101"
published: "2021-08"
standards_body: "IETF"
status: "RFC 9101 (August 2021)"
adoption_level: "Growing"
use_cases:
  - "Signed Authorization Requests"
  - "Request Integrity"
  - "Financial API Security"
industries:
  - "Financial Services"
  - "Enterprise"
related_standards:
  - "OAuth 2.0"
  - "FAPI"
  - "PAR"
---

# JAR (JWT-Secured Authorization Request)

## Summary

**Purpose:** Signs and optionally encrypts OAuth authorization requests using JWT

**Adoption:** Growing - mandatory in FAPI 1.0 Advanced, financial services implementations

**Plain-Language:** JAR wraps OAuth authorization request parameters in a signed JWT, ensuring request integrity and enabling non-repudiation. Required in FAPI 1.0 for financial services. FAPI 2.0 uses PAR instead (simpler), but JAR remains in use.

## Technical Details

Encodes authorization request parameters in JWT signed with client's private key. Authorization server validates signature before processing.

**Use Case:** Financial transactions requiring non-repudiation and request integrity

**References:**
- RFC 9101: https://datatracker.ietf.org/doc/html/rfc9101

**Last Updated:** 2025-10-19
