# Testing Your Plugin

This project includes [Vitest](https://vitest.dev/) for unit testing. The test infrastructure is ready to go — just add your tests.

## Quick Start

```bash
pnpm test          # run all tests once
pnpm test:watch    # re-run tests on file changes
```

## How It Works

Obsidian's API isn't available in Node.js, so a lightweight mock at `tests/mocks/obsidian.ts` provides empty stubs for classes like `Plugin`, `Modal`, `Notice`, `Setting`, `TFile`, etc. These prevent import errors — they don't simulate Obsidian behavior.

The key principle: **test your logic, not Obsidian's API.**

## The Pattern

### 1. Extract pure functions into utility files

```typescript
// src/utils.ts — pure logic, no Obsidian imports needed
export function toKebabCase(str: string): string {
  return str.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
}

export function mergeSettings<T extends Record<string, unknown>>(
  defaults: T,
  saved: Partial<T> | null | undefined
): T {
  return Object.assign({}, defaults, saved ?? {});
}
```

### 2. Write tests for those functions

```typescript
// tests/utils.test.ts
import { describe, it, expect } from 'vitest';
import { toKebabCase, mergeSettings } from '../src/utils';

describe('toKebabCase', () => {
  it('converts basic strings', () => {
    expect(toKebabCase('My Blog Post')).toBe('my-blog-post');
  });

  it('handles multiple spaces', () => {
    expect(toKebabCase('Hello   World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(toKebabCase('Hello, World!')).toBe('hello-world');
  });
});

describe('mergeSettings', () => {
  const defaults = { theme: 'light', fontSize: 14 };

  it('returns defaults when saved is null', () => {
    expect(mergeSettings(defaults, null)).toEqual(defaults);
  });

  it('overrides with saved values', () => {
    expect(mergeSettings(defaults, { theme: 'dark' })).toEqual({
      theme: 'dark', fontSize: 14,
    });
  });
});
```

### 3. Use the utilities in your plugin

```typescript
// src/main.ts
import { Plugin } from 'obsidian';
import { toKebabCase } from './utils';

export default class MyPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'generate-slug',
      name: 'Generate slug from title',
      callback: () => {
        const file = this.app.workspace.getActiveFile();
        if (file) {
          const slug = toKebabCase(file.basename);
          // Use the slug...
        }
      }
    });
  }
}
```

## What to Test

Focus on logic that doesn't depend on Obsidian's runtime:

- **Parsers** — natural language parsing, frontmatter extraction, Markdown processing
- **Formatters** — string formatting, slug generation, date formatting
- **Validators** — input validation, settings validation, path checking
- **Transformers** — data conversion, settings migration, content processing
- **Matchers** — pattern matching, path globbing, filter logic

## What NOT to Test

Don't try to test Obsidian API interactions directly:

- DOM manipulation via Obsidian's API
- Vault read/write operations
- Workspace layout changes
- Event handler registration

Test these manually in Obsidian. Keep your testable logic in separate utility files.

## Adding to the Mock

If your code imports something from `'obsidian'` that isn't in the mock yet, add a stub to `tests/mocks/obsidian.ts`. Keep stubs minimal — just enough to prevent import errors.

## File Structure

```
tests/
  mocks/
    obsidian.ts      ← Obsidian API stubs (add to as needed)
  README.md          ← This file
  your-utils.test.ts ← Your tests go here
```
