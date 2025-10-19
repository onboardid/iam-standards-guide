---
standard: "RISC"
specification: "OpenID RISC 1.0"
published: "2025-09"
standards_body: "OpenID Foundation"
status: "Final (September 2025)"
adoption_level: "Emerging"
use_cases:
  - "Risk Incident Sharing"
  - "Account Compromise Alerts"
  - "Cross-Provider Security Coordination"
industries:
  - "Financial Services"
  - "Enterprise"
  - "Consumer"
related_standards:
  - "SSE Framework"
  - "CAEP"
---

# RISC (Risk Incident Sharing and Coordination)

## Summary

**Purpose:** Standardized sharing of account security events (compromise, credential theft) across providers

**Adoption:** Emerging - prevents cascade account takeovers through coordinated response

**Plain-Language:** When one service detects your account was compromised, RISC alerts other services you use so they can lock down your accounts before attackers spread. Prevents "domino effect" where one breach leads to multiple account takeovers.

**Use Case:** Provider A detects breach → sends RISC alert → Provider B immediately terminates sessions → user protected across ecosystem

**References:**
- RISC Profile: https://openid.net/specs/openid-risc-profile-1_0.html

**Last Updated:** 2025-10-19
