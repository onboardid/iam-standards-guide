---
standard: "RADIUS"
specification: "RFC 2865"
published: "2000-06"
standards_body: "IETF"
status: "RFC 2865 (June 2000)"
adoption_level: "Widely Implemented"
use_cases:
  - "WiFi Authentication (802.1X)"
  - "VPN Access Control"
  - "Network Access Authentication"
industries:
  - "Telecommunications"
  - "Enterprise"
  - "Higher Education"
related_standards:
  - "Kerberos"
  - "LDAP"
  - "802.1X"
---

# RADIUS (Remote Authentication Dial-In User Service)

## Summary

**Purpose:** AAA protocol (Authentication, Authorization, Accounting) for network access control

**Adoption:** Widely Implemented - backbone for enterprise WiFi (WPA2/WPA3-Enterprise), VPN, ISP authentication

**Plain-Language:** RADIUS authenticates users connecting to WiFi networks, VPNs, and internet services. When you connect to corporate WiFi and enter credentials, RADIUS verifies your identity. FreeRADIUS powers authentication for hundreds of millions of users worldwide including global eduroam academic WiFi.

## Technical Details

- **Protocol:** Client-server, UDP-based (ports 1812/1813)
- **AAA:** Authentication (verify identity), Authorization (assign permissions/VLAN), Accounting (log usage for billing)
- **Use Cases:** 802.1X WiFi (WPA-Enterprise), VPN concentrators, ISP broadband auth

**Security:** Original UDP protocol had weaknesses, RADIUS/TLS (RFC 6614) and RADIUS/DTLS (RFC 7360) add encryption.

## Industry Usage

**Enterprise:** Universal for WiFi (802.1X/EAP-TLS, EAP-TTLS, PEAP)
**ISPs:** Authenticate DSL, cable, fiber customers
**Higher Education:** eduroam global roaming network
**VPN:** Multi-factor authentication and policy enforcement

**Status:** Indispensable for network access control, no viable replacement for WiFi/VPN scenarios

**References:**
- RFC 2865: https://datatracker.ietf.org/doc/html/rfc2865

**Last Updated:** 2025-10-19
