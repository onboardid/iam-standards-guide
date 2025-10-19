---
standard: "OpenID Connect"
specification: "OpenID Connect Core 1.0"
published: "2014-02"
standards_body: "OpenID Foundation"
status: "Final (February 2014), ISO/IEC 26131:2024"
adoption_level: "Universal"
use_cases:
  - "Web Authentication"
  - "Single Sign-On (SSO)"
  - "Federated Identity"
  - "Social Login"
industries:
  - "All"
related_standards:
  - "OAuth 2.0"
  - "PKCE"
  - "SAML 2.0"
  - "FAPI"
  - "SMART on FHIR"
  - "iGov"
supersedes:
  - "OpenID 2.0"
profiles:
  - "FAPI"
  - "iGov"
  - "HEART"
  - "SMART on FHIR"
  - "eKYC/IDA"
---

# OpenID Connect

## Summary

**Quick Facts:**
- **Purpose:** Authentication layer built on OAuth 2.0, enabling applications to verify user identity
- **Adoption:** Universal - powers "Sign in with Google/Apple/Microsoft/Facebook" and billions of daily authentications
- **Use Cases:** Web/mobile authentication, single sign-on, federated identity, social login
- **Industry Focus:** All industries - the definitive authentication standard for modern applications

**Plain-Language Overview:**

OpenID Connect (OIDC) is the authentication protocol that powers modern "social login" buttons. When you click "Sign in with Google" or "Continue with Apple" on a website, OpenID Connect verifies your identity and securely shares basic profile information (name, email) with the application.

Unlike its failed predecessor OpenID 2.0, OIDC succeeded by building on top of OAuth 2.0's proven authorization framework. Where OAuth 2.0 handles "what can you access" (authorization), OIDC adds "who are you" (authentication) through cryptographically-signed ID Tokens. Published in February 2014, it achieved ISO/IEC international standard status in 2024, cementing its position as the global authentication standard.

OIDC's three-party model - end user, OpenID Provider (like Google), and Relying Party (the application) - uses JWT-based ID tokens to convey authentication information. Universal adoption by major platforms means billions of users authenticate via OIDC daily, making it the authentication standard for the modern web with no credible alternative for new implementations.

**For Developers:**

OIDC extends OAuth 2.0 by adding an `openid` scope and returning an ID Token alongside the access token. The ID Token is a JWT containing claims about the authenticated user (subject identifier, authentication time, methods used). Discovery mechanisms enable dynamic configuration via `.well-known/openid-configuration` endpoints. Standard scopes (profile, email, address, phone) provide predictable attribute access. Session management, logout specifications, and dynamic client registration complete the authentication lifecycle.

---

## Technical Details

### Specification

- **Specification:** OpenID Connect Core 1.0, plus Discovery, Dynamic Registration, Session Management, various profiles
- **Published:** February 2014
- **Standards Body:** OpenID Foundation
- **Current Status:** Final specification, ISO/IEC 26131:2024 through 26137:2024
- **Latest Recognition:** ITU-T X.1285 (April 2025)

### Key Concepts

**ID Tokens (JWT):**
- JSON Web Token containing authentication claims
- Cryptographically signed by OpenID Provider
- Required claims: iss (issuer), sub (subject), aud (audience), exp (expiration), iat (issued at)
- Optional claims: name, email, picture, etc.
- Must be validated: signature, issuer, audience, expiration

**Three Flows:**
- **Authorization Code Flow:** Recommended for web/mobile apps (with PKCE)
- **Implicit Flow:** Deprecated (removed in OAuth 2.1)
- **Hybrid Flow:** Combination of code and implicit (rare, prefer code + PKCE)

**Standard Scopes:**
- `openid` - Required, triggers OIDC instead of plain OAuth
- `profile` - Basic profile info (name, picture, etc.)
- `email` - Email address and verification status
- `address` - Physical mailing address
- `phone` - Phone number and verification status

**UserInfo Endpoint:**
- HTTP endpoint returning user claims
- Access token used for authorization
- Alternative to getting all claims in ID token
- Useful for large claim sets or privacy (selective disclosure)

**Discovery (.well-known/openid-configuration):**
- JSON document with provider metadata
- Lists endpoints (authorization, token, userinfo, jwks_uri)
- Supported scopes, response types, signing algorithms
- Enables dynamic client configuration

**Session Management:**
- Front-channel logout - Browser-based session termination
- Back-channel logout - Direct server-to-server logout notification
- RP-initiated logout - Application triggers logout at provider
- Session management iframe for monitoring session state

### Security Considerations

**What Makes It Secure:**
- Built on OAuth 2.0 security foundation
- Cryptographically-signed ID tokens prevent tampering
- Nonce parameter prevents token replay
- State parameter prevents CSRF
- PKCE protects authorization code (mandatory for public clients)

**ID Token Validation Requirements:**
1. Verify signature using provider's public key (JWKS)
2. Validate `iss` claim matches expected issuer
3. Validate `aud` claim includes client ID
4. Check `exp` hasn't passed
5. Verify `nonce` matches what client sent (if used)
6. Check `azp` if token has multiple audiences

**Security Extensions:**
- **PKCE (RFC 7636):** Mandatory for public clients, recommended for all
- **JAR (RFC 9101):** JWT-secured authorization requests (FAPI requirement)
- **JARM:** JWT-secured authorization response mode
- **FAPI:** Financial-grade API security profile

---

## Relationships

### Depends On

- **OAuth 2.0 (RFC 6749):** OIDC is an authentication layer built on OAuth 2.0's authorization framework. Uses OAuth flows, endpoints, and tokens as foundation.
- **JWT (RFC 7519):** ID tokens are JWTs - requires JWT parsing and validation
- **HTTPS/TLS:** All communications must be encrypted

### Complements

- **OAuth 2.0:** Provides authorization while OIDC provides authentication - typically used together
- **SCIM 2.0:** SCIM handles provisioning, OIDC handles authentication
- **SAML 2.0:** Organizations often support both OIDC (modern apps) and SAML (legacy) simultaneously

### Extensions

- **FAPI (Financial-grade API):** High-security OIDC profile for financial services
- **iGov:** Government sector OIDC profile with privacy and security requirements
- **HEART:** Healthcare OIDC profile for patient data access
- **SMART on FHIR:** Healthcare apps OIDC profile (US mandate via 21st Century Cures Act)
- **eKYC/IDA:** Identity assurance and verification profile
- **MODRNA CIBA:** Client-Initiated Backchannel Authentication

### Supersedes

- **OpenID 2.0 (2007-2014):** Completely replaced - no backward compatibility, architectural reimagining

### Technology Stack Example

**Typical OIDC Implementation:**
```
Frontend: User clicks "Sign in with Google"
  ↓
OIDC Authorization Request (with PKCE)
  ↓
User authenticates at Google (OpenID Provider)
  ↓
Authorization Code returned
  ↓
Backend exchanges code for tokens (with PKCE verifier)
  ↓
Receives: ID Token (who) + Access Token (what)
  ↓
Validates ID Token signature and claims
  ↓
User authenticated, session established
```

---

## Industry Usage

### Financial Services

- **Adoption:** Universal
- **Profile:** FAPI 2.0 required for PSD2/Open Banking
- **Requirements:** OIDC + PKCE + PAR + (DPoP or mTLS)
- **Certification:** OpenID FAPI Certification mandatory

### Healthcare

- **Adoption:** Universal (US mandate)
- **Profile:** SMART on FHIR (21st Century Cures Act requirement)
- **Requirements:** OIDC + FHIR scopes + patient consent
- **Use Case:** EHR app integration, patient portal access

### Government

- **Adoption:** Widespread
- **Profile:** iGov (International Government Assurance Profile)
- **Requirements:** Pairwise subject identifiers, PKCE for public clients
- **Examples:** Login.gov (US), GOV.UK Verify, eIDAS nodes

### Higher Education

- **Adoption:** Growing (transitioning from SAML)
- **Use Case:** Modern web/mobile apps, API access
- **Coexists with:** SAML/Shibboleth federations
- **Trend:** New apps use OIDC, federated SSO maintains SAML

### Enterprise B2B

- **Adoption:** Universal for new applications
- **Use Case:** Workforce SSO, SaaS integrations
- **Pattern:** OIDC for modern apps + SAML for legacy

### Consumer B2C

- **Adoption:** Universal
- **Examples:** Google, Apple, Microsoft, Facebook, GitHub, Amazon sign-in
- **Benefits:** Passwordless-capable, mobile-friendly, simple UX

### Compliance Mapping

| Regulation/Framework | Requirement Level | Notes |
|----------------------|-------------------|-------|
| PSD2/Open Banking | Required | Via FAPI profile |
| NIST 800-63 AAL2 | Supported | With proper implementation |
| 21st Century Cures | Required | Via SMART on FHIR profile |
| FedRAMP | Acceptable | Preferred over SAML for new apps |
| GDPR | Compatible | Supports consent-based data sharing |

---

## Open Source Implementations

### Production-Ready Providers

| Project | Language/Platform | Setup Complexity | Production Readiness | Notes |
|---------|-------------------|------------------|----------------------|-------|
| **Keycloak** | Java | Medium | ⭐⭐⭐⭐⭐ | Full IdP, supports OIDC + SAML + provisioning |
| **Auth0** | SaaS | Low | ⭐⭐⭐⭐⭐ | Managed service, enterprise-grade |
| **Ory Hydra** | Go | Medium | ⭐⭐⭐⭐⭐ | Cloud-native, OAuth + OIDC focused |
| **Authelia** | Go | Medium | ⭐⭐⭐⭐ | Self-hosted SSO + 2FA |
| **Authentik** | Python | Medium | ⭐⭐⭐⭐ | Modern UI, flexible |
| **Azure AD** | Cloud | Low | ⭐⭐⭐⭐⭐ | Microsoft cloud identity platform |
| **Google Identity** | Cloud | Low | ⭐⭐⭐⭐⭐ | Google's OIDC provider |

### Client Libraries

**JavaScript/TypeScript:**
- **openid-client** - Certified OIDC client library
- **passport-openidconnect** - Passport.js strategy
- **NextAuth.js** - Next.js authentication with OIDC
- **Auth.js** - Framework-agnostic authentication

**Python:**
- **authlib** - Comprehensive OAuth/OIDC library
- **python-jose** - JWT handling for ID tokens

**Java:**
- **Spring Security OAuth** - Spring framework integration
- **pac4j** - Security framework with OIDC support
- **Nimbus OAuth 2.0 SDK** - Low-level OAuth/OIDC client/server

**Go:**
- **go-oidc** - OpenID Connect client
- **ory/fosite** - OAuth 2.0 and OIDC server library

### Testing & Development Tools

- **OpenID Connect Debugger:** https://oidcdebugger.com/ - Flow testing
- **JWT.io:** https://jwt.io/ - ID token inspection and decoding
- **OAuth Playground:** https://www.oauth.com/playground/ - OIDC flow testing
- **OpenID Certification:** https://openid.net/certification/ - Conformance testing

---

## Migration Guides

Migration guides will be added in future stories:
- Migrating from SAML to OIDC (Story 3.2)
- Migrating from OpenID 2.0 to OIDC (historical - most already migrated 2014-2019)

---

## Best Practices

### Do's ✅

- **Use Authorization Code Flow + PKCE** for all clients (public and confidential)
- **Validate ID Token signature** using provider's JWKS (never skip)
- **Verify all required claims** (iss, aud, exp, nonce if sent)
- **Use Discovery** for dynamic configuration (.well-known/openid-configuration)
- **Implement proper logout** (front-channel + back-channel)
- **Use standard scopes** (openid, profile, email) for interoperability
- **Short token lifetimes** (ID token lifetime = access token lifetime)
- **Use state parameter** (CSRF protection)
- **Use nonce parameter** (token replay protection)

### Don'ts ❌

- **Never use Implicit Flow** - Deprecated, tokens in URLs
- **Never skip ID Token validation** - Signature and claims must be verified
- **Never trust claims without validation** - Always verify signature first
- **Never use 'none' algorithm** - ID tokens must be signed
- **Never store ID tokens in localStorage** (SPAs) - XSS risk, use secure session
- **Never accept expired ID tokens** - Check `exp` claim
- **Never accept tokens for wrong audience** - Verify `aud` claim
- **Never implement OIDC without PKCE** - Public clients require it

### Security Checklist

- [ ] Using Authorization Code Flow (not Implicit)
- [ ] PKCE implemented (code_challenge, code_verifier)
- [ ] State parameter used and validated
- [ ] Nonce parameter used and validated (if appropriate)
- [ ] ID token signature validation implemented
- [ ] All ID token claims validated (iss, aud, exp, nonce)
- [ ] HTTPS everywhere (no HTTP endpoints)
- [ ] Discovery endpoint used for configuration
- [ ] Front-channel and/or back-channel logout implemented
- [ ] Refresh tokens rotated on use

---

## References

### Official Specifications

- **Primary Spec:** [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- **Discovery:** [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html)
- **Dynamic Registration:** [OpenID Connect Dynamic Client Registration 1.0](https://openid.net/specs/openid-connect-registration-1_0.html)
- **Session Management:** [OpenID Connect Session Management 1.0](https://openid.net/specs/openid-connect-session-1_0.html)
- **Front-Channel Logout:** [OpenID Connect Front-Channel Logout 1.0](https://openid.net/specs/openid-connect-frontchannel-1_0.html)
- **Back-Channel Logout:** [OpenID Connect Back-Channel Logout 1.0](https://openid.net/specs/openid-connect-backchannel-1_0.html)

### Standards Body Resources

- **OpenID Foundation:** https://openid.net/
- **Specifications:** https://openid.net/developers/specs/
- **Certification:** https://openid.net/certification/

### ISO/IEC Recognition

- **ISO/IEC 26131:2024** - OpenID Connect Core
- **ISO/IEC 26132:2024** - Discovery
- **ISO/IEC 26133:2024** - Dynamic Registration
- Additional parts for session management, logout

### Community Resources

- **OpenID Connect Debugger:** https://oidcdebugger.com/
- **Certified Implementations:** https://openid.net/developers/certified/
- **Developer Guide:** https://openid.net/developers/how-connect-works/

### Historical Context

**Predecessor:** OpenID 2.0 (2007-2014)
- Failed due to complexity, poor UX, security issues (Covert Redirect)
- Addressed only authentication, forcing separate OAuth implementation
- Major providers deprecated 2014-2019 (Google April 2015, Yahoo 2015, Intuit 2019)

**Why OIDC Succeeded:**
- Leveraged OAuth 2.0's success and ecosystem
- Used JWT instead of XML (simpler, mobile-friendly)
- Adopted REST patterns instead of custom protocols
- Solved authentication AND authorization in one stack
- Better developer experience

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| Core 1.0 | 2014-02 | Initial specification |
| ISO/IEC 26131 | 2024 | International standard recognition |
| ITU-T X.1285 | 2025-04 | ITU recognition |

---

**Last Updated:** 2025-10-19
**Contributors:** Matt
