# Healthcare & Health Tech

IAM standards guidance for healthcare organizations, EHR systems, health tech companies, and HIPAA-compliant applications.

## Required Standards Stack (US)

### 21st Century Cures Act Mandate

| Standard | Requirement Level | Purpose |
|----------|-------------------|---------|
| [OAuth 2.0](../standards/oauth-2.0.md) | **Required** | API authorization foundation |
| [OpenID Connect](../standards/openid-connect.md) | **Required** | User authentication |
| SMART on FHIR | **Required** | EHR app integration (US mandate) |
| [PKCE](../standards/pkce.md) | **Mandatory** | Code protection |
| [SCIM 2.0](../standards/scim.md) | Recommended | User provisioning |
| [X.509](../standards/x509.md) | Required | TLS certificates |

## SMART on FHIR

**What It Is:** OIDC + OAuth 2.0 + FHIR-specific scopes for healthcare data

**Scopes:** `patient/*.read`, `user/*.write`, etc. (FHIR resources)

**US Requirement:** 21st Century Cures Act mandates SMART on FHIR for EHR systems

## Token Configuration

**Token Lifetimes (Healthcare):**
- Access tokens: **≤15 minutes** (HIPAA best practice)
- Audit logging: **Required** (all access to PHI)

## HIPAA Compliance

**Requirements:**
- Audit logging of all PHI access
- Access controls (RBAC at minimum)
- Encryption in transit (TLS) and at rest
- Token lifetime limits
- MFA for privileged access

## Implementation Checklist

- [ ] SMART on FHIR implemented (if EHR integration)
- [ ] OIDC + OAuth 2.0 + PKCE
- [ ] Token lifetime ≤15 minutes
- [ ] Comprehensive audit logging
- [ ] HIPAA Security Rule compliance
- [ ] Patient consent management

---

**Last Updated:** 2025-10-19
