---
standard: "SAML 2.0"
specification: "OASIS SAML 2.0"
published: "2005-03"
standards_body: "OASIS"
status: "OASIS Standard (March 2005), ISO/IEC 26131:2024"
adoption_level: "Widely Implemented"
use_cases:
  - "Enterprise Single Sign-On (SSO)"
  - "Cross-Domain Federation"
  - "B2B Partner Access"
  - "Educational Federation"
industries:
  - "Higher Education"
  - "Enterprise"
  - "Government"
  - "Financial Services"
related_standards:
  - "OpenID Connect"
  - "OAuth 2.0"
  - "Shibboleth"
supersedes:
  - "SAML 1.1"
---

# SAML 2.0

## Summary

**Quick Facts:**
- **Purpose:** XML-based protocol enabling single sign-on and identity federation across organizational boundaries
- **Adoption:** Widely Implemented - 20 years old, still growing in enterprise despite newer alternatives
- **Use Cases:** Enterprise SSO, cross-domain federation, B2B partner access, educational federations
- **Industry Focus:** Higher education, enterprise B2B, government, maintained alongside OIDC in modern deployments

**Plain-Language Overview:**

SAML 2.0 (Security Assertion Markup Language) enables single sign-on across different organizations and applications. When you log into your company's systems and automatically gain access to third-party SaaS applications without re-entering credentials, SAML is often handling that federation behind the scenes.

Published in March 2005, SAML defies predictions of obsolescence. Twenty years later, it maintains and even grows enterprise adoption, achieving ISO/IEC standardization in 2024. Industry analysis projects the SAML market at $3 billion by end of 2024, with adoption "exponentially increasing every year" according to recent assessments. This persistence stems from massive installed base and network effects rather than technical superiority over OpenID Connect.

Educational federations (InCommon, eduGAIN), government identity ecosystems, and enterprise SaaS applications represent decades of investment in SAML infrastructure. The protocol isn't declining—it's coexisting with OIDC, with organizations deploying both based on specific application requirements rather than pursuing wholesale replacement. New cloud-native apps typically use OIDC, while SAML remains essential for legacy enterprise applications and cross-organizational federations.

**For Developers:**

SAML uses XML-based assertions to convey authentication and attribute information between Identity Providers (IdP) and Service Providers (SP). The protocol supports browser-based SSO through HTTP redirects or POST bindings, with digitally-signed assertions ensuring integrity. Metadata exchange establishes trust between IdPs and SPs. SAML excels at complex attribute exchange (hierarchical attributes, roles, entitlements via XML) and multi-party federations with established trust frameworks.

---

## Technical Details

### Specification

- **Specification:** OASIS SAML 2.0 Core, Bindings, Profiles
- **Published:** March 2005
- **Standards Body:** OASIS Security Services Technical Committee
- **Current Status:** OASIS Standard, ISO/IEC 26131:2024 recognition
- **Latest Activity:** Ongoing maintenance, no SAML 3.0 planned

### Key Concepts

**SAML Assertions:**
- XML documents containing authentication/authorization statements
- Digitally signed by IdP for integrity and authenticity
- Contains: Subject (user), Conditions (validity), Statements (authentication, attributes)
- Time-limited validity (NotBefore, NotOnOrAfter)

**Three Types of Assertions:**
1. **Authentication:** User authenticated at specific time with specific method
2. **Attribute:** User attributes (email, roles, groups, custom claims)
3. **Authorization:** Authorization decisions about resource access

**SAML Flows:**

**SP-Initiated Flow (Most Common):**
1. User accesses Service Provider resource
2. SP generates SAML AuthnRequest, redirects to IdP
3. User authenticates at IdP
4. IdP generates signed SAML Response with assertion
5. User redirected back to SP with assertion
6. SP validates assertion, establishes session

**IdP-Initiated Flow:**
1. User already authenticated at IdP
2. User selects application from IdP portal
3. IdP sends unsolicited SAML Response to SP
4. SP validates and establishes session

**Bindings (Transport Mechanisms):**
- **HTTP Redirect:** SAML message in URL parameters (size-limited)
- **HTTP POST:** SAML message in form data (most common)
- **HTTP Artifact:** Reference sent, actual assertion retrieved via back-channel
- **SOAP:** Direct message exchange (less common)

**Metadata Exchange:**
- XML documents describing IdP/SP capabilities
- Contains: Entity ID, endpoints (SSO, SLO), certificates, supported bindings
- Enables trust establishment and configuration
- Federations use metadata aggregates (InCommon, eduGAIN)

### Security Considerations

**What Makes It Secure:**
- Digital signatures on assertions prevent tampering
- XML encryption for sensitive attributes
- Time-bound assertions (short validity windows)
- Recipient validation (Audience restriction)
- Subject confirmation methods

**Common Vulnerabilities:**
- **XML Signature Wrapping:** Attackers manipulate XML to bypass signature validation
- **XML External Entity (XXE):** XML parser vulnerabilities
- **Assertion Replay:** Time-based attacks if validity windows too long
- **Mitigation:** Modern SAML libraries address these, keep software updated

---

## Relationships

### Depends On

- **XML:** Protocol uses XML for assertions and metadata
- **HTTPS/TLS:** Secure transport mandatory
- **X.509 Certificates:** Digital signatures and encryption

### Complements

- **OpenID Connect:** Organizations often support both (SAML for legacy, OIDC for modern)
- **SCIM:** SCIM provisions accounts, SAML handles authentication
- **Shibboleth:** Reference implementation commonly used in education

### Supersedes

- **SAML 1.1 (2003):** Improved federation, better browser support

### Technology Stack Example

**Typical SAML Enterprise Deployment:**
```
Enterprise IdP (Okta/Azure AD/Ping)
  ↓ SAML Assertion
SaaS Applications (Salesforce, Workday, ServiceNow)
  ↓ Attribute Mapping
HR System (source of truth)
```

---

## Industry Usage

### Higher Education

- **Adoption:** Dominant standard
- **Implementation:** Shibboleth/SAML
- **Federations:** InCommon (US), eduGAIN (global), UK Federation, AAF (Australia)
- **Use Case:** Campus-wide SSO, research collaboration, library access
- **Status:** Entrenched, coexists with OIDC for modern apps

### Enterprise B2B

- **Adoption:** Universal for SaaS integrations
- **Pattern:** SAML for workforce SSO to enterprise applications
- **Trend:** Maintaining SAML for existing integrations while adding OIDC for new apps
- **Migration:** Gradual SAML→OIDC over multi-year timelines

### Government

- **Adoption:** Widespread
- **Use Case:** Cross-agency federation, citizen services
- **Examples:** InCommon, government federations
- **Coexists with:** OIDC (newer apps), PIV/CAC (smart cards)

### Financial Services

- **Adoption:** Common for internal SSO
- **Trend:** OIDC via FAPI for external APIs, SAML for internal apps
- **Legacy Systems:** Maintains SAML support

### Compliance Mapping

| Regulation/Framework | Requirement Level | Notes |
|----------------------|-------------------|-------|
| NIST 800-63 | Acceptable | Meets AAL2 requirements |
| FedRAMP | Acceptable | Widely used in government cloud |
| GDPR | Compatible | Supports federated identity |
| SOC 2 | Acceptable | Established SSO standard |

---

## Open Source Implementations

### Production-Ready

| Project | Language/Platform | Setup Complexity | Production Readiness | Notes |
|---------|-------------------|------------------|----------------------|-------|
| **Shibboleth IdP** | Java | High | ⭐⭐⭐⭐⭐ | Educational standard, SAML + OIDC |
| **SimpleSAMLphp** | PHP | Medium | ⭐⭐⭐⭐ | Flexible, widely deployed |
| **Keycloak** | Java | Medium | ⭐⭐⭐⭐⭐ | Supports SAML + OIDC |
| **OneLogin** | SaaS | Low | ⭐⭐⭐⭐⭐ | Enterprise identity platform |
| **Okta** | SaaS | Low | ⭐⭐⭐⭐⭐ | Cloud identity, SAML + OIDC |
| **Azure AD** | Cloud | Low | ⭐⭐⭐⭐⭐ | Microsoft, SAML + OIDC + WS-Fed |
| **Ping Identity** | Commercial | High | ⭐⭐⭐⭐⭐ | Enterprise-grade federation |

### Client Libraries (SP Implementation)

**JavaScript/Node.js:**
- **passport-saml** - Passport.js SAML strategy
- **saml2-js** - SAML service provider library

**Python:**
- **python3-saml** (OneLogin) - SAML toolkit
- **pysaml2** - Comprehensive SAML library

**Java:**
- **Spring Security SAML** - Spring framework integration
- **OpenSAML** - Low-level SAML library (used by Shibboleth)

**Ruby:**
- **ruby-saml** - SAML service provider

### Testing & Development Tools

- **SAML-tracer (Firefox/Chrome extension):** Debug SAML messages
- **SAMLTool.com:** Online SAML encoder/decoder
- **Okta SAML Validator:** Assertion validation testing

---

## Migration Guides

Migration guides will be added in future stories:
- Migrating from SAML to OpenID Connect - Story 3.2

---

## Best Practices

### Do's ✅

- **Validate assertion signatures** (never skip)
- **Check NotBefore/NotOnOrAfter** (prevent replay)
- **Verify Audience** (prevent assertion reuse)
- **Use short assertion lifetimes** (5-10 minutes max)
- **Implement Single Logout (SLO)** (terminate all sessions)
- **Use modern XML libraries** (prevent XXE, signature wrapping)
- **Encrypt sensitive attributes** (PII protection)
- **Maintain synchronized time** (NTP) for time-based validations

### Don'ts ❌

- **Never skip assertion signature validation** - Critical security control
- **Never accept expired assertions** - Check time bounds
- **Never accept assertions for wrong audience** - Validate Recipient/Audience
- **Never use unsigned assertions** - Must be cryptographically signed
- **Never expose detailed error messages** - Prevents information leakage
- **Never use outdated XML libraries** - Security vulnerabilities (XXE, signature wrapping)
- **Never implement IdP-initiated flow without CSRF protection**

### Security Checklist

- [ ] Assertion signature validation implemented
- [ ] Certificate chain validation for signing cert
- [ ] NotBefore/NotOnOrAfter time bounds checked
- [ ] Audience/Recipient validation
- [ ] Subject confirmation method validated
- [ ] Assertions stored securely (encrypted at rest)
- [ ] Single Logout implemented
- [ ] Modern XML parser (prevents XXE)
- [ ] Signature wrapping attacks mitigated
- [ ] Time synchronization (NTP) configured

---

**Last Updated:** 2025-10-19
**Contributors:** Matt
