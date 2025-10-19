# IAM Standards Catalog

Welcome to the comprehensive catalog of Identity and Access Management (IAM) standards. This catalog provides vendor-agnostic documentation for open standards used across authentication, authorization, provisioning, and identity lifecycle management.

## Browse Standards

### Authentication & Authorization

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [OAuth 2.0](./oauth-2.0.md) | Universal | API Authorization, Delegated Access | 2012-10 |
| [OpenID Connect](./openid-connect.md) | Universal | Web Authentication, SSO, Social Login | 2014-02 |
| [PKCE](./pkce.md) | Universal | OAuth Code Protection (Mandatory) | 2015-09 |
| [SAML 2.0](./saml.md) | Widely Implemented | Enterprise SSO, Federation | 2005-03 |
| [FIDO2 / WebAuthn](./fido2-webauthn.md) | Widely Implemented | Passwordless, Passkeys | 2021-04 |

### OAuth Security Extensions

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [DPoP](./dpop.md) | Growing | Token Binding, Theft Prevention | 2023-09 |
| [PAR](./par.md) | Growing | Request Confidentiality (FAPI) | 2021-09 |
| [RAR](./rar.md) | Growing | Fine-Grained Authorization | 2023-05 |

### Provisioning & Lifecycle

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [SCIM 2.0](./scim.md) | Widely Implemented | Cloud Provisioning, Account Sync | 2015-09 |

### Directory & Network

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [X.509](./x509.md) | Universal | TLS Certificates, PKI | 1988 |
| [LDAP v3](./ldap.md) | Widely Implemented | Directory Services, Active Directory | 2006-06 |
| [Kerberos v5](./kerberos.md) | Widely Implemented | Windows Domain Auth, Enterprise SSO | 2005-07 |
| [RADIUS](./radius.md) | Widely Implemented | WiFi/VPN Auth, Network Access | 2000-06 |

### Authorization Policy

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [OPA](./opa.md) | Growing | Cloud-Native Policy, Kubernetes | 2016 |

### Decentralized Identity

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [DIDs](./dids.md) | Emerging | Decentralized IDs, Self-Sovereign Identity | 2022-07 |
| [Verifiable Credentials](./verifiable-credentials.md) | Growing | Digital Credentials, Mobile DL, EUDI Wallet | 2025-05 |

### Authorization Policy

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [OPA](./opa.md) | Growing | Cloud-Native Policy, Kubernetes | 2016-01 |
| [Cedar](./cedar.md) | Emerging | Formally Verified Authorization, AWS | 2023-05 |
| [OpenFGA](./openfga.md) | Growing | Relationship-Based Authorization | 2022-09 |
| [XACML 3.0](./xacml.md) | Legacy/Declining | XML-Based ABAC | 2013-01 |

### Security Profiles

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [FAPI 2.0](./fapi.md) | Widely Implemented | Financial API Security, Open Banking | 2025-02 |
| [JAR](./jar.md) | Growing | Signed Authorization Requests | 2021-08 |
| [JARM](./jarm.md) | Growing | Signed Authorization Responses | 2021 |

### Security Signals & Events

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [SSE Framework](./sse.md) | Emerging | Real-Time Security Event Sharing | 2023-11 |
| [CAEP](./caep.md) | Emerging | Continuous Access Evaluation, Zero Trust | 2023-11 |
| [RISC](./risc.md) | Emerging | Risk Incident Sharing | 2025-09 |

### Coming Soon

Additional standards will be documented in Story 1.6 or later:
- **Workload Identity:** SPIFFE/SPIRE
- **Emerging:** GNAP, OpenID4VCI/VP, SD-JWT, BBS Signatures

## Filter by Adoption Level

**Universal** (used everywhere)
- OAuth 2.0, OpenID Connect, PKCE

**Widely Implemented** (production use across many organizations)
- SAML 2.0, FIDO2/WebAuthn

*Additional adoption levels will be populated as more standards are added.*

## Filter by Category

**Authentication & Authorization** (5 standards)
- All currently documented standards fall in this category

*Additional categories will be added as catalog expands:*
- Provisioning & Lifecycle
- Directory Management
- Decentralized Identity
- Zero Trust & Security
- Legacy Standards

## Search

Use the search bar in the navigation header to find specific standards, concepts, or use cases. Search indexes all standard pages including:
- Standard names and acronyms
- Technical specifications (RFC numbers, etc.)
- Use cases and industries
- Implementation details
- Security best practices

**Try searching for:**
- "OAuth" - Find OAuth 2.0, related extensions (PKCE, DPoP, PAR)
- "passwordless" - Find FIDO2/WebAuthn, Passkeys information
- "enterprise SSO" - Find SAML, OIDC enterprise use cases
- "NIST" - Find compliance mapping to NIST 800-63
- "finance" or "healthcare" - Find industry-specific guidance

## How to Use This Catalog

**For Enterprise Architects:**
1. Browse by adoption level to understand maturity
2. Check industry usage sections for sector-specific requirements
3. Review compliance mapping tables
4. Use decision trees (coming in Story 2.5) for recommendations

**For Developers:**
1. Search for standards you need to implement
2. Review open-source implementations and setup complexity
3. Check security best practices and anti-patterns
4. Follow links to official specifications

**For Compliance Managers:**
1. Use plain-language summaries to understand each standard
2. Check compliance mapping tables for regulatory requirements
3. Review industry usage for sector-specific adoption

## Statistics

- **Total Standards Documented:** 25
- **Categories:** 8 (Authentication, OAuth Extensions, Provisioning, Directory/Network, Policy, Security Profiles, Signals/Events, Decentralized)
- **Adoption Levels Represented:** 5 (Universal, Widely Implemented, Growing, Emerging, Legacy/Declining)
- **Standards Bodies:** 6 (IETF, W3C, OpenID Foundation, OASIS, CNCF, ITU)

*This catalog is actively growing. Check back regularly for updates.*

---

**Last Updated:** 2025-10-19

For questions, corrections, or contributions, please visit our [GitHub repository](https://github.com/onboardid/iam-standards-guide).
