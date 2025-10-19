#!/usr/bin/env tsx
/**
 * Validate Standard Pages Metadata
 *
 * Checks all standard pages in docs/standards/ have required metadata fields
 * and conform to the metadata schema specification.
 *
 * Usage: npm run validate-metadata
 * Exits with code 1 if validation fails (for CI integration)
 */

import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

// Define required fields and allowed values
const REQUIRED_FIELDS = [
  'standard',
  'specification',
  'published',
  'standards_body',
  'status',
  'adoption_level',
  'use_cases',
  'industries',
  'related_standards'
];

const ALLOWED_STANDARDS_BODIES = [
  'IETF',
  'W3C',
  'OpenID Foundation',
  'OASIS',
  'FIDO Alliance',
  'NIST',
  'CNCF',
  'ISO',
  'ITU',
  'Kantara',
  'DIF',
  'Other'
];

const ALLOWED_ADOPTION_LEVELS = [
  'Universal',
  'Widely Implemented',
  'Industry Standard',
  'Growing',
  'Emerging',
  'Legacy/Declining',
  'Deprecated',
  'Experimental'
];

interface ValidationError {
  file: string;
  errors: string[];
}

function validateStandardPage(filePath: string): string[] {
  const errors: string[] = [];

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter } = matter(content);

    // Check required fields
    for (const field of REQUIRED_FIELDS) {
      if (!(field in frontMatter) || frontMatter[field] === undefined || frontMatter[field] === null) {
        errors.push(`Missing required field: ${field}`);
      }
    }

    // Validate standards_body enum
    if (frontMatter.standards_body && !ALLOWED_STANDARDS_BODIES.includes(frontMatter.standards_body)) {
      errors.push(`Invalid standards_body: "${frontMatter.standards_body}". Must be one of: ${ALLOWED_STANDARDS_BODIES.join(', ')}`);
    }

    // Validate adoption_level enum
    if (frontMatter.adoption_level && !ALLOWED_ADOPTION_LEVELS.includes(frontMatter.adoption_level)) {
      errors.push(`Invalid adoption_level: "${frontMatter.adoption_level}". Must be one of: ${ALLOWED_ADOPTION_LEVELS.join(', ')}`);
    }

    // Validate date format (YYYY-MM)
    if (frontMatter.published && !/^\d{4}-\d{2}$/.test(frontMatter.published)) {
      errors.push(`Invalid published date format: "${frontMatter.published}". Expected YYYY-MM format.`);
    }

    // Validate arrays
    if (frontMatter.use_cases && !Array.isArray(frontMatter.use_cases)) {
      errors.push('use_cases must be an array');
    }
    if (frontMatter.industries && !Array.isArray(frontMatter.industries)) {
      errors.push('industries must be an array');
    }
    if (frontMatter.related_standards && !Array.isArray(frontMatter.related_standards)) {
      errors.push('related_standards must be an array');
    }

    // Validate minimum array lengths
    if (Array.isArray(frontMatter.use_cases) && frontMatter.use_cases.length === 0) {
      errors.push('use_cases array must have at least 1 item');
    }
    if (Array.isArray(frontMatter.industries) && frontMatter.industries.length === 0) {
      errors.push('industries array must have at least 1 item');
    }

  } catch (error) {
    errors.push(`Failed to parse file: ${error instanceof Error ? error.message : String(error)}`);
  }

  return errors;
}

function findStandardPages(standardsDir: string): string[] {
  if (!fs.existsSync(standardsDir)) {
    return [];
  }

  const files = fs.readdirSync(standardsDir);
  return files
    .filter(file => (file.endsWith('.md') || file.endsWith('.mdx')) && file !== 'index.md')
    .map(file => path.join(standardsDir, file));
}

function main() {
  const standardsDir = path.join(__dirname, '../docs/standards');
  const standardPages = findStandardPages(standardsDir);

  if (standardPages.length === 0) {
    console.log('✅ No standard pages found yet (expected for early development)');
    process.exit(0);
  }

  const validationErrors: ValidationError[] = [];

  for (const filePath of standardPages) {
    const errors = validateStandardPage(filePath);
    if (errors.length > 0) {
      validationErrors.push({
        file: path.relative(process.cwd(), filePath),
        errors
      });
    }
  }

  if (validationErrors.length === 0) {
    console.log(`✅ All ${standardPages.length} standard pages validated successfully`);
    process.exit(0);
  } else {
    console.error(`❌ Validation failed for ${validationErrors.length} file(s):\n`);
    for (const {file, errors} of validationErrors) {
      console.error(`\n${file}:`);
      for (const error of errors) {
        console.error(`  - ${error}`);
      }
    }
    console.error(`\nFix the above errors and run validation again.`);
    process.exit(1);
  }
}

main();
