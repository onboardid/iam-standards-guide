# Which Authorization Standard Should I Use?

Quick decision guide for selecting authorization standards and policy engines.

## Decision Tree

### Question 1: What are you authorizing?

**API access (third-party apps)** → **[OAuth 2.0](../standards/oauth-2.0.md)** + Go to Question 2

**Policy-based access control (ABAC/RBAC)** → Go to Question 3

**User-managed resource sharing** → **UMA 2.0** (User-Managed Access)

**Next-generation/IoT** → Consider **[GNAP](../standards/gnap.md)** (experimental)

---

### Question 2: OAuth 2.0 Security Level?

**Standard web/mobile app:**
- → **[OAuth 2.0](../standards/oauth-2.0.md) + [PKCE](../standards/pkce.md)**

**Financial services/Open Banking:**
- → **[FAPI 2.0](../standards/fapi.md)** (includes PKCE + PAR + DPoP)
- → See [Financial Services Guide](../industries/financial-services.md)

**High security (prevent token theft):**
- → Add **[DPoP](../standards/dpop.md)** or **mTLS**

**Complex permissions (payment details, data types):**
- → Add **[RAR](../standards/rar.md)** (Rich Authorization Requests)

---

### Question 3: Policy Engine Selection

**Cloud-native (Kubernetes):**
- → **[OPA](../standards/opa.md)** (Open Policy Agent)
- Most popular for K8s admission control
- General-purpose policy engine

**Need formal verification (provable security):**
- → **[Cedar](../standards/cedar.md)**
- AWS Verified Permissions
- Mathematically proven correct

**Relationship-based permissions (Google Drive-like sharing):**
- → **[OpenFGA](../standards/openfga.md)**
- Inspired by Google Zanzibar
- "Who has access to this document?"

**Legacy XML-based:**
- → Avoid **[XACML](../standards/xacml.md)** for new implementations
- Migrate to OPA or Cedar

---

## Quick Recommendations by Use Case

| Use Case | Recommended Standard |
|----------|----------------------|
| **API authorization** | OAuth 2.0 + PKCE |
| **Public client (mobile/SPA)** | OAuth 2.0 + PKCE (mandatory) |
| **Financial API** | FAPI 2.0 (OAuth + OIDC + PKCE + PAR + DPoP) |
| **Prevent token theft** | Add DPoP or mTLS to OAuth |
| **Fine-grained API permissions** | OAuth 2.0 + RAR |
| **Kubernetes policy** | OPA |
| **AWS authorization** | Cedar (or OPA) |
| **Collaborative app permissions** | OpenFGA (ReBAC) |
| **Enterprise ABAC** | OPA (modern) or XACML (legacy) |
| **IoT/constrained devices** | GNAP (experimental) or OAuth 2.0 Device Flow |

## Security Extensions Decision

### PKCE (Proof Key for Code Exchange)

**When:** **ALWAYS** (mandatory in OAuth 2.1 for all client types)
**Why:** Prevents authorization code interception
**Complexity:** Low (simple to implement)
**Standard:** [RFC 7636](../standards/pkce.md)

### DPoP (Demonstrating Proof-of-Possession)

**When:** High-value transactions, token theft concern
**Why:** Binds tokens to client's key (stolen tokens useless)
**Complexity:** Medium
**Alternative:** mTLS (certificate-based)
**Standard:** [RFC 9449](../standards/dpop.md)

### PAR (Pushed Authorization Requests)

**When:** Financial services (FAPI 2.0 mandatory), request confidentiality needed
**Why:** Parameters sent via back-channel (not exposed in browser)
**Complexity:** Medium
**Standard:** [RFC 9126](../standards/par.md)

### RAR (Rich Authorization Requests)

**When:** Beyond simple scopes (payment amounts, data types, actions)
**Why:** Structured JSON for complex permissions
**Complexity:** Low-Medium
**Use Cases:** Payments, healthcare data sharing, file access
**Standard:** [RFC 9396](../standards/rar.md)

## Default Choice

**For most API authorization needs:**

→ **[OAuth 2.0](../standards/oauth-2.0.md) + [PKCE](../standards/pkce.md)**

**Then layer on:**
- **Public clients:** PKCE is mandatory
- **High security:** Add DPoP or mTLS
- **Financial:** Use FAPI 2.0 (includes PKCE + PAR + DPoP)
- **Complex permissions:** Add RAR

---

**See Also:**
- [Which Authentication Standard?](./which-authentication-standard.md)
- [Financial Services Guide](../industries/financial-services.md)
- [Standards Catalog](../standards/)

---

**Last Updated:** 2025-10-19
