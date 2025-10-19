---
standard: "OAuth 2.0"
specification: "RFC 6749"
published: "2012-10"
standards_body: "IETF"
status: "RFC 6749 (October 2012), RFC 6750 (Bearer Tokens)"
adoption_level: "Universal"
use_cases:
  - "API Authorization"
  - "Third-party Application Access"
  - "Delegated Authorization"
  - "Single Sign-On (with OIDC extension)"
industries:
  - "All"
related_standards:
  - "OpenID Connect"
  - "PKCE"
  - "OAuth 2.1"
  - "DPoP"
  - "PAR"
  - "RAR"
  - "JAR"
  - "FAPI"
supersedes:
  - "OAuth 1.0"
---

# OAuth 2.0

## Summary

**Quick Facts:**
- **Purpose:** Authorization framework enabling third-party applications to access user resources without sharing credentials
- **Adoption:** Universal - billions of daily authorization flows across consumer and enterprise applications
- **Use Cases:** API authorization, delegated access, third-party app permissions, SSO foundation
- **Industry Focus:** All industries - de facto standard for modern authorization

**Plain-Language Overview:**

OAuth 2.0 is the authorization standard that powers "Sign in with Google," "Connect to Facebook," and countless API integrations. When you grant a mobile app permission to access your photos, or allow a service to post tweets on your behalf, OAuth 2.0 handles that authorization securely without the app ever seeing your password.

The standard succeeded where OAuth 1.0 failed by providing a simpler, more flexible framework that works across web, mobile, and server-to-server scenarios. Published in October 2012 as RFC 6749, it has become the universal authorization standard with adoption by every major platform - Google, Microsoft, Facebook, GitHub, Amazon, and thousands more.

OAuth 2.0's extensibility enabled development of security enhancements (PKCE, DPoP, PAR) and industry-specific profiles (FAPI for financial services). The upcoming OAuth 2.1 consolidates these security best practices into a modernized specification, while maintaining backward compatibility with properly-implemented OAuth 2.0 deployments.

**For Developers:**

OAuth 2.0 defines four authorization grant types (flows) for different scenarios: Authorization Code (for web/mobile apps), Client Credentials (for service-to-service), Device Flow (for smart TVs/CLI tools), and deprecated flows (Implicit, Password Grant). Modern implementations use Authorization Code Flow with PKCE for all client types. The framework uses access tokens (for API calls) and optional refresh tokens (for obtaining new access tokens), with OpenID Connect adding ID tokens for authentication.

---

## Technical Details

### Specification

- **Specification:** RFC 6749 (Authorization Framework), RFC 6750 (Bearer Token Usage)
- **Published:** October 2012
- **Standards Body:** IETF OAuth Working Group
- **Current Status:** Final RFC, stable and widely deployed
- **Latest Version:** RFC 6749 (no versioning changes, security best practices evolve via companion RFCs)

### Key Concepts

**Authorization Grant Types:**

**Authorization Code Flow (Recommended for all clients):**
- Client redirects user to authorization server
- User authenticates and grants permission
- Authorization server returns authorization code
- Client exchanges code for access token (with PKCE for security)
- **PKCE MANDATORY** per OAuth 2.1 and security best practices (RFC 9700)

**Client Credentials Flow (Service-to-Service):**
- Machine-to-machine authentication
- Client authenticates with client secret or mTLS
- No user involvement
- Used for backend services, microservices

**Device Flow (Smart TVs, CLI tools):**
- For devices with limited input capabilities
- User completes authentication on secondary device
- Polling mechanism to obtain tokens

**Deprecated Flows (DO NOT USE):**
- **Implicit Flow:** Removed in OAuth 2.1, tokens in URLs insecure
- **Resource Owner Password Credentials:** Deprecated in OAuth 2.1, exposes passwords to client

**Tokens:**

**Access Tokens:**
- Grant access to protected resources
- Typically JWT or opaque tokens
- Short-lived (15-60 minutes recommended, 15 minutes for financial services)
- Sent in Authorization header: `Authorization: Bearer [token]`

**Refresh Tokens:**
- Obtain new access tokens without re-authentication
- Long-lived but should rotate on use
- Must be stored securely
- Optional (financial services often don't issue them)

**Security Extensions (CRITICAL):**

**PKCE (RFC 7636) - MANDATORY:**
- Proof Key for Code Exchange
- Protects authorization code from interception
- Required for all client types in OAuth 2.1
- Simple to implement, massive security benefit

**DPoP (RFC 9449) - Sender-Constrained Tokens:**
- Demonstrating Proof-of-Possession
- Binds tokens to client's private key
- Prevents token theft/replay attacks
- Required in some financial services deployments

**PAR (RFC 9126) - Request Confidentiality:**
- Pushed Authorization Requests
- Send authorization request parameters via back-channel
- Mandatory in FAPI 2.0
- Protects sensitive request data

**RAR (RFC 9396) - Fine-Grained Authorization:**
- Rich Authorization Requests
- Structured JSON for complex permissions
- Beyond simple scopes
- Essential for payments, healthcare data sharing

### Security Considerations

**What Makes It Secure:**
- No password sharing between user and third-party apps
- Time-limited tokens reduce exposure window
- Refresh token rotation prevents long-term compromise
- PKCE prevents code interception attacks
- Separate authorization and resource servers enable specialization

**Known Vulnerabilities & Mitigations:**
- **Authorization Code Interception:** Mitigated by PKCE (mandatory)
- **Token Theft:** Mitigated by DPoP or mTLS sender-constraining
- **Open Redirect:** Mitigated by exact redirect URI matching (mandatory in OAuth 2.1)
- **CSRF Attacks:** Mitigated by state parameter (mandatory)

**Security Extensions:**
- **PKCE (RFC 7636):** Code protection - MANDATORY
- **DPoP (RFC 9449):** Token binding - High security use cases
- **PAR (RFC 9126):** Request confidentiality - Financial services
- **mTLS (RFC 8705):** Certificate-based authentication - Enterprise

**Security Best Current Practice (RFC 9700):**
Published January 2025, documents mandatory security requirements forming basis of OAuth 2.1.

---

## Relationships

### Depends On

- **TLS/HTTPS:** All OAuth communications must use HTTPS (no exceptions)
- **HTTP:** Protocol is built on HTTP redirects and requests

### Complements

- **OpenID Connect:** Adds authentication layer on top of OAuth 2.0 authorization
- **SCIM 2.0:** Handles user provisioning while OAuth handles authorization

### Extensions

- **PKCE (RFC 7636):** Protects authorization code flow
- **DPoP (RFC 9449):** Provides sender-constrained tokens
- **PAR (RFC 9126):** Enables pushed authorization requests
- **RAR (RFC 9396):** Adds rich authorization request capabilities
- **JAR (RFC 9101):** JWT-secured authorization requests
- **JARM:** JWT-secured authorization response mode
- **FAPI:** Financial-grade API security profile
- **GNAP (RFC 9635):** Next-generation authorization protocol

### Supersedes

- **OAuth 1.0:** Replaced due to complexity and poor mobile/API support

### Technology Stack Example

**Typical Modern OAuth Security Stack:**
```
OAuth 2.0 (authorization framework)
  + OIDC (authentication)
  + PKCE (code protection) - MANDATORY
  + DPoP (token binding) - High security
  + PAR (request confidentiality) - Financial services
  = Complete authorization + authentication solution
```

---

## Industry Usage

### Financial Services

- **Adoption:** Universal - required for PSD2/Open Banking
- **Profile:** FAPI 2.0 (Financial-grade API)
- **Requirements:**
  - PKCE mandatory
  - PAR mandatory
  - DPoP or mTLS for sender-constrained tokens
  - Token lifetime ≤15 minutes
  - Certificate-based client authentication
- **Certification:** OpenID FAPI Certification available and often required

### Healthcare

- **Adoption:** Universal - foundation for SMART on FHIR
- **Profile:** SMART on FHIR, HEART
- **Requirements:**
  - OAuth 2.0 + OIDC
  - FHIR-specific scopes (patient/*.read, user/*.write)
  - Token lifetime ≤15 minutes for HIPAA compliance
- **Regulation:** 21st Century Cures Act mandates SMART on FHIR (which uses OAuth 2.0)

### Government

- **Adoption:** Widespread
- **Profile:** iGov (International Government)
- **Requirements:**
  - PKCE mandatory for public clients
  - Pairwise subject identifiers for privacy
  - Front-channel logout support
  - NIST 800-63 compliance

### Enterprise B2B

- **Adoption:** Universal for modern applications
- **Common Pattern:** OAuth 2.0 + OIDC for SSO, SAML for legacy integrations
- **Use Cases:** SaaS integrations, API access, workforce SSO

### Consumer B2C

- **Adoption:** Universal
- **Examples:** "Sign in with Google/Apple/Microsoft/Facebook/GitHub"
- **Best Practices:**
  - Authorization Code Flow + PKCE
  - Short access tokens (60 minutes)
  - Refresh token rotation
  - Social login integration

### Compliance Mapping

| Regulation/Framework | Requirement Level | Notes |
|----------------------|-------------------|-------|
| PSD2/Open Banking | Required | Must use FAPI profile |
| NIST 800-63 | Foundation | Supports AAL2 with proper implementation |
| HIPAA | Common | Used with SMART on FHIR for health data |
| GDPR | Compatible | Enables consent-based data access |
| SOC 2 | Expected | Modern authorization standard |

---

## Open Source Implementations

### Production-Ready Authorization Servers

| Project | Language/Platform | Setup Complexity | Production Readiness | Notes |
|---------|-------------------|------------------|----------------------|-------|
| **Keycloak** | Java | Medium | ⭐⭐⭐⭐⭐ | Full-featured, OIDC + OAuth, SAML support |
| **Ory Hydra** | Go | Medium | ⭐⭐⭐⭐⭐ | Cloud-native, focuses on OAuth/OIDC only |
| **Auth0** | SaaS/Open | Low (SaaS) | ⭐⭐⭐⭐⭐ | Managed service, also open-source components |
| **Authelia** | Go | Medium | ⭐⭐⭐⭐ | SSO and 2FA, self-hosted |
| **Authentik** | Python | Medium | ⭐⭐⭐⭐ | Modern, UI-focused identity platform |
| **Curity** | Commercial | High | ⭐⭐⭐⭐⭐ | Enterprise-grade, FAPI certified |

### Client Libraries

**JavaScript/TypeScript:**
- **oauth4webapi** - Modern, standards-compliant OAuth client
- **Passport.js OAuth strategies** - Express.js integration
- **NextAuth.js** - Next.js authentication

**Python:**
- **Authlib** - Comprehensive OAuth library
- **requests-oauthlib** - OAuth for requests library

**Java:**
- **Spring Security OAuth** - Spring framework integration
- **Nimbus OAuth 2.0 SDK** - Low-level client/server library

**Go:**
- **golang.org/x/oauth2** - Official Go OAuth library

### Testing & Development Tools

- **OAuth.net Playground:** https://www.oauth.com/playground/ - Interactive testing
- **OAuth Debugger:** https://oauthdebugger.com/ - Flow debugging
- **JWT.io:** https://jwt.io/ - Token inspection (for JWT access tokens)
- **Postman:** OAuth 2.0 authorization type built-in

---

## Migration Guides

Migration guides will be added in future stories:
- Migrating from OAuth 1.0 to OAuth 2.0 (to be created)
- Upgrading to OAuth 2.1 (Story 3.4)

---

## Best Practices

### Do's ✅

- **Always use PKCE** for authorization code flow (all client types)
- **Use short-lived access tokens** (≤60 min consumer, ≤15 min financial)
- **Rotate refresh tokens** on each use
- **Validate all JWT claims** if using JWT tokens (iss, aud, exp)
- **Use state parameter** for CSRF protection (mandatory)
- **Exact redirect URI matching** (no wildcards)
- **HTTPS everywhere** (no HTTP, no exceptions)
- **Secure token storage** (HttpOnly cookies or secure storage, never localStorage for SPAs)

### Don'ts ❌

- **Never use Implicit Flow** - Deprecated in OAuth 2.1, tokens in URLs insecure
- **Never use Password Grant** - Deprecated in OAuth 2.1, exposes credentials to client
- **Never put tokens in URLs** - Use Authorization header
- **Never skip signature validation** for JWT tokens
- **Never use 'none' algorithm** for JWT signing
- **Never accept unsigned tokens**
- **Never store tokens in localStorage** (SPAs) - XSS vulnerable, use BFF pattern
- **Never use long-lived access tokens** (>60 min) - Increases attack surface

### Security Checklist

- [ ] Using Authorization Code Flow (not Implicit or Password Grant)
- [ ] PKCE implemented for all flows
- [ ] State parameter used for CSRF protection
- [ ] Redirect URIs exactly match (no wildcards)
- [ ] Access tokens short-lived (≤60 min, ≤15 min for high security)
- [ ] Refresh tokens rotate on use
- [ ] All communications over HTTPS
- [ ] JWT signature validation implemented (if using JWT tokens)
- [ ] Proper token storage (HttpOnly cookies or secure storage)
- [ ] Error handling doesn't leak sensitive information

---

## References

### Official Specifications

- **Primary Spec:** [RFC 6749 - The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749)
- **Bearer Tokens:** [RFC 6750 - Bearer Token Usage](https://datatracker.ietf.org/doc/html/rfc6750)
- **Security BCP:** [RFC 9700 - OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) (January 2025)
- **PKCE:** [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)
- **Token Revocation:** [RFC 7009](https://datatracker.ietf.org/doc/html/rfc7009)
- **Token Introspection:** [RFC 7662](https://datatracker.ietf.org/doc/html/rfc7662)

### Standards Body Resources

- **IETF OAuth WG:** https://datatracker.ietf.org/wg/oauth/
- **OAuth.net Community Site:** https://oauth.net/
- **OAuth 2.0 Home:** https://oauth.net/2/

### Community Resources

- **OAuth Playground:** https://www.oauth.com/playground/
- **OAuth Debugger:** https://oauthdebugger.com/
- **Implementation Guide:** https://oauth.net/code/

### Historical Context

**Predecessor:** OAuth 1.0 (2007-2010)
- OAuth 1.0 used cryptographic signatures for every request (complex)
- Poor fit for mobile apps and modern APIs
- OAuth 2.0 simplified via bearer tokens + HTTPS, delegating crypto to TLS

**Why OAuth 2.0 Succeeded:**
- Simpler implementation vs OAuth 1.0
- Better mobile/native app support
- Extensible framework (profiles, extensions)
- Solved both consumer (social login) and enterprise (API access) needs
- Major vendor adoption (Google, Microsoft, Facebook) drove ecosystem growth

**Evolution to OAuth 2.1:**
Security lessons from 13 years of production deployment led to OAuth 2.1, consolidating best practices (PKCE mandatory, Implicit Flow removed, exact redirect matching).

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| RFC 6749 | 2012-10 | Initial OAuth 2.0 specification |
| RFC 6750 | 2012-10 | Bearer token usage |
| RFC 7636 | 2015-09 | PKCE extension |
| RFC 9700 | 2025-01 | Security Best Current Practice |
| OAuth 2.1 (Draft) | 2025 | Consolidation (expected finalization 2025-2026) |

---

**Last Updated:** 2025-10-19
**Contributors:** Matt (initial documentation)
