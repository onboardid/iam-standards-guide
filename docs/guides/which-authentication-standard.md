# Which Authentication Standard Should I Use?

Quick decision guide to help you select the right authentication standard for your use case.

## Decision Tree

### Question 1: Are you building a NEW application?

**YES** → Go to Question 2
**NO (maintaining existing)** → Go to Question 5

---

### Question 2: What type of application?

**Consumer/B2C app** → **Use [OpenID Connect](../standards/openid-connect.md) + [Passkeys](../standards/fido2-webauthn.md)**
- Social login (Google, Apple, Microsoft)
- Passwordless preferred
- → **[OIDC](../standards/openid-connect.md) + [PKCE](../standards/pkce.md) + [FIDO2](../standards/fido2-webauthn.md)**

**Financial Services** → **Use [FAPI 2.0](../standards/fapi.md)**
- → See [Financial Services Guide](../industries/financial-services.md)
- → **[OAuth 2.0](../standards/oauth-2.0.md) + [OIDC](../standards/openid-connect.md) + [FAPI 2.0](../standards/fapi.md) + [PKCE](../standards/pkce.md) + [PAR](../standards/par.md) + [DPoP](../standards/dpop.md)**

**Healthcare** → **Use SMART on FHIR**
- → See [Healthcare Guide](../industries/healthcare.md)
- → **[OIDC](../standards/openid-connect.md) + [OAuth 2.0](../standards/oauth-2.0.md) + [PKCE](../standards/pkce.md)** with FHIR scopes

**Government** → **Use iGov Profile**
- → See [Government Guide](../industries/government.md)
- → **[OIDC](../standards/openid-connect.md) + iGov + [PKCE](../standards/pkce.md)**

**Enterprise/B2B** → **Use [OpenID Connect](../standards/openid-connect.md)**
- Modern apps: OIDC
- Keep [SAML](../standards/saml.md) for existing B2B integrations
- → **[OIDC](../standards/openid-connect.md) + [PKCE](../standards/pkce.md)**

---

### Question 3: Do you need passwordless?

**YES** → **Add [FIDO2/WebAuthn](../standards/fido2-webauthn.md)**
- Passkeys for best UX
- Phishing-resistant
- → **[OIDC](../standards/openid-connect.md) + [Passkeys](../standards/fido2-webauthn.md)**

**NO** → **Use [OIDC](../standards/openid-connect.md) + Password + MFA**

---

### Question 4: High security requirements?

**YES (financial, government, healthcare)** → **Add security extensions:**
- **[DPoP](../standards/dpop.md):** Token binding
- **[PAR](../standards/par.md):** Request confidentiality
- Short token lifetimes (≤15 minutes)

**NO (standard enterprise)** → **[OIDC](../standards/openid-connect.md) + [PKCE](../standards/pkce.md)** is sufficient

---

### Question 5: Currently using what?

**Currently SAML** → Options:
- **Keep for B2B/legacy:** [SAML](../standards/saml.md) still widely used
- **Migrate new apps to OIDC:** See migration guide (Story 3.2)
- **Run both:** SAML for existing, OIDC for new

**Currently Password-only** → **Add:**
- **[Passkeys](../standards/fido2-webauthn.md)** (passwordless - recommended)
- **[OIDC](../standards/openid-connect.md)** if not using it yet

**Currently OAuth 1.0** → **Migrate to [OAuth 2.0](../standards/oauth-2.0.md)**

**Currently WS-Federation** → **Migrate to [OIDC](../standards/openid-connect.md)**

---

## Quick Recommendations by Scenario

| Scenario | Recommended Stack |
|----------|-------------------|
| **New consumer app** | OIDC + PKCE + Passkeys |
| **New enterprise app** | OIDC + PKCE |
| **Financial/payments** | OAuth + OIDC + FAPI 2.0 + PKCE + PAR + DPoP |
| **Healthcare (US)** | OIDC + OAuth + PKCE (SMART on FHIR) |
| **Government** | OIDC + iGov + PKCE |
| **Legacy B2B SSO** | Keep SAML, add OIDC for new |
| **Passwordless priority** | OIDC + FIDO2/Passkeys |
| **API-only (no users)** | OAuth 2.0 Client Credentials + mTLS |

## Not Sure? Default Choice

**For 90% of new applications:**

→ **[OpenID Connect](../standards/openid-connect.md) + [PKCE](../standards/pkce.md)**

This combination:
- ✅ Universal support (Google, Microsoft, Auth0, Okta, Keycloak)
- ✅ Works for web, mobile, SPA
- ✅ Secure (PKCE mandatory)
- ✅ Future-proof (industry standard)
- ✅ Good developer experience
- ✅ Compliance-friendly (NIST, GDPR, SOC 2)

Then add industry-specific extensions as needed (FAPI for finance, SMART for healthcare, etc.)

---

**See Also:**
- [Which Authorization Standard?](./which-authorization-standard.md)
- [Standards Catalog](../standards/)
- Industry Guides: [Financial Services](../industries/financial-services.md) | [Healthcare](../industries/healthcare.md) | [Government](../industries/government.md)

---

**Last Updated:** 2025-10-19
