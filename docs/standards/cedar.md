---
standard: "Cedar"
specification: "Cedar Language Specification"
published: "2023-05"
standards_body: "Other"
status: "Open Source (Apache 2.0), AWS Verified Permissions"
adoption_level: "Emerging"
use_cases:
  - "Formally Verified Authorization"
  - "AWS Authorization"
  - "Policy-as-Code"
industries:
  - "Enterprise"
  - "Cloud/SaaS"
related_standards:
  - "OPA"
  - "XACML"
  - "OAuth 2.0"
---

# Cedar

## Summary

**Purpose:** Amazon's formally verified authorization policy language with mathematical correctness proofs

**Adoption:** Emerging - AWS Verified Permissions, growing among AWS customers

**Plain-Language:** Cedar is an authorization policy language where every policy is mathematically proven correct. Unlike other policy engines, Cedar uses formal verification (Dafny proofs, 100M+ nightly tests) to guarantee no security bugs. Used by AWS for Verified Permissions service.

## Technical Details

- **Formal Verification:** Policies proven mathematically correct
- **Performance:** 28-80x faster than competitors in benchmarks
- **Human-Readable:** Syntax resembles natural language
- **Use Cases:** Application authorization, resource access control

**Why Choose Cedar:** Organizations prioritizing provable security over maximum flexibility.

**References:**
- Cedar Website: https://www.cedarpolicy.com/
- AWS Verified Permissions: https://aws.amazon.com/verified-permissions/

**Last Updated:** 2025-10-19
