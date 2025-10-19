---
standard: "DPoP"
specification: "RFC 9449"
published: "2023-09"
standards_body: "IETF"
status: "RFC 9449 (September 2023)"
adoption_level: "Growing"
use_cases:
  - "Sender-Constrained OAuth Tokens"
  - "Token Theft Prevention"
  - "Application-Layer Proof-of-Possession"
industries:
  - "Financial Services"
  - "Enterprise"
  - "All"
related_standards:
  - "OAuth 2.0"
  - "PKCE"
  - "mTLS"
  - "FAPI"
---

# DPoP (Demonstrating Proof-of-Possession)

## Summary

**Quick Facts:**
- **Purpose:** Binds OAuth access tokens to client's public/private key pair, preventing token theft
- **Adoption:** Growing - supported by Auth0, Okta, Spring Security; required by Bluesky
- **Use Cases:** Preventing token theft/replay, financial services security, high-value transaction protection
- **Industry Focus:** Financial services lead, expanding to enterprise and high-security scenarios

**Plain-Language Overview:**

DPoP (Demonstrating Proof-of-Possession) solves a critical OAuth security problem: stolen bearer tokens work for anyone who possesses them. DPoP binds tokens to a specific client's cryptographic key, making stolen tokens useless to attackers.

Traditional OAuth uses "bearer tokens" - like cash, whoever has it can use it. DPoP transforms tokens into "checks" - only the rightful owner (holder of the private key) can use them. Each API request requires a fresh cryptographic proof signed with the client's private key, making token theft pointless since attackers can't generate valid proofs.

Published as RFC 9449 in September 2023, DPoP represents the industry's shift from bearer tokens to sender-constrained tokens for sensitive use cases. Financial services adoption leads, with FAPI 2.0 considering DPoP as an alternative to mTLS for sender-constraining.

**For Developers:**

DPoP requires clients to generate a public/private key pair, include the public key (as JWK) in a DPoP proof JWT sent with each request, and sign the proof with the private key. The authorization server binds tokens to the public key. Resource servers validate that incoming DPoP proofs match the token's bound key and are fresh (contain current timestamp, nonce, HTTP method, URL). Implementation adds overhead vs bearer tokens but provides significant security improvement for high-value scenarios.

---

## Technical Details

- **Specification:** RFC 9449
- **Published:** September 2023
- **Standards Body:** IETF OAuth Working Group
- **Status:** Final RFC, growing adoption

### How It Works

1. Client generates public/private key pair (typically ECDSA or RSA)
2. Client creates DPoP proof JWT for each request containing: public key (JWK), timestamp, nonce, HTTP method, URL
3. Client signs proof with private key
4. Client sends proof in `DPoP` header with request
5. Server validates proof signature, freshness, and HTTP binding
6. Server issues tokens bound to the client's public key
7. For resource access, client includes both `Authorization: DPoP [token]` header and fresh DPoP proof

**Key Benefit:** Stolen tokens can't be used without the private key.

---

## Industry Usage

**Financial Services:** Leading adoption for PSD2/Open Banking high-security scenarios
**Enterprise:** Growing for internal high-value APIs
**Comparison to mTLS:** DPoP works in browsers, mTLS requires certificate infrastructure

---

## References

- **RFC 9449:** https://datatracker.ietf.org/doc/html/rfc9449

---

**Last Updated:** 2025-10-19
