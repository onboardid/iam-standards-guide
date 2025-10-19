---
standard: "LDAP v3"
specification: "RFC 4511"
published: "2006-06"
standards_body: "IETF"
status: "RFC 4511 (June 2006), LDAPv3"
adoption_level: "Widely Implemented"
use_cases:
  - "Directory Services"
  - "Identity Storage and Retrieval"
  - "Active Directory Protocol"
industries:
  - "Enterprise"
  - "Higher Education"
  - "Government"
related_standards:
  - "Kerberos"
  - "SAML 2.0"
  - "SCIM 2.0"
---

# LDAP (Lightweight Directory Access Protocol)

## Summary

**Purpose:** Protocol for querying and managing directory information (user accounts, groups, organizational data)

**Adoption:** Widely Implemented - foundation of Microsoft Active Directory, OpenLDAP powers enterprise identity

**Plain-Language:** LDAP is the "phone book" protocol for corporate networks. When you log into company systems, LDAP directories (like Active Directory) store your username, password, email, department, manager, group memberships. Over 100 million users rely on LDAP directories globally.

## Technical Details

- **Hierarchical Structure:** Tree-based organization (DN: Distinguished Names)
- **Operations:** Search, Add, Delete, Modify, Bind (authenticate)
- **Schema:** Defines object classes and attributes
- **TCP/IP Protocol:** Lightweight compared to X.500 predecessor

**Current Relevance:** Deep integration in existing infrastructure. Organizations rarely choose LDAP for new cloud apps, but removing it from existing infrastructure prohibitively expensive. This creates steady-state: high absolute adoption, declining percentage of new implementations.

## Industry Usage

**Enterprise:** Active Directory (Microsoft), OpenLDAP
**Higher Education:** Campus directories, eduroam authentication
**Coexists With:** SCIM handles cloud provisioning, LDAP remains on-prem identity source

**References:**
- RFC 4511: https://datatracker.ietf.org/doc/html/rfc4511

**Last Updated:** 2025-10-19
