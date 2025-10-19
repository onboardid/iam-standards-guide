---
standard: "XACML 3.0"
specification: "OASIS XACML 3.0"
published: "2013-01"
standards_body: "OASIS"
status: "OASIS Standard (January 2013)"
adoption_level: "Legacy/Declining"
use_cases:
  - "Attribute-Based Access Control (ABAC)"
  - "Enterprise Policy Management"
  - "Compliance-Heavy Verticals"
industries:
  - "Government"
  - "Financial Services"
  - "Healthcare"
related_standards:
  - "OPA"
  - "Cedar"
supersedes:
  - "XACML 2.0"
---

# XACML 3.0

## Summary

**Purpose:** XML-based attribute-based access control policy language

**Adoption:** Legacy/Declining - limited enterprise adoption, modern alternatives preferred (OPA, Cedar)

**Plain-Language:** XACML was early attempt at standardized fine-grained authorization using XML policies. Achieved some adoption in government/finance but proved complex to implement. Forrester declared "XACML is dead" in 2013. Modern deployments gravitate toward OPA or Cedar.

## Technical Details

- **XML Syntax:** Complex policy structure
- **Architecture:** PDP (Policy Decision Point), PEP (Policy Enforcement Point)
- **Status:** Maintained in specific verticals, avoided for new implementations

**Why It Failed:** Excessive complexity, poor cloud fit, XML-heavy when JSON became standard

**Modern Alternative:** OPA (cloud-native), Cedar (formally verified)

**References:**
- OASIS XACML: https://www.oasis-open.org/committees/xacml/

**Last Updated:** 2025-10-19
