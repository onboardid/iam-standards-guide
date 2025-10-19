---
standard: "FIDO2 / WebAuthn"
specification: "WebAuthn Level 2 (W3C), CTAP 2.2 (FIDO Alliance)"
published: "2021-04"
standards_body: "W3C"
status: "WebAuthn Level 2 (W3C Recommendation April 2021), CTAP 2.2 (Final February 2025)"
adoption_level: "Widely Implemented"
use_cases:
  - "Passwordless Authentication"
  - "Multi-Factor Authentication (MFA)"
  - "Phishing-Resistant Authentication"
  - "Biometric Login"
industries:
  - "All"
related_standards:
  - "Passkeys"
  - "OpenID Connect"
  - "OAuth 2.0"
supersedes:
  - "FIDO U2F 1.2"
---

# FIDO2 / WebAuthn

## Summary

**Quick Facts:**
- **Purpose:** Passwordless authentication using cryptographic credentials tied to biometrics or security keys
- **Adoption:** Widely Implemented - 15 billion accounts support passkeys, 1 billion users activated, 95%+ browser support
- **Use Cases:** Passwordless login, phishing-resistant MFA, biometric authentication, security key authentication
- **Industry Focus:** All industries - consumer (Apple/Google/Microsoft passkeys) and enterprise (87% prioritizing for employees)

**Plain-Language Overview:**

FIDO2 represents the most significant authentication innovation in decades, enabling passwordless login through cryptographic credentials tied to your face, fingerprint, or security key. When you unlock your phone with Face ID and automatically sign into an app, or use a YubiKey to access your bank account, FIDO2 makes that secure, phishing-resistant authentication possible.

The numbers tell a remarkable adoption story. Over 15 billion online accounts now support passkeys (doubled from 7 billion in 2023), with more than 1 billion people having activated at least one passkey. Platform support is nearly universal - iOS 16+, Android 9+, Windows 10+, macOS 13+ provide native passkey capabilities, with browser support exceeding 95% globally.

Real-world deployments demonstrate tangible benefits. TikTok achieves 97% login success rates with passkeys vs lower rates for passwords. eBay reports 93% reduction in account takeovers. Tokyu Corporation found passkeys 12x faster than password + OTP. Yahoo! JAPAN has 27 million active passkey users. These aren't pilot statistics - they represent production deployments at massive scale, marking passkeys' transition from emerging technology to mainstream authentication method in 2025.

**For Developers:**

FIDO2 comprises two specifications: WebAuthn (W3C, browser API) and CTAP (FIDO Alliance, authenticator protocol). WebAuthn provides JavaScript APIs for registration and authentication ceremonies. Authenticators generate public/private key pairs, storing private keys securely (never leaving the device). Registration creates a credential tied to the website's origin (prevents phishing). Authentication challenges the authenticator to prove possession of the private key. Platform authenticators (Face ID, Touch ID, Windows Hello) sync credentials via passkeys. Roaming authenticators (YubiKey) work across devices.

---

## Technical Details

### Specification

- **WebAuthn Specification:** W3C Recommendation Level 2 (April 2021), Level 3 in progress
- **CTAP Specification:** FIDO Alliance CTAP 2.2 (Final, February 2025)
- **Published:** WebAuthn 2021-04, CTAP 2.2: 2025-02
- **Standards Bodies:** W3C (Web Authentication) + FIDO Alliance (Client to Authenticator Protocol)
- **Current Status:** Production-ready, widely deployed

### Key Concepts

**Registration Ceremony:**
1. User initiates registration
2. Server creates challenge (random bytes)
3. Browser calls `navigator.credentials.create()`
4. User verifies presence (biometric, PIN)
5. Authenticator generates key pair, returns public key + attestation
6. Server stores public key for user

**Authentication Ceremony:**
1. User initiates login
2. Server creates challenge
3. Browser calls `navigator.credentials.get()`
4. User verifies presence
5. Authenticator signs challenge with private key
6. Server verifies signature using stored public key

**Authenticator Types:**

**Platform Authenticators:**
- Built into device (Face ID, Touch ID, Windows Hello, Android Biometric)
- Convenient, always available
- Credentials sync via passkeys (iCloud, Google, Microsoft)

**Roaming Authenticators:**
- External devices (YubiKey, Titan Security Key)
- Work across multiple devices
- Higher security (offline storage)
- Backup/recovery option

**Passkeys:**
- Multi-device FIDO credentials (announced May 2022)
- Sync across user's devices via platform (iCloud Keychain, Google Password Manager, Microsoft Account)
- Discoverable credentials (can be used without username)
- Recovery via platform account

**Attestation:**
- Cryptographic proof of authenticator legitimacy
- Types: None, Self, Basic, AttCA, ECDAA, Anonymous CA
- Most consumer deployments use "none" attestation
- Enterprise may require specific authenticators (attestation verification)

### Security Considerations

**What Makes It Secure:**
- **Phishing-resistant:** Credentials bound to origin (domain), won't work on phishing sites
- **Private keys never leave device:** No password transmission or storage
- **Strong cryptography:** Public key cryptography (ECDSA, EdDSA, RS256)
- **User verification:** Biometric or PIN required
- **No shared secrets:** Each credential unique per site

**Advantages Over Passwords:**
- Cannot be phished (origin-bound)
- Cannot be reused (unique per site)
- Cannot be guessed or brute-forced
- Cannot be forgotten
- Biometric convenience

**NIST Compliance:**
- NIST 800-63-4: Phishing-resistant MFA requirement (federal mandate)
- FIDO2 meets AAL3 (highest authenticator assurance level)
- Passkeys acceptable for government authentication

---

## Relationships

### Depends On

- **Web Crypto API:** Browser cryptographic primitives
- **Public Key Infrastructure:** Understanding of asymmetric cryptography

### Complements

- **OpenID Connect:** OIDC handles session/tokens, FIDO2 provides authentication method
- **OAuth 2.0:** Can use FIDO2 for user authentication in OAuth flows
- **Passkeys:** Consumer-friendly branding for multi-device FIDO credentials

### Supersedes

- **FIDO U2F 1.2:** Second-factor only, now CTAP1 (backward compatible)
- **Passwords:** Primary goal is password replacement

---

## Industry Usage

### Consumer B2C

- **Adoption:** Rapidly Growing - 15B+ accounts, 1B+ users activated
- **Platforms:** Apple (iOS 16+), Google (Android 9+), Microsoft (Windows 10+)
- **Examples:** TikTok, eBay, PayPal, Amazon, GitHub, Shopify, Best Buy
- **Success Metrics:** 97% login success (TikTok), 93% takeover reduction (eBay), 12x faster (Tokyu)

### Financial Services

- **Adoption:** Early Adopters
- **Examples:** PayPal, Coinbase, Revolut, digital banks
- **Driver:** Visa Payment Passkey Service
- **Compliance:** Meets PSD2 Strong Customer Authentication

### Government

- **Adoption:** Growing (NIST mandate)
- **Requirement:** Phishing-resistant MFA for federal agencies
- **Examples:** US federal systems (EO 14028 mandate), UK gov.uk Digital ID
- **Timeline:** Federal mandate driving 2024-2026 deployment

### Enterprise

- **Adoption:** 87% prioritize for employee authentication
- **Benefits:** 90% security improvement, 82% positive UX
- **Trend:** Password usage declined 76%→56% post-deployment
- **Integration:** Password manager support (Bitwarden 550% increase, Dashlane 400% growth)

### Healthcare

- **Adoption:** Growing
- **Driver:** HIPAA security requirements, patient portal access
- **Use Case:** Clinician authentication, patient portal MFA

### Compliance Mapping

| Regulation/Framework | Requirement Level | Notes |
|----------------------|-------------------|-------|
| NIST 800-63-4 AAL3 | Required | Phishing-resistant MFA mandate |
| PSD2 SCA | Acceptable | Strong customer authentication |
| HIPAA | Recommended | Exceeds password security requirements |
| EO 14028 (US Federal) | Required | Phishing-resistant MFA by 2024 |

---

## Open Source Implementations

### Server Libraries

**JavaScript/TypeScript:**
- **@simplewebauthn/server** - Comprehensive WebAuthn server
- **fido2-lib** - FIDO2/WebAuthn server library

**Python:**
- **py_webauthn** - WebAuthn relying party library
- **fido2** - Python FIDO2 library

**Java:**
- **webauthn4j** - WebAuthn/FIDO2 server
- **Yubico java-webauthn-server** - Production-ready

**Go:**
- **go-webauthn** - WebAuthn relying party library

**.NET:**
- **Fido2.AspNet** - ASP.NET Core library

### Client/Platform Support

- **iOS 16+:** Passkeys in iCloud Keychain
- **Android 9+:** Passkeys in Google Password Manager
- **Windows 10+:** Windows Hello for passkeys
- **macOS 13+:** Passkeys in iCloud Keychain
- **Browsers:** Chrome, Firefox, Safari, Edge (95%+ global coverage)

### Hardware Authenticators

- **YubiKey 5 Series** - USB-A, USB-C, NFC, Lightning
- **Google Titan Security Key** - USB and Bluetooth
- **Feitian** - Various form factors
- **Solo Keys** - Open-source security key

### Testing & Development Tools

- **WebAuthn.io:** https://webauthn.io/ - Try passkeys registration/authentication
- **webauthn.me:** https://webauthn.me/ - Testing environment
- **FIDO Conformance Tools:** https://fidoalliance.org/certification/ - Certification testing

---

## Best Practices

### Do's ✅

- **Implement passkeys first** (best UX + security)
- **Support both platform and roaming** authenticators
- **Use resident/discoverable credentials** (passwordless without username)
- **Require user verification** (biometric or PIN)
- **Implement account recovery** (multiple credentials, account recovery flow)
- **Test across platforms** (iOS, Android, Windows, macOS)
- **Provide fallback** (SMS OTP for account recovery only)
- **User education** (explain passkeys benefits)

### Don'ts ❌

- **Never require specific authenticator types** (allow user choice)
- **Never skip user verification** (defeats phishing resistance)
- **Never store private keys** (they never leave user's device)
- **Never implement without HTTPS** (WebAuthn requires secure context)
- **Never treat as second-factor only** (primary authentication method)
- **Never block password managers** (they're legitimate credential storage)

### Security Checklist

- [ ] WebAuthn API implemented correctly (registration + authentication)
- [ ] Challenges are random and single-use
- [ ] Attestation validated (if enterprise requiring specific authenticators)
- [ ] User verification required
- [ ] Credential IDs stored securely
- [ ] Public keys stored securely
- [ ] HTTPS everywhere (secure context required)
- [ ] Account recovery flow implemented
- [ ] Multiple credentials allowed per user
- [ ] Testing across major platforms

---

## References

### Official Specifications

- **WebAuthn Level 2:** [W3C Recommendation](https://www.w3.org/TR/webauthn-2/)
- **WebAuthn Level 3:** [W3C Working Draft](https://www.w3.org/TR/webauthn-3/) (in progress)
- **CTAP 2.2:** [FIDO Alliance Specification](https://fidoalliance.org/specs/fido-v2.2-rd-20250228/fido-client-to-authenticator-protocol-v2.2-rd-20250228.html) (February 2025)
- **Passkeys:** [FIDO Alliance Whitepaper](https://fidoalliance.org/passkeys/)

### Standards Body Resources

- **W3C WebAuthn:** https://www.w3.org/TR/webauthn/
- **FIDO Alliance:** https://fidoalliance.org/
- **Passkeys.dev:** https://passkeys.dev/ (developer resources)
- **Passkeys.io:** https://wwwkeys.io/ (end-user information)

### Community Resources

- **WebAuthn Guide:** https://webauthn.guide/
- **WebAuthn.io Demo:** https://webauthn.io/
- **FIDO Dev Resources:** https://fidoalliance.org/developers/

### Historical Context

**Predecessor:** FIDO U2F 1.2 (2014)
- Second-factor only (not passwordless)
- USB security keys
- Foundation for FIDO2/passkeys evolution

**Why FIDO2 Succeeded:**
- Platform integration (Apple, Google, Microsoft committed)
- True passwordless (not just 2FA)
- Better UX than U2F (biometrics vs USB key)
- Passkeys solved device loss problem (sync via platform)
- Government mandate (NIST phishing-resistant requirement)

---

**Last Updated:** 2025-10-19
**Contributors:** Matt
