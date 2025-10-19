# [Standard Name] Template

<!--
This is the template for documenting IAM standards.
Copy this file to docs/standards/[standard-name].md and fill in all sections.
See METADATA_SCHEMA.md for field definitions and CONTENT_GUIDE.md for writing guidelines.
-->

---
standard: "[Full Standard Name]"
specification: "[RFC Number or Spec ID]"
published: "YYYY-MM"
standards_body: "[IETF|W3C|OpenID Foundation|OASIS|FIDO Alliance|NIST|CNCF|ISO|Other]"
status: "[Current Version/Status]"
adoption_level: "[Universal|Widely Implemented|Industry Standard|Growing|Emerging|Legacy/Declining|Deprecated|Experimental]"
use_cases:
  - "[Primary use case 1]"
  - "[Primary use case 2]"
  - "[Primary use case 3]"
industries:
  - "[All|Financial Services|Healthcare|Government|Higher Education|Enterprise|Consumer|etc.]"
related_standards:
  - "[Related Standard 1]"
  - "[Related Standard 2]"
supersedes: []  # Optional: standards this replaces
deprecated_by: ""  # Optional: if deprecated, what replaces it
---

# [Standard Name]

## Summary

**Quick Facts:**
- **Purpose:** [One sentence: what problem does this solve?]
- **Adoption:** [Adoption level with context]
- **Use Cases:** [Primary use cases in plain language]
- **Industry Focus:** [Key industries using this]

**Plain-Language Overview:**

[2-3 paragraphs explaining the standard in non-technical terms suitable for executives and compliance managers. Answer: What is it? Why does it matter? Who uses it?]

**For Developers:**

[1-2 paragraphs with technical context. What does implementation involve? What are the key concepts?]

---

## Technical Details

### Specification

- **Specification:** [Full spec reference with version]
- **Published:** [Month Year]
- **Standards Body:** [Organization name]
- **Current Status:** [RFC status, W3C Recommendation, Final, Draft, etc.]
- **Latest Version:** [Version number and date]

### Key Concepts

[Explain the core technical concepts, architecture, or mechanisms:]

**[Concept 1: e.g., Authorization Code Flow]**
- [Description]
- [When to use]

**[Concept 2: e.g., Tokens]**
- [Description]
- [Token types and purposes]

### Security Considerations

**What Makes It Secure:**
- [Security feature 1]
- [Security feature 2]

**Known Vulnerabilities & Mitigations:**
- [Vulnerability 1]: [Mitigation approach]
- [Vulnerability 2]: [Mitigation approach]

**Security Extensions:**
- [Extension 1]: [Purpose]
- [Extension 2]: [Purpose]

---

## Relationships

### Depends On

[Standards this relies upon, if any:]
- **[Standard Name]**: [How it's used]

### Complements

[Standards that work alongside this one:]
- **[Standard Name]**: [How they work together]

### Extensions

[Standards that extend or build upon this:]
- **[Extension Standard]**: [What it adds]

### Supersedes

[If this replaces older standards:]
- **[Old Standard]**: [Migration notes]

### Technology Stack Example

**Typical Implementation Stack:**
```
[Show how this standard fits in a complete stack]
Example: OAuth 2.0 + OIDC + PKCE + DPoP (for financial services)
```

---

## Industry Usage

### Financial Services
[Usage notes, compliance requirements (PSD2, etc.), specific profiles]

### Healthcare
[Usage notes, compliance requirements (HIPAA, 21st Century Cures), specific profiles]

### Government
[Usage notes, compliance requirements (NIST 800-63, FedRAMP), specific profiles]

### [Other Industries as Applicable]
[Usage patterns, requirements]

### Compliance Mapping

| Regulation/Framework | Requirement Level | Notes |
|----------------------|-------------------|-------|
| NIST 800-63 AAL2 | Required | [Context] |
| PSD2/Open Banking | Required | [Context] |
| HIPAA | Recommended | [Context] |
| GDPR | Applicable | [Context] |

---

## Open Source Implementations

### Production-Ready

| Project | Language/Platform | Setup Complexity | Production Readiness | Notes |
|---------|-------------------|------------------|----------------------|-------|
| [Project Name] | [Tech stack] | Low/Medium/High | ⭐⭐⭐⭐⭐ | [Key features] |
| [Project Name] | [Tech stack] | Low/Medium/High | ⭐⭐⭐⭐ | [Key features] |

**Setup Complexity Guide:**
- **Low:** 2-4 hours, minimal prerequisites
- **Medium:** 8-40 hours, requires infrastructure (databases, certificates)
- **High:** 40+ hours, enterprise setup, specialized expertise needed

### Testing & Development Tools

- **[Tool Name]**: [Purpose] - [URL]
- **[Tool Name]**: [Purpose] - [URL]

### Code Examples & Tutorials

- [Tutorial/Example 1]: [URL]
- [Tutorial/Example 2]: [URL]

---

## Migration Guides

[If applicable, link to migration guides:]
- [Migrating from X to this standard]
- [Migrating from this to newer alternative]

---

## Best Practices

### Do's ✅

- [Best practice 1]
- [Best practice 2]
- [Best practice 3]

### Don'ts ❌

- [Anti-pattern 1 with explanation]
- [Anti-pattern 2 with explanation]
- [Anti-pattern 3 with explanation]

### Security Checklist

- [ ] [Security requirement 1]
- [ ] [Security requirement 2]
- [ ] [Security requirement 3]

---

## References

### Official Specifications

- **Primary Spec:** [RFC/W3C/OASIS link]
- **Related Specs:** [Links to related official documents]

### Standards Body Resources

- **[Standards Body] Homepage:** [URL]
- **Specification Page:** [URL]
- **Working Group:** [URL if applicable]

### Community Resources

- **Community Site:** [URL if exists]
- **Discussion Forums:** [URL]
- **Implementation Guide:** [URL]

### Historical Context

- **Predecessor Standards:** [If applicable]
- **Evolution Notes:** [Why this standard was created, what problems it solved]

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| [Version] | [Date] | [Major changes] |

---

**Last Updated:** [YYYY-MM-DD]
**Accuracy Confidence:** [To be implemented in Phase 2]
**Contributors:** [Names or GitHub handles]
