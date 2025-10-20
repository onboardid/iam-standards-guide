# Financial Services & Banking

Industry-specific IAM standards guidance for financial services, fintech, payments, and Open Banking implementations.

## Required Standards Stack

### Mandatory for PSD2/Open Banking

| Standard | Requirement Level | Purpose |
|----------|-------------------|---------|
| [OAuth 2.0](../standards/oauth-2.0.md) | **Required** | Authorization framework foundation |
| [OpenID Connect](../standards/openid-connect.md) | **Required** | User authentication |
| [FAPI 2.0](../standards/fapi.md) | **Required** | Financial-grade security profile |
| [PKCE](../standards/pkce.md) | **Mandatory** | Authorization code protection (all clients) |
| [PAR](../standards/par.md) | **Mandatory** | Pushed authorization requests (FAPI 2.0) |
| [DPoP](../standards/dpop.md) or mTLS | **Required** | Sender-constrained tokens (choose one) |
| [RAR](../standards/rar.md) | **Recommended** | Payment transaction details |

### Additional Security Standards

| Standard | Requirement Level | Purpose |
|----------|-------------------|---------|
| [JAR](../standards/jar.md) | FAPI 1.0 | Request signing (if using FAPI 1.0 Advanced) |
| [JARM](../standards/jarm.md) | Optional | Response signing, non-repudiation |
| [X.509](../standards/x509.md) | Required | TLS certificates, client authentication |

## Regulatory Compliance

### PSD2 (EU Payment Services Directive 2)

**Requirements:**
- FAPI 1.0 Advanced or FAPI 2.0 compliance **mandatory**
- Strong Customer Authentication (SCA)
- Qualified certificates (eIDAS)
- Dynamic client registration

**Timeline:** Implemented 2019+, ongoing enforcement

### Open Banking (UK, Brazil, Australia CDR)

**Requirements:**
- FAPI certification often required
- Specific profiles per jurisdiction
- Registered with regulatory authority

**Standards Stack:**
- OAuth 2.0 + OIDC + FAPI + PKCE + PAR + (DPoP or mTLS)

##Token Configuration

**Token Lifetimes (Financial Services):**
- Access tokens: **≤15 minutes** (maximum)
- Refresh tokens: Very short or not issued (re-authentication preferred)
- Authorization codes: ≤5 minutes

**Security Requirements:**
- Certificate-based client authentication (mTLS or private_key_jwt)
- Sender-constrained tokens (DPoP or mTLS binding)
- Non-repudiation for high-value transactions (JARM)

## Implementation Checklist

- [ ] FAPI 2.0 Security Profile implemented
- [ ] PKCE mandatory for all flows
- [ ] PAR implemented (pushed authorization requests)
- [ ] Sender-constrained tokens (DPoP or mTLS)
- [ ] Token lifetime ≤15 minutes
- [ ] Certificate-based client authentication
- [ ] OpenID Certification obtained (recommended)
- [ ] Regulatory registration complete

## Common Pitfalls

❌ **Using bearer tokens** - Must use sender-constrained (DPoP or mTLS)
❌ **Token lifetime >15 minutes** - Violates FAPI requirements
❌ **Skipping PAR** - Mandatory in FAPI 2.0
❌ **Self-certification** - Consider OpenID FAPI Certification for credibility

## Resources

- **FAPI Specification:** https://openid.net/wg/fapi/
- **OpenID Certification:** https://openid.net/certification/
- **Open Banking UK:** https://www.openbanking.org.uk/

---

**Last Updated:** 2025-10-19
