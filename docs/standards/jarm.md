---
standard: "JARM"
specification: "OpenID JARM"
published: "2021-01"
standards_body: "OpenID Foundation"
status: "Final"
adoption_level: "Growing"
use_cases:
  - "Signed Authorization Responses"
  - "Response Integrity"
  - "Financial API Security"
industries:
  - "Financial Services"
related_standards:
  - "OAuth 2.0"
  - "JAR"
  - "FAPI"
---

# JARM (JWT-Secured Authorization Response Mode)

## Summary

**Purpose:** Signs authorization responses using JWT for integrity and non-repudiation

**Adoption:** Growing - financial services, complements JAR (request signing)

**Plain-Language:** While JAR signs authorization requests, JARM signs authorization responses. Together they provide end-to-end integrity for OAuth flows. Used in financial services where audit trails and non-repudiation matter.

**References:**
- OpenID JARM: https://openid.net/specs/oauth-v2-jarm.html

**Last Updated:** 2025-10-19
