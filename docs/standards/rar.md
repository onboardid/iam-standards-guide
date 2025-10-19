---
standard: "RAR"
specification: "RFC 9396"
published: "2023-05"
standards_body: "IETF"
status: "RFC 9396 (May 2023)"
adoption_level: "Growing"
use_cases:
  - "Fine-Grained Authorization"
  - "Payment Authorization Details"
  - "Healthcare Data Sharing"
industries:
  - "Financial Services"
  - "Healthcare"
  - "Enterprise"
related_standards:
  - "OAuth 2.0"
  - "FAPI"
---

# RAR (Rich Authorization Requests)

## Summary

**Purpose:** Extends OAuth beyond simple scopes to support fine-grained authorization using structured JSON

**Adoption:** Growing - essential for payments, healthcare data sharing, complex permissions

**Plain-Language:** RAR allows authorization requests to specify detailed requirements (amount, recipient, data types, actions) that simple scope strings cannot express.

## Technical Details

Uses `authorization_details` parameter containing JSON arrays with structured authorization requirements.

**Example (Payment):**
```json
{
  "type": "payment_initiation",
  "amount": "100.00",
  "currency": "EUR",
  "creditor_account": "..."
}
```

**Industry Usage:** Financial services (Open Banking payments), healthcare (FHIR resource authorization), file sharing

**References:**
- RFC 9396: https://datatracker.ietf.org/doc/html/rfc9396

**Last Updated:** 2025-10-19
