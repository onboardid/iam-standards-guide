---
standard: "CAEP"
specification: "OpenID CAEP 1.0"
published: "2023-11"
standards_body: "OpenID Foundation"
status: "Implementer's Draft 02 (November 2023)"
adoption_level: "Emerging"
use_cases:
  - "Continuous Access Evaluation"
  - "Real-Time Session Management"
  - "Zero Trust Architecture"
industries:
  - "Enterprise"
  - "Government"
related_standards:
  - "SSE Framework"
  - "OAuth 2.0"
  - "OpenID Connect"
---

# CAEP (Continuous Access Evaluation Protocol)

## Summary

**Purpose:** Real-time session evaluation - enables identity providers to notify apps when user state changes

**Adoption:** Emerging - Microsoft Azure AD implementation, cornerstone of Zero Trust

**Plain-Language:** Traditional authentication checks identity once at login. CAEP enables continuous evaluation - if user's password resets, role changes, or risk level elevates during active session, CAEP sends real-time alerts so apps can immediately revoke access. Originally proposed by Google 2019, now OpenID Foundation spec.

**Zero Trust:** Enables "never trust, always verify" by eliminating delay between identity changes and access enforcement

**References:**
- CAEP Spec: https://openid.net/specs/openid-caep-1_0.html

**Last Updated:** 2025-10-19
