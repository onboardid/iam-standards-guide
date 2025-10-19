---
standard: "SPIFFE/SPIRE"
specification: "SPIFFE Specification"
published: "2016-01"
standards_body: "CNCF"
status: "CNCF Graduated (August 2022)"
adoption_level: "Growing"
use_cases:
  - "Workload Identity"
  - "Service-to-Service Authentication"
  - "Zero Trust Networking"
  - "Cloud-Native Security"
industries:
  - "Enterprise"
  - "Cloud/SaaS"
  - "Telecommunications"
related_standards:
  - "OAuth 2.0"
  - "X.509"
  - "mTLS"
  - "OPA"
---

# SPIFFE/SPIRE

## Summary

**Quick Facts:**
- **Purpose:** Cryptographic identity for cloud-native workloads and distributed systems
- **Adoption:** Growing - production at Bloomberg, ByteDance, GitHub, Netflix, Pinterest, Uber
- **Use Cases:** Service-to-service authentication, workload identity, Zero Trust networking, eliminating "secret zero"
- **Industry Focus:** Cloud-native enterprises, major tech companies, expanding to broader enterprise

**Plain-Language Overview:**

SPIFFE (Secure Production Identity Framework For Everyone) solves the "how do services prove their identity to each other?" problem in cloud environments. Instead of hardcoding passwords or API keys, SPIFFE gives every service a cryptographic identity that automatically rotates and requires no manual secret management.

SPIRE (SPIFFE Runtime Environment) is the reference implementation that issues short-lived X.509 certificates (called SVIDs - SPIFFE Verifiable Identity Documents) to workloads through automated attestation. Achieved CNCF Graduation status in August 2022, indicating production maturity.

**For Architects:**

SPIFFE assigns unique SPIFFE IDs (URIs like `spiffe://trust-domain/workload/api`) to every workload. SPIRE automates identity issuance through multi-factor attestation (node + workload verification). Short-lived SVIDs (typically 1-hour) automatically rotate. The Workload API exposes identity to applications without secret management. Used for: Kubernetes service identity, service mesh security (Istio integration), Zero Trust architecture foundation, database authentication without passwords.

---

## Technical Details

### Specification

- **SPIFFE Specification:** Defines SPIFFE ID format, SVID structure, Workload API
- **SPIRE:** Reference implementation (production-ready)
- **Published:** 2016 (created), CNCF Graduated August 2022
- **Standards Body:** CNCF (Cloud Native Computing Foundation)
- **NIST Recognition:** SP 800-207A (Zero Trust for Cloud-Native) references SPIFFE

### Key Concepts

**SPIFFE ID:**
- URI format: `spiffe://trust-domain/path`
- Uniquely identifies workload
- Encoded in SVID (certificate)

**SVID (SPIFFE Verifiable Identity Document):**
- X.509 certificate or JWT format
- Short-lived (typically 1 hour, auto-rotates)
- Contains SPIFFE ID as Subject Alternative Name
- Issued by SPIRE server

**Workload API:**
- gRPC API exposing identity to applications
- Automatic SVID fetching and rotation
- No manual configuration needed by applications

**Attestation:**
- Node attestation: Verify platform identity
- Workload attestation: Verify specific service identity
- Multi-factor: Both node AND workload must prove legitimacy

---

## Industry Usage

### Cloud-Native / Tech Companies

- **Production Deployments:** Bloomberg, ByteDance, GitHub, HPE/Cray, Netflix, Pinterest, Square, Uber
- **Use Case:** Kubernetes service identity, service mesh (Istio native support since mid-2022)

### Zero Trust Architecture

- **NIST SP 800-207A:** References SPIFFE for service identity in Zero Trust cloud-native architectures
- **Government:** Federal agencies implementing Zero Trust (EO 14028)

### Comparison to Alternatives

**vs Manual Secrets:** Eliminates secret management, auto-rotation
**vs Service Accounts:** Cryptographic identity vs static credentials
**vs mTLS with Manual Certs:** Automated certificate lifecycle

---

## Open Source Implementations

**SPIRE (Reference Implementation):**
- Language: Go
- Production-ready, CNCF Graduated
- Active development and community

**Integrations:**
- **Istio:** Native SPIFFE support for service mesh
- **Envoy:** SPIFFE integration for sidecars
- **Kubernetes:** Workload identity for pods

---

## References

- **SPIFFE Website:** https://spiffe.io/
- **SPIRE GitHub:** https://github.com/spiffe/spire
- **NIST SP 800-207A:** Zero Trust for Cloud-Native Applications

---

**Last Updated:** 2025-10-19
**Contributors:** Matt
