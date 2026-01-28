/**
 * Example test file.
 *
 * Tests pure utility functions that don't need Obsidian's API.
 * This is the pattern to follow for all your plugins:
 *
 * 1. Extract logic into utility functions (src/utils.ts, src/parser.ts, etc.)
 * 2. Write tests for those functions (tests/utils.test.ts, etc.)
 * 3. Import and use the utilities in your plugin code (src/main.ts)
 *
 * Run tests:
 *   pnpm test          — run once
 *   pnpm test:watch    — re-run on file changes
 */

import { describe, it, expect } from 'vitest';
import { toKebabCase, mergeSettings, truncate } from '../src/utils';

// --- toKebabCase ---

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

	it('handles leading/trailing whitespace', () => {
		expect(toKebabCase('  padded string  ')).toBe('padded-string');
	});

	it('handles already-kebab strings', () => {
		expect(toKebabCase('already-kebab')).toBe('already-kebab');
	});

	it('returns empty string for empty input', () => {
		expect(toKebabCase('')).toBe('');
	});

	it('handles numbers', () => {
		expect(toKebabCase('Chapter 1 Introduction')).toBe('chapter-1-introduction');
	});
});

// --- mergeSettings ---

describe('mergeSettings', () => {
	const defaults = {
		theme: 'light',
		fontSize: 14,
		showSidebar: true,
	};

	it('returns defaults when saved is null', () => {
		expect(mergeSettings(defaults, null)).toEqual(defaults);
	});

	it('returns defaults when saved is undefined', () => {
		expect(mergeSettings(defaults, undefined)).toEqual(defaults);
	});

	it('overrides defaults with saved values', () => {
		const saved = { theme: 'dark' };
		expect(mergeSettings(defaults, saved)).toEqual({
			theme: 'dark',
			fontSize: 14,
			showSidebar: true,
		});
	});

	it('preserves saved values not in defaults', () => {
		// This matches Object.assign behavior — extra keys come through
		const saved = { theme: 'dark', customProp: 'extra' } as any;
		const result = mergeSettings(defaults, saved);
		expect(result.theme).toBe('dark');
		expect((result as any).customProp).toBe('extra');
	});

	it('does not mutate the defaults object', () => {
		const originalDefaults = { ...defaults };
		mergeSettings(defaults, { theme: 'dark' });
		expect(defaults).toEqual(originalDefaults);
	});
});

// --- truncate ---

describe('truncate', () => {
	it('returns the full string when under max length', () => {
		expect(truncate('Hello', 10)).toBe('Hello');
	});

	it('truncates and adds ellipsis when over max length', () => {
		expect(truncate('Hello World', 5)).toBe('Hello…');
	});

	it('returns empty string when maxLength is 0', () => {
		expect(truncate('Hello', 0)).toBe('');
	});

	it('handles exact length', () => {
		expect(truncate('Hello', 5)).toBe('Hello');
	});

	it('handles empty string', () => {
		expect(truncate('', 5)).toBe('');
	});
});
