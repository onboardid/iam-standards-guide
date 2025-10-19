---
standard: "PAR"
specification: "RFC 9126"
published: "2021-09"
standards_body: "IETF"
status: "RFC 9126 (September 2021)"
adoption_level: "Growing"
use_cases:
  - "OAuth Request Confidentiality"
  - "Financial API Security"
  - "Request Parameter Protection"
industries:
  - "Financial Services"
  - "Enterprise"
related_standards:
  - "OAuth 2.0"
  - "FAPI"
  - "JAR"
---

# PAR (Pushed Authorization Requests)

## Summary

**Purpose:** Enables clients to push authorization parameters directly to authorization server via back-channel before starting browser flow

**Adoption:** Growing - mandatory in FAPI 2.0, supported by Auth0, Okta, Keycloak

**For Financial Services:** PAR is mandatory in FAPI 2.0 for Open Banking implementations

## Technical Details

**How It Works:**
1. Client POSTs authorization parameters to `/as/par` endpoint (back-channel)
2. Authorization server returns `request_uri` (reference)
3. Client starts browser flow using only the `request_uri`
4. Authorization server retrieves parameters from stored request

**Benefits:**
- Request parameter confidentiality (not exposed in browser)
- Parameter integrity (server validates before browser redirect)
- Client authentication at request time
- Bypass URL length limits

## Industry Usage

**Financial Services:** Required by FAPI 2.0, implemented in UK Open Banking, Brazil, Australia CDR, EU PSD2

**References:**
- RFC 9126: https://datatracker.ietf.org/doc/html/rfc9126

**Last Updated:** 2025-10-19
