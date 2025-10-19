---
standard: "PKCE"
specification: "RFC 7636"
published: "2015-09"
standards_body: "IETF"
status: "RFC 7636 (September 2015), mandatory in OAuth 2.1"
adoption_level: "Universal"
use_cases:
  - "OAuth Authorization Code Flow Protection"
  - "Mobile App Security"
  - "Single-Page Application (SPA) Security"
  - "Public Client Protection"
industries:
  - "All"
related_standards:
  - "OAuth 2.0"
  - "OAuth 2.1"
  - "OpenID Connect"
  - "FAPI"
---

# PKCE (Proof Key for Code Exchange)

## Summary

**Quick Facts:**
- **Purpose:** Protects OAuth authorization codes from interception attacks
- **Adoption:** Universal - mandatory in OAuth 2.1 for ALL client types, universally adopted by major providers
- **Use Cases:** OAuth code protection, mobile app security, SPA security, preventing code interception
- **Industry Focus:** All industries - no exceptions, required everywhere

**Plain-Language Overview:**

PKCE (pronounced "pixy") is a critical security extension for OAuth 2.0 that prevents attackers from stealing authorization codes. Originally designed for mobile apps, PKCE proved so effective that OAuth 2.1 mandates it for all client types - not just public clients.

The attack PKCE prevents: An attacker intercepts the authorization code (the temporary code OAuth returns before exchanging it for tokens). Without PKCE, the attacker could exchange that code for access tokens. With PKCE, the code is cryptographically bound to the original client that requested it, making interception useless.

Universal adoption by Auth0, Okta, Google, and Microsoft demonstrates PKCE's critical security value. The protocol is remarkably simple - client generates a random `code_verifier`, derives a `code_challenge`, sends the challenge with the authorization request, and proves possession of the verifier during token exchange. This prevents an entire class of attacks with minimal implementation complexity.

**For Developers:**

PKCE extends OAuth 2.0 authorization code flow with two parameters: `code_challenge` (sent in authorization request) and `code_verifier` (sent in token exchange). The client generates a cryptographically-random verifier (43-128 characters), transforms it via SHA256 to create the challenge, sends the challenge when requesting authorization, and later proves possession by sending the original verifier. The authorization server validates that SHA256(verifier) matches the stored challenge before issuing tokens. This cryptographic binding makes intercepted codes worthless to attackers.

---

## Technical Details

### Specification

- **Specification:** RFC 7636 - Proof Key for Code Exchange
- **Published:** September 2015
- **Standards Body:** IETF OAuth Working Group
- **Current Status:** Final RFC, mandatory in OAuth 2.1
- **Latest Security Guidance:** RFC 9700 (OAuth 2.0 Security Best Current Practice, January 2025)

### Key Concepts

**The PKCE Flow:**

**1. Client generates verifier (random string):**
```
code_verifier = 43-128 random characters [A-Z, a-z, 0-9, -, ., _, ~]
Example: "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
```

**2. Client derives challenge:**
```
code_challenge = BASE64URL(SHA256(code_verifier))
code_challenge_method = "S256" (recommended)
// or "plain" (not recommended, only if SHA256 unavailable)
```

**3. Authorization Request (includes challenge):**
```
GET /authorize?
  response_type=code&
  client_id=...&
  redirect_uri=...&
  scope=...&
  state=...&
  code_challenge=E9Melhoa...&
  code_challenge_method=S256
```

**4. Authorization Code Returned:**
Server stores `code_challenge` and `method` with the code

**5. Token Exchange (includes verifier):**
```
POST /token
  grant_type=authorization_code&
  code=...&
  redirect_uri=...&
  client_id=...&
  code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```

**6. Server Validates:**
```
if code_challenge_method == "S256":
  computed = BASE64URL(SHA256(code_verifier))
else:
  computed = code_verifier

if computed == stored_code_challenge:
  issue tokens
else:
  reject (code interception detected)
```

**Challenge Methods:**

**S256 (Recommended):**
- SHA256 hash transformation
- Prevents verifier exposure if authorization request intercepted
- Mandatory for OAuth 2.1

**Plain (Not Recommended):**
- No transformation, challenge = verifier
- Only use if SHA256 unavailable (extremely rare)
- Less secure

### Security Considerations

**Attack Prevented:**

**Authorization Code Interception Attack:**
1. Attacker intercepts authorization code (via malicious app, network attack)
2. Without PKCE: Attacker exchanges code for access token ✅ Success (bad!)
3. With PKCE: Attacker lacks `code_verifier` ❌ Exchange fails (good!)

**Why PKCE is Mandatory:**

**Originally (2015-2021):** Required for public clients (mobile, SPA) only
**OAuth 2.1 (2025):** **MANDATORY for ALL client types**
- Confidential clients benefit too (defense-in-depth)
- Simplifies implementation (one flow for all clients)
- No client secret needed for public clients

**What PKCE Doesn't Protect:**
- Doesn't prevent token theft after issuance (use DPoP for that)
- Doesn't protect against compromised authorization servers
- Doesn't replace TLS/HTTPS (still mandatory)

---

## Relationships

### Depends On

- **OAuth 2.0 (RFC 6749):** PKCE is an extension to OAuth 2.0 authorization code flow
- **SHA256:** Cryptographic hash function for challenge derivation (unless using plain method)

### Complements

- **OAuth 2.0:** Essential security extension, now mandatory
- **OpenID Connect:** OIDC flows use PKCE for code protection
- **DPoP:** PKCE protects codes, DPoP protects tokens (combined = comprehensive protection)

### Required By

- **OAuth 2.1:** PKCE mandatory for all client types
- **FAPI 2.0:** Required for financial-grade API security
- **iGov:** Required for public clients
- **Modern Security Practice:** Universal expectation (RFC 9700)

---

## Industry Usage

### All Industries

- **Adoption:** Universal - no industry exceptions
- **Requirement Level:** Mandatory (OAuth 2.1 compliance)
- **Implementation:** Built into all modern OAuth libraries

### Financial Services

- **Status:** Required (FAPI mandates)
- **Compliance:** PSD2, Open Banking requirements

### Government

- **Status:** Required for public clients (iGov profile)
- **Compliance:** NIST 800-63 best practices

### Healthcare

- **Status:** Required (SMART on FHIR uses OAuth 2.0 + PKCE)

### Enterprise & Consumer

- **Status:** Universal requirement
- **Providers:** Google, Microsoft, Facebook, GitHub all require/enforce PKCE

### Compliance Mapping

| Regulation/Framework | Requirement Level | Notes |
|----------------------|-------------------|-------|
| OAuth 2.1 | Mandatory | Required for all clients |
| FAPI 2.0 | Mandatory | Financial-grade security |
| iGov | Mandatory | Public clients |
| NIST 800-63 | Best Practice | Security recommendation |
| RFC 9700 Security BCP | Mandatory | OAuth security best practice |

---

## Open Source Implementations

### Client Libraries (Built-In Support)

**All modern OAuth client libraries include PKCE:**

**JavaScript/TypeScript:**
- **oauth4webapi** - Native PKCE support
- **openid-client** - Automatic PKCE
- **NextAuth.js** - PKCE enabled by default

**Python:**
- **authlib** - PKCE support
- **requests-oauthlib** - PKCE extension

**Java:**
- **Spring Security OAuth** - PKCE support
- **Nimbus OAuth SDK** - Full PKCE implementation

**Go:**
- **golang.org/x/oauth2** - PKCE support

**Swift:**
- **AppAuth-iOS** - PKCE enabled

**Kotlin:**
- **AppAuth-Android** - PKCE enabled

### Server/Provider Libraries

**PKCE validation built into all modern OAuth servers:**
- Keycloak
- Ory Hydra
- Auth0
- Authelia
- Authentik
- Cloud providers (Google, Microsoft, AWS Cognito)

### Testing Tools

- **OAuth Debugger:** https://oauthdebugger.com/ - PKCE flow testing
- **OAuth Playground:** https://www.oauth.com/playground/ - Interactive PKCE demonstration

---

## Migration Guides

Migration guides will be added in future stories:
- Upgrading to OAuth 2.1 (including PKCE) - Story 3.4

---

## Best Practices

### Do's ✅

- **Use PKCE for ALL OAuth flows** (public and confidential clients)
- **Use S256 challenge method** (not plain)
- **Generate cryptographically random verifier** (43-128 characters)
- **Never reuse verifiers** (generate new for each authorization)
- **Store verifier securely** until token exchange
- **Destroy verifier** after successful token exchange

### Don'ts ❌

- **Never omit PKCE** - Required in OAuth 2.1
- **Never use predictable verifiers** - Must be cryptographically random
- **Never use plain method** unless SHA256 truly unavailable
- **Never send verifier in authorization request** - Only send challenge
- **Never expose verifier** in logs or error messages

### Security Checklist

- [ ] PKCE implemented for all authorization code flows
- [ ] S256 challenge method used (not plain)
- [ ] Verifier is cryptographically random (43-128 characters)
- [ ] Verifier generated fresh for each authorization
- [ ] Verifier stored securely until token exchange
- [ ] Verifier sent in token exchange request
- [ ] Server validates challenge matches verifier
- [ ] Verifier destroyed after successful exchange

---

## References

### Official Specifications

- **Primary Spec:** [RFC 7636 - Proof Key for Code Exchange](https://datatracker.ietf.org/doc/html/rfc7636)
- **Security BCP:** [RFC 9700 - OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) (January 2025)
- **OAuth 2.1:** [Draft 13](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-13) (mandates PKCE)

### Standards Body Resources

- **IETF OAuth WG:** https://datatracker.ietf.org/wg/oauth/
- **OAuth.net:** https://oauth.net/2/pkce/

### Community Resources

- **PKCE Explainer:** https://oauth.net/2/pkce/
- **Implementation Guide:** https://www.oauth.com/oauth2-servers/pkce/

---

**Last Updated:** 2025-10-19
**Contributors:** Matt
