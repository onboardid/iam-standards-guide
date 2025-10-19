---
standard: "OpenFGA"
specification: "OpenFGA"
published: "2022-09"
standards_body: "CNCF"
status: "CNCF Sandbox (donated September 2022)"
adoption_level: "Growing"
use_cases:
  - "Relationship-Based Authorization (ReBAC)"
  - "Fine-Grained Permissions"
  - "Collaborative Application Authorization"
industries:
  - "Enterprise"
  - "Cloud/SaaS"
related_standards:
  - "OPA"
  - "Cedar"
  - "OAuth 2.0"
---

# OpenFGA (Fine-Grained Authorization)

## Summary

**Purpose:** Relationship-based access control inspired by Google Zanzibar, enabling fine-grained permissions

**Adoption:** Growing - CNCF Sandbox project, Okta/Auth0 contribution

**Plain-Language:** OpenFGA handles permissions like "who has access to this document?" based on relationships. Inspired by Google's Zanzibar (handles trillions of objects, billions of users). Excels at hierarchical resources (folders, org charts) where permissions propagate through parent-child relationships.

## Technical Details

- **ReBAC Model:** Permissions based on relationships (object, relation, user)
- **Performance:** Millions of authorization checks per second
- **Use Cases:** Collaborative features, multi-tenant SaaS, hierarchical resources

**Comparison to RBAC:** More flexible than role-based, handles complex resource hierarchies

**References:**
- OpenFGA: https://openfga.dev/
- Google Zanzibar Paper: https://research.google/pubs/pub48190/

**Last Updated:** 2025-10-19
