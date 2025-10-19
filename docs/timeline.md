# Historical Timeline of IAM Standards

This timeline shows the evolution of Identity and Access Management standards from 1988 to 2025, illustrating how standards emerged in response to major technology shifts.

## Timeline by Era

### Foundation Era (1988-2000)

**Technology Context:** Early Internet, PKI infrastructure, enterprise networks

| Year | Standard | Adoption Level | Technology Driver |
|------|----------|----------------|-------------------|
| 1988 | [X.509](./standards/x509.md) | Universal | Public Key Infrastructure |
| 2000 | [RADIUS](./standards/radius.md) | Widely Implemented | Network access control, ISPs |

### Enterprise & XML Era (2000-2010)

**Technology Context:** Enterprise IT, XML standards, SOA, early web services

| Year | Standard | Adoption Level | Technology Driver |
|------|----------|----------------|-------------------|
| 2005 | [SAML 2.0](./standards/saml.md) | Widely Implemented | Enterprise SSO, B2B federation |
| 2005 | [Kerberos v5](./standards/kerberos.md) | Widely Implemented | Windows domains, enterprise networks |
| 2006 | [LDAP v3](./standards/ldap.md) | Widely Implemented | Directory services, Active Directory |

### Modern Web Era (2010-2015)

**Technology Context:** Cloud computing, mobile apps, REST APIs, SaaS explosion

| Year | Standard | Adoption Level | Technology Driver |
|------|----------|----------------|-------------------|
| 2012 | [OAuth 2.0](./standards/oauth-2.0.md) | Universal | API authorization, cloud services |
| 2013 | [XACML 3.0](./standards/xacml.md) | Legacy/Declining | Enterprise ABAC (limited adoption) |
| 2014 | [OpenID Connect](./standards/openid-connect.md) | Universal | Authentication layer, social login |
| 2015 | [PKCE](./standards/pkce.md) | Universal | Mobile app security (now mandatory) |
| 2015 | [SCIM 2.0](./standards/scim.md) | Widely Implemented | Cloud provisioning automation |

### Cloud-Native & Passwordless Era (2016-2020)

**Technology Context:** Kubernetes, microservices, passwordless movement, cloud-native architectures

| Year | Standard | Adoption Level | Technology Driver |
|------|----------|----------------|-------------------|
| 2016 | [OPA](./standards/opa.md) | Growing | Cloud-native policy, Kubernetes |
| 2021 | [FIDO2 / WebAuthn](./standards/fido2-webauthn.md) | Widely Implemented | Passwordless authentication, passkeys |
| 2021 | [PAR](./standards/par.md) | Growing | Request confidentiality, financial security |
| 2021 | [JAR](./standards/jar.md) | Growing | Request integrity, FAPI |
| 2021 | [JARM](./standards/jarm.md) | Growing | Response integrity, FAPI |

### Decentralized & Zero Trust Era (2022-2025)

**Technology Context:** Zero Trust architecture, decentralized identity, government digital wallets, continuous security

| Year | Standard | Adoption Level | Technology Driver |
|------|----------|----------------|-------------------|
| 2022 | [DIDs](./standards/dids.md) | Emerging | Decentralized identity, self-sovereign identity |
| 2022 | [OpenFGA](./standards/openfga.md) | Growing | Fine-grained authorization, Zanzibar model |
| 2023 | [DPoP](./standards/dpop.md) | Growing | Token theft prevention |
| 2023 | [Cedar](./standards/cedar.md) | Emerging | Formally verified authorization |
| 2023 | [RAR](./standards/rar.md) | Growing | Fine-grained permissions |
| 2023 | [SSE Framework](./standards/sse.md) | Emerging | Real-time security events |
| 2023 | [CAEP](./standards/caep.md) | Emerging | Continuous access evaluation, Zero Trust |
| 2025 | [FAPI 2.0](./standards/fapi.md) | Widely Implemented | Simplified financial security (vs FAPI 1.0) |
| 2025 | [Verifiable Credentials 2.0](./standards/verifiable-credentials.md) | Growing | Digital credentials, EU eIDAS 2.0 |
| 2025 | [RISC](./standards/risc.md) | Emerging | Risk incident sharing |

## Technology Shifts That Drove Standards

### 1988-2000: Internet Foundation
**Shift:** Commercial Internet emergence, web browsers, e-commerce
**Standards Response:** X.509 (trust infrastructure), RADIUS (network access)

### 2000-2010: Enterprise Web Services
**Shift:** SOA, XML everywhere, enterprise application integration
**Standards Response:** SAML (B2B SSO), Kerberos/LDAP formalization

### 2010-2015: Cloud & Mobile Revolution
**Shift:** AWS/cloud computing (2006+), smartphones (2007+), SaaS explosion, REST APIs
**Standards Response:** OAuth 2.0 (API auth), OIDC (mobile-friendly auth), SCIM (cloud provisioning), PKCE (mobile security)

### 2016-2020: Cloud-Native & Passwordless
**Shift:** Kubernetes/containers, microservices, passwordless movement, developer experience focus
**Standards Response:** OPA (cloud-native policy), FIDO2/WebAuthn (passwordless), OAuth extensions (PAR, JAR, JARM for security)

### 2022-2025: Decentralized & Zero Trust
**Shift:** Zero Trust architecture mandates, decentralized identity (blockchain/Web3), EU digital wallet regulations, continuous security
**Standards Response:** DIDs/VCs (decentralized credentials), CAEP/SSE/RISC (continuous evaluation), Fine-grained authorization (OpenFGA, Cedar), DPoP (token security)

## Adoption Timeline

**Universal Adoption (4 standards):**
- OAuth 2.0 (2012) - 13 years to universal
- OIDC (2014) - 11 years to universal
- PKCE (2015) - 10 years to universal (mandatory in OAuth 2.1)
- X.509 (1988) - 37 years, still universal

**Widely Implemented (7 standards):**
- SAML 2.0 (2005) - 20 years
- SCIM 2.0 (2015) - 10 years
- FIDO2/WebAuthn (2021) - 4 years (rapid adoption via passkeys)
- FAPI 2.0 (2025) - Immediate (via mandate/regulation)
- Kerberos, LDAP, RADIUS - Legacy persistence

**Growing (9 standards):**
- Most from 2021-2023: DPoP, PAR, RAR, OPA, OpenFGA, Cedar, VCs

**Emerging (5 standards):**
- Recent 2022-2025: DIDs, SSE, CAEP, RISC

**Key Insight:** Universal adoption takes 10+ years, but regulatory mandates (PSD2, eIDAS 2.0, NIST) can accelerate adoption dramatically.

## Filter by Technology Era

Use the dropdown to filter standards by when they were introduced:

- **Foundation (1988-2000):** 2 standards
- **Enterprise Era (2000-2010):** 3 standards
- **Cloud/Mobile (2010-2015):** 5 standards
- **Cloud-Native (2016-2020):** 5 standards
- **Modern (2022-2025):** 10 standards

---

**See Also:**
- [Standards Catalog](./standards/) - Browse all standards
- Standards Relationships - How standards interconnect (Story 1.9 - coming soon)

---

**Last Updated:** 2025-10-19
