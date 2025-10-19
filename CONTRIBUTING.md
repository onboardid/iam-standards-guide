# Contributing to IAM Standards Guide

Thank you for your interest in contributing to the IAM Standards Guide!

## Development Workflow

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR-USERNAME/iam-standards-guide.git
cd iam-standards-guide
npm install
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 3. Make Changes

- Follow existing code style and conventions
- Add/update documentation as needed
- Test your changes locally (`npm start`, `npm run build`)

### 4. Commit Your Changes

We use conventional commit messages:

```bash
git commit -m "feat: add OAuth 2.1 standard documentation"
git commit -m "fix: correct SAML 2.0 adoption level"
git commit -m "docs: update README installation instructions"
```

**Commit Message Format:**
- `feat:` New feature or content
- `fix:` Bug fix or correction
- `docs:` Documentation changes
- `style:` Formatting, missing semicolons, etc.
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a pull request on GitHub with:
- Clear description of changes
- Reference to related issues (if applicable)
- Screenshots for UI changes

## Code Style Guidelines

### TypeScript/React

- Use TypeScript for all new code
- Follow existing component patterns
- Use functional components with hooks
- Keep components focused and single-purpose

### Markdown Content

- Use sentence case for headings
- Include metadata front matter for all standard pages
- Cite sources for all claims
- Use tables for comparison data
- Keep paragraphs concise

### File Naming

- Standard pages: `lowercase-with-dashes.md`
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`

## Pull Request Process

1. **Automated Checks:** All PRs must pass:
   - TypeScript compilation
   - Build process
   - Link checking
   - Linting

2. **Preview Deployment:** Automatic preview URL generated for every PR

3. **Review:** Maintainers will review your PR and may request changes

4. **Merge:** Once approved, your PR will be merged to `main` and deployed automatically

## Content Guidelines

### Adding Standards Documentation

1. Use the standard page template (to be created in Story 1.2)
2. Include all required metadata fields
3. Provide plain-language summary for non-technical readers
4. Map relationships to other standards
5. Cite official specifications (RFCs, W3C Recommendations, etc.)

### Accuracy Requirements

- Cite primary sources (IETF RFCs, W3C specs, official documentation)
- Include specification version numbers and publication dates
- Mark adoption levels objectively (Universal, Widespread, Emerging, etc.)
- Update "Last Modified" dates when editing content

## Testing

### Local Testing

```bash
# Build the site
npm run build

# Serve built site locally
npm run serve

# Run type checking
npm run typecheck
```

### What to Test

- All links work (internal and external)
- Pages render correctly on mobile and desktop
- Search functionality works (if implemented)
- No console errors or warnings
- Accessibility (keyboard navigation, screen readers)

## Getting Help

- **Questions:** Open a GitHub issue with the "question" label
- **Bugs:** Open a GitHub issue with detailed reproduction steps
- **Feature Requests:** Open a GitHub issue describing the use case

## Code of Conduct

- Be respectful and professional
- Focus on constructive feedback
- Welcome newcomers and help them learn
- Prioritize accuracy and quality over speed

Thank you for contributing to making IAM standards more accessible to everyone!
