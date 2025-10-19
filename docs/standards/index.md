# IAM Standards Catalog

Welcome to the comprehensive catalog of Identity and Access Management (IAM) standards. This catalog provides vendor-agnostic documentation for open standards used across authentication, authorization, provisioning, and identity lifecycle management.

## Browse Standards

### Authentication & Authorization

| Standard | Adoption Level | Key Use Cases | Published |
|----------|----------------|---------------|-----------|
| [OAuth 2.0](./oauth-2.0.md) | Universal | API Authorization, Delegated Access | 2012-10 |
| [OpenID Connect](./openid-connect.md) | Universal | Web Authentication, SSO, Social Login | 2014-02 |
| [PKCE](./pkce.md) | Universal | OAuth Code Protection, Mobile Security | 2015-09 |
| [SAML 2.0](./saml.md) | Widely Implemented | Enterprise SSO, Cross-Domain Federation | 2005-03 |
| [FIDO2 / WebAuthn](./fido2-webauthn.md) | Widely Implemented | Passwordless Auth, Biometric Login | 2021-04 |

### Coming Soon

Additional standards will be documented in upcoming releases:
- **Provisioning:** SCIM 2.0, SPML (deprecated)
- **Authorization Policy:** OPA, Cedar, OpenFGA, XACML
- **Security Extensions:** DPoP, PAR, RAR, JAR, JARM
- **Decentralized Identity:** DIDs, Verifiable Credentials, OpenID4VCI/VP
- **Zero Trust:** SPIFFE/SPIRE, CAEP, SSE Framework
- **Legacy:** Kerberos, LDAP, RADIUS, X.509

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

- **Total Standards Documented:** 5
- **Categories:** 1 (Authentication & Authorization)
- **Adoption Levels Represented:** 2 (Universal, Widely Implemented)
- **Standards Bodies:** 4 (IETF, W3C, OpenID Foundation, OASIS)

*This catalog is actively growing. Check back regularly for updates.*

---

**Last Updated:** 2025-10-19

For questions, corrections, or contributions, please visit our [GitHub repository](https://github.com/onboardid/iam-standards-guide).
