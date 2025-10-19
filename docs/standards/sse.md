---
standard: "SSE Framework"
specification: "OpenID Shared Signals and Events 1.0"
published: "2023-11"
standards_body: "OpenID Foundation"
status: "Implementer's Draft 02 (November 2023)"
adoption_level: "Emerging"
use_cases:
  - "Real-Time Security Event Sharing"
  - "Cross-Provider Coordination"
  - "Identity Risk Signals"
industries:
  - "Enterprise"
  - "Financial Services"
related_standards:
  - "CAEP"
  - "RISC"
  - "OAuth 2.0"
---

# SSE Framework (Shared Signals and Events)

## Summary

**Purpose:** Framework for real-time security event sharing between independent systems

**Adoption:** Emerging - OpenID Foundation spec, limited production (Microsoft Azure AD, pilots)

**Plain-Language:** SSE enables identity providers and applications to share security alerts in real-time. When one provider detects account compromise, SSE sends standardized alerts to partners so they can immediately terminate sessions. Critical for Zero Trust architectures requiring continuous security signal exchange.

**Profiles:** CAEP (continuous access evaluation), RISC (risk incident sharing)

**References:**
- SSE Framework: https://openid.net/specs/openid-sse-framework-1_0.html

**Last Updated:** 2025-10-19
