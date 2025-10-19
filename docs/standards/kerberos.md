---
standard: "Kerberos v5"
specification: "RFC 4120"
published: "2005-07"
standards_body: "IETF"
status: "RFC 4120 (July 2005), MIT Kerberos 1.21.3 (March 2025)"
adoption_level: "Widely Implemented"
use_cases:
  - "Windows Domain Authentication"
  - "Enterprise Network SSO"
  - "On-Premises Authentication"
industries:
  - "Enterprise"
  - "Higher Education"
  - "Government"
related_standards:
  - "LDAP"
  - "Active Directory"
  - "SAML 2.0"
---

# Kerberos v5

## Summary

**Purpose:** Network authentication protocol using secret-key cryptography and ticket-granting for single sign-on

**Adoption:** Widely Implemented - default authentication for Microsoft Windows domains, educational institutions

**Plain-Language:** Kerberos enables single sign-on within one network domain. Log into Windows once, access all internal resources without re-entering credentials. MIT protocol from 1980s still powering hundreds of millions of authentications daily.

## Technical Details

- **Ticket-Based:** Uses cryptographic tickets instead of passwords over network
- **Key Distribution Center (KDC):** Central authority issuing tickets
- **Mutual Authentication:** Both client and server verify each other
- **Time-Sensitive:** Requires synchronized clocks (within 5 minutes)

**Limitations:** Designed for controlled environments, doesn't fit distributed internet services or mobile apps well. Cloud providers universally chose OAuth/OIDC instead.

## Industry Usage

**Enterprise:** Universal in Microsoft environments (Active Directory default authentication)
**Higher Education:** Campus-wide SSO via eduroam
**Telecommunications:** ISPs with 15M+ subscriber bases

**Status:** High and stable in enterprise on-premises, rare for new cloud-native deployments

**References:**
- RFC 4120: https://datatracker.ietf.org/doc/html/rfc4120

**Last Updated:** 2025-10-19
