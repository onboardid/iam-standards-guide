# Open Source Projects Implementation Matrix

**Answering the question:** *"Specific open-source projects that implement these standard-supported processes"*

Comprehensive mapping of production-ready open-source projects to the IAM standards they implement.

## By Standard (Which Projects Implement What)

### OAuth 2.0 & OpenID Connect

| Project | Standards Implemented | Language | Complexity | Production Ready | Notes |
|---------|----------------------|----------|------------|------------------|-------|
| **Keycloak** | OAuth 2.0, OIDC, SAML, SCIM | Java | Medium | ⭐⭐⭐⭐⭐ | Full-featured IdP, widely deployed |
| **Ory Hydra** | OAuth 2.0, OIDC | Go | Medium | ⭐⭐⭐⭐⭐ | Cloud-native, OAuth/OIDC focused |
| **Authelia** | OIDC, OAuth 2.0 | Go | Medium | ⭐⭐⭐⭐ | Self-hosted SSO + 2FA |
| **Authentik** | OIDC, OAuth 2.0, SAML | Python | Medium | ⭐⭐⭐⭐ | Modern UI, flexible |
| **Auth0** | OAuth 2.0, OIDC, SAML | SaaS | Low | ⭐⭐⭐⭐⭐ | Managed service (also open components) |

### SAML 2.0

| Project | Standards | Language | Complexity | Production Ready | Notes |
|---------|-----------|----------|------------|------------------|-------|
| **Shibboleth IdP** | SAML, OIDC | Java | High | ⭐⭐⭐⭐⭐ | Educational standard |
| **SimpleSAMLphp** | SAML | PHP | Medium | ⭐⭐⭐⭐ | Widely deployed |
| **Keycloak** | SAML, OIDC, OAuth | Java | Medium | ⭐⭐⭐⭐⭐ | Multi-protocol support |

### FIDO2/WebAuthn

| Project | Standards | Language | Complexity | Production Ready | Notes |
|---------|-----------|----------|------------|------------------|-------|
| **@simplewebauthn/server** | WebAuthn | TypeScript | Low | ⭐⭐⭐⭐⭐ | Comprehensive server library |
| **webauthn4j** | WebAuthn | Java | Medium | ⭐⭐⭐⭐⭐ | Production-ready |
| **py_webauthn** | WebAuthn | Python | Low | ⭐⭐⭐⭐ | Python relying party |
| **go-webauthn** | WebAuthn | Go | Low-Medium | ⭐⭐⭐⭐ | Go relying party library |

### Provisioning (SCIM)

| Project | Standards | Language | Complexity | Production Ready | Notes |
|---------|-----------|----------|------------|------------------|-------|
| **Keycloak** | SCIM 2.0 | Java | Medium | ⭐⭐⭐⭐⭐ | SCIM endpoints built-in |
| **scim2-client** | SCIM 2.0 | Python/JS | Low | ⭐⭐⭐⭐ | Client libraries |

### Authorization Policy

| Project | Standards | Language | Complexity | Production Ready | Notes |
|---------|-----------|----------|------------|------------------|-------|
| **Open Policy Agent (OPA)** | OPA/Rego | Go | Medium | ⭐⭐⭐⭐⭐ | CNCF Graduated, 1M+ weekly downloads |
| **Cedar** | Cedar | Rust | Medium | ⭐⭐⭐⭐ | AWS Verified Permissions |
| **OpenFGA** | OpenFGA | Go | Medium | ⭐⭐⭐⭐ | CNCF Sandbox, Zanzibar-inspired |

### Workload Identity

| Project | Standards | Language | Complexity | Production Ready | Notes |
|---------|-----------|----------|------------|------------------|-------|
| **SPIRE** | SPIFFE | Go | Medium-High | ⭐⭐⭐⭐⭐ | CNCF Graduated, reference implementation |

---

## By Project (What Standards Does It Implement)

### Keycloak (Most Comprehensive)

**Standards Implemented:**
- [OAuth 2.0](./standards/oauth-2.0.md) ✅
- [OpenID Connect](./standards/openid-connect.md) ✅
- [SAML 2.0](./standards/saml.md) ✅
- [SCIM 2.0](./standards/scim.md) ✅

**Language:** Java
**Complexity:** Medium (40-80 hours setup for production)
**Use Cases:** Full-featured identity provider, enterprise SSO, multi-protocol support
**GitHub:** https://github.com/keycloak/keycloak
**Website:** https://www.keycloak.org/

**Best For:** Organizations needing OIDC + SAML + provisioning in single platform

### Ory (Cloud-Native Suite)

**Standards Implemented:**
- [OAuth 2.0](./standards/oauth-2.0.md) ✅ (Ory Hydra)
- [OpenID Connect](./standards/openid-connect.md) ✅ (Ory Hydra)

**Language:** Go
**Complexity:** Medium
**Use Cases:** Cloud-native, Kubernetes-friendly, OAuth/OIDC focused
**GitHub:** https://github.com/ory
**Website:** https://www.ory.sh/

**Best For:** Cloud-native deployments, OAuth/OIDC only needs

### Shibboleth (Education Standard)

**Standards Implemented:**
- [SAML 2.0](./standards/saml.md) ✅
- [OpenID Connect](./standards/openid-connect.md) ✅ (newer versions)

**Language:** Java
**Complexity:** High (enterprise deployment)
**Use Cases:** Educational federations (InCommon, eduGAIN), enterprise SAML
**Website:** https://www.shibboleth.net/

**Best For:** Higher education, research institutions, SAML federation

### Open Policy Agent (OPA)

**Standards:** [OPA/Rego](./standards/opa.md)

**Language:** Go
**Complexity:** Low-Medium (simple to start, complex for advanced)
**Use Cases:** Kubernetes admission control, API authorization, infrastructure policy
**GitHub:** https://github.com/open-policy-agent/opa
**CNCF:** Graduated (highest maturity)

**Best For:** Cloud-native policy, Kubernetes, microservices authorization

### SPIRE

**Standards:** [SPIFFE](./standards/spiffe-spire.md)

**Language:** Go
**Complexity:** Medium-High
**Use Cases:** Workload identity, service mesh, Zero Trust
**GitHub:** https://github.com/spiffe/spire
**CNCF:** Graduated

**Best For:** Cloud-native service-to-service authentication, Kubernetes workload identity

---

## By Language/Platform

### JavaScript/TypeScript

**OAuth/OIDC Clients:**
- **openid-client** - Certified OIDC client
- **passport-openidconnect** - Passport.js strategy
- **NextAuth.js** - Next.js authentication

**WebAuthn:**
- **@simplewebauthn/server** - Server library
- **@simplewebauthn/browser** - Client library

### Python

**OAuth/OIDC:**
- **authlib** - Comprehensive OAuth/OIDC
- **python-jose** - JWT handling

**SAML:**
- **python3-saml** - OneLogin SAML toolkit
- **pysaml2** - Comprehensive SAML

**WebAuthn:**
- **py_webauthn** - Relying party library

### Java

**Full Identity Platforms:**
- **Keycloak** - OAuth, OIDC, SAML, SCIM
- **Shibboleth** - SAML, OIDC

**Libraries:**
- **Spring Security OAuth** - Spring framework
- **Nimbus OAuth SDK** - Low-level client/server
- **webauthn4j** - WebAuthn server

### Go

**OAuth/OIDC:**
- **Ory Hydra** - OAuth/OIDC server
- **go-oidc** - OIDC client

**Policy:**
- **Open Policy Agent** - Policy engine

**Workload Identity:**
- **SPIRE** - SPIFFE implementation

**WebAuthn:**
- **go-webauthn** - Relying party library

---

## By Use Case

### "I need a complete identity platform"

→ **Keycloak** (OAuth, OIDC, SAML, SCIM, everything)
→ **Auth0** (SaaS, enterprise-grade, managed)

### "I need OAuth/OIDC only (cloud-native)"

→ **Ory Hydra** (Go, cloud-native)
→ **Authelia** (Go, self-hosted)

### "I need SAML federation (education/enterprise)"

→ **Shibboleth** (education standard)
→ **SimpleSAMLphp** (flexible, PHP)

### "I need policy enforcement (Kubernetes)"

→ **Open Policy Agent** (CNCF, most popular)

### "I need workload identity (microservices)"

→ **SPIRE** (CNCF, SPIFFE implementation)

### "I need passwordless authentication"

→ **@simplewebauthn** (TypeScript, comprehensive)
→ **Platform libraries** (iOS/Android/Windows native)

---

## Setup Complexity Guide

**Low Complexity (2-4 hours):**
- Client libraries (openid-client, py_webauthn)
- Testing tools (JWT.io, OAuth Playground)
- Simple deployments (Docker Compose)

**Medium Complexity (8-40 hours):**
- Full identity platforms (Keycloak, Ory, Authelia)
- Requires: Database, configuration, certificates
- Production setup with HA

**High Complexity (40+ hours):**
- Enterprise deployments (Shibboleth, multi-datacenter Keycloak)
- Federation setup, metadata management
- Integration with existing infrastructure

---

## Testing & Development Tools

### OAuth/OIDC
- **OAuth Playground:** https://www.oauth.com/playground/
- **OIDC Debugger:** https://oidcdebugger.com/
- **JWT.io:** https://jwt.io/

### SAML
- **SAML-tracer:** Browser extension for debugging
- **SAMLTool.com:** Online encoder/decoder

### WebAuthn/FIDO2
- **WebAuthn.io:** https://webauthn.io/
- **webauthn.me:** https://webauthn.me/

### Policy (OPA)
- **OPA Playground:** https://play.openpolicyagent.org/

---

## Maintenance & Community Health

**Active Development (Regular releases):**
- Keycloak, Ory, OPA, SPIRE, @simplewebauthn

**Stable/Mature (Less frequent updates):**
- Shibboleth, SimpleSAMLphp

**Check Before Using:**
- GitHub stars (>1K = healthy community)
- Recent commits (within 3 months = actively maintained)
- Issue response time (community health indicator)
- Documentation quality (reduces learning curve)

---

**See Also:**
- [Standards Catalog](./standards/) - Individual standard details
- [IAM Architecture](./architecture.md) - Functional architecture mapping
- [Industry Guides](./industries/financial-services.md) - Sector-specific recommendations

---

**Last Updated:** 2025-10-19
