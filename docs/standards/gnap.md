---
standard: "GNAP"
specification: "RFC 9635, RFC 9767"
published: "2024-10"
standards_body: "IETF"
status: "RFC 9635 (Grant Negotiation, October 2024), RFC 9767 (Resource Servers, April 2025)"
adoption_level: "Experimental"
use_cases:
  - "Next-Generation Authorization"
  - "IoT Authorization"
  - "Rich Interaction Authorization"
industries:
  - "Cloud/SaaS"
  - "IoT"
related_standards:
  - "OAuth 2.0"
  - "OpenID Connect"
---

# GNAP (Grant Negotiation and Authorization Protocol)

## Summary

**Purpose:** Next-generation authorization protocol addressing OAuth 2.0 limitations for IoT, native apps, and complex authorization scenarios

**Adoption:** Experimental - RFC published October 2024, minimal production adoption

**Plain-Language:** GNAP is the potential successor to OAuth 2.0, designed for scenarios OAuth struggles with (IoT devices, rich user interaction, asynchronous authorization). While OAuth 2.0 works great for web/mobile, GNAP handles cases like: authorizing a smart TV without a keyboard, multi-party authorization, or long-running authorization that spans days.

## Technical Details

- **Published:** RFC 9635 (October 2024), RFC 9767 (April 2025)
- **Experimental Status:** Specifications finalized but adoption unclear
- **Key Differences from OAuth 2.0:**
  - Transaction-based (not redirect-based)
  - Asynchronous authorization support
  - Better for constrained devices (IoT)
  - Multi-party authorization
  - Continuation tokens for complex flows

**Reality Check:** OAuth 2.0 ecosystem is entrenched. GNAP adoption depends on whether it addresses sufficient pain points to justify ecosystem migration. Timeline for mainstream adoption (if it happens): 5-10+ years.

---

## References

- **RFC 9635:** https://datatracker.ietf.org/doc/html/rfc9635
- **RFC 9767:** https://datatracker.ietf.org/doc/html/rfc9767

---

**Last Updated:** 2025-10-19
