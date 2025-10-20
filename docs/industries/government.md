# Government & Public Sector

IAM standards guidance for government agencies, public services, and citizen identity systems.

## Recommended Standards Stack

### iGov Profile (International Government)

| Standard | Requirement Level | Purpose |
|----------|-------------------|---------|
| [OpenID Connect](../standards/openid-connect.md) | **Required** | Authentication foundation |
| [OAuth 2.0](../standards/oauth-2.0.md) | **Required** | Authorization |
| [PKCE](../standards/pkce.md) | **Mandatory** | Public clients |
| Pairwise Subject IDs | **Required** | Privacy protection |
| Front-Channel Logout | **Required** | Session management |

### Digital Identity Programs

| Standard | Adoption | Purpose |
|----------|----------|---------|
| [DIDs](../standards/dids.md) | Growing | National digital ID programs |
| [Verifiable Credentials](../standards/verifiable-credentials.md) | Growing | EU eIDAS 2.0 EUDI Wallet |
| [OpenID4VCI/VP](../standards/openid4vc.md) | Widely Implemented | VC issuance/presentation (30+ jurisdictions) |

## Compliance Frameworks

### NIST 800-63 (US)

**Authenticator Assurance Levels:**
- **AAL1:** Single-factor
- **AAL2:** MFA (any method)
- **AAL3:** Hardware-based crypto ([FIDO2](../standards/fido2-webauthn.md) recommended)

**Identity Assurance Levels:**
- **IAL1:** Self-asserted
- **IAL2:** Remote identity proofing
- **IAL3:** In-person identity proofing

### FedRAMP (US Government Cloud)

**Requirements:**
- MFA mandatory
- SAML 2.0 or OpenID Connect
- PIV/CAC support (federal users)
- FIPS 140-2 cryptography
- Continuous monitoring

### eIDAS 2.0 (EU)

**Requirements (2025-2027 rollout):**
- DIDs (decentralized identifiers)
- Verifiable Credentials 2.0
- OpenID4VCI/VP (credential issuance/presentation)
- High/Substantial assurance levels
- EUDI Wallet rollout to all member states

## Implementation Checklist

- [ ] OIDC + iGov profile compliance
- [ ] Pairwise subject identifiers (privacy)
- [ ] NIST 800-63 assurance levels met
- [ ] FedRAMP requirements (if cloud)
- [ ] PIV/CAC support (if US federal)

## Examples

- **Login.gov (US):** iGov conformant
- **GOV.UK Verify (UK):** OIDC-based
- **eIDAS nodes (EU):** Cross-border authentication

---

**Last Updated:** 2025-10-19
