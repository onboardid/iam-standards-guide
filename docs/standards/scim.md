---
standard: "SCIM 2.0"
specification: "RFC 7643, RFC 7644"
published: "2015-09"
standards_body: "IETF"
status: "RFC 7643/7644 (September 2015)"
adoption_level: "Widely Implemented"
use_cases:
  - "Cloud User Provisioning"
  - "SaaS Account Lifecycle Management"
  - "Automated Account Synchronization"
industries:
  - "All"
related_standards:
  - "OAuth 2.0"
  - "OpenID Connect"
  - "LDAP"
supersedes:
  - "SPML 2.0"
---

# SCIM 2.0

## Summary

**Quick Facts:**
- **Purpose:** REST/JSON-based standard for cloud and SaaS user provisioning and lifecycle management
- **Adoption:** Widely Implemented - every major IdP and thousands of SaaS applications
- **Use Cases:** Automated user provisioning/deprovisioning, identity synchronization, group management
- **Industry Focus:** All industries - de facto standard for cloud provisioning

**Plain-Language Overview:**

SCIM 2.0 (System for Cross-domain Identity Management) automates user account creation and management across cloud applications. When a new employee joins your company, SCIM automatically creates their accounts in email, Slack, Salesforce, and other SaaS apps. When they leave, SCIM immediately deactivates all access - reducing security risk and eliminating manual IT work.

The RESTful, JSON-based protocol replaced SPML's complex XML approach with pragmatic design focused on real-world cloud use cases. Every major IdP (Okta, Azure AD, Google Workspace, OneLogin, Ping Identity) and thousands of SaaS applications support SCIM provisioning. This widespread adoption makes SCIM the standard way to manage user lifecycles in cloud environments.

**For Developers:**

SCIM provides RESTful HTTP/HTTPS APIs for identity management with standardized schemas for Users and Groups. Core operations: CREATE (provision new user), READ (query user data), UPDATE (modify attributes), DELETE (deprovision). Supports bulk operations, filtering, sorting, and pagination for enterprise scale. Common use case: IdP pushes user changes to SaaS apps in real-time, maintaining synchronized identity data across systems.

---

## Technical Details

### Specification

- **Core Schema:** RFC 7643 (defines User, Group, Enterprise User schemas)
- **Protocol:** RFC 7644 (defines REST API, operations, error handling)
- **Published:** September 2015
- **Standards Body:** IETF
- **Status:** Stable - RFC 7643/7644 remain current, no SCIM 3.0 formally planned

### Key Features

**Standard Schemas:**
- **User:** Core attributes (userName, name, emails, phoneNumbers, etc.)
- **Group:** Group membership management
- **Enterprise User:** Extended attributes (employeeNumber, department, manager)

**Core Operations:**
- **POST /Users:** Create new user
- **GET /Users/\{id\}:** Retrieve user
- **PUT /Users/\{id\}:** Replace user (full update)
- **PATCH /Users/\{id\}:** Modify user (partial update)
- **DELETE /Users/\{id\}:** Deprovision user

**Advanced Features:**
- Bulk operations (batch create/update/delete)
- Filtering (query language for searches)
- Sorting and pagination
- Resource versioning (ETags)
- Schema discovery

---

## Industry Usage

**Universal adoption for cloud provisioning.** Essential for enterprises using multiple SaaS applications with automated identity lifecycle management.

**Compliance:** Reduces security risk by automating deprovisioning (faster account termination when employees leave).

---

## Open Source Implementations

**Servers:**
- Keycloak, Okta, Azure AD, Google Workspace (SCIM endpoints)

**Client Libraries:**
- **Python:** scim2-client
- **JavaScript:** scim2-client
- **Java:** UnboundID SCIM SDK

---

## References

- **RFC 7643:** https://datatracker.ietf.org/doc/html/rfc7643 (Core Schema)
- **RFC 7644:** https://datatracker.ietf.org/doc/html/rfc7644 (Protocol)

---

**Last Updated:** 2025-10-19
