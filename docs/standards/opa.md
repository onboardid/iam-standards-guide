---
standard: "OPA"
specification: "Open Policy Agent (CNCF Project)"
published: "2016-01"
standards_body: "CNCF"
status: "CNCF Graduated (February 2021)"
adoption_level: "Growing"
use_cases:
  - "Cloud-Native Policy Enforcement"
  - "Kubernetes Admission Control"
  - "Microservices Authorization"
industries:
  - "Enterprise"
  - "Cloud/SaaS"
related_standards:
  - "XACML"
  - "OAuth 2.0"
  - "SPIFFE"
---

# OPA (Open Policy Agent)

## Summary

**Purpose:** General-purpose policy engine for authorization and compliance using declarative Rego language

**Adoption:** Rapidly Growing - 1M+ weekly downloads, production at Goldman Sachs, Netflix, Pinterest, T-Mobile

**Plain-Language:** OPA is the "decision engine" for who can access what in cloud systems. Instead of hardcoding authorization rules in application code, OPA evaluates policies written in Rego language. Used for everything from Kubernetes pod security to API authorization to SSH access control.

## Technical Details

- **Rego Language:** Declarative policy language for querying JSON/YAML
- **Use Cases:** Kubernetes admission (56%), API authorization (47%), infrastructure policy
- **Performance:** Millisecond response times, millions of decisions per second
- **CNCF Graduated:** Highest maturity level (February 2021)

**Why Popular:** Single policy engine handles all authorization across organization's infrastructure. Policies versioned, tested, audited like code.

## Industry Usage

**Cloud-Native:** De facto standard for Kubernetes policy
**Enterprise:** API gateways, service mesh authorization
**Comparison to XACML:** Modern alternative, better fit for cloud architectures

**References:**
- OPA Website: https://www.openpolicyagent.org/
- Playground: https://play.openpolicyagent.org/

**Last Updated:** 2025-10-19
