/**
 * Sample utility functions.
 *
 * This file demonstrates the pattern for testable plugin code:
 * pure functions that don't depend on the Obsidian API.
 *
 * Put your logic here, test it thoroughly, then call it from main.ts.
 */

/**
 * Converts a string to kebab-case.
 * Useful for generating URL-friendly slugs from note titles.
 *
 * @example
 * toKebabCase("My Blog Post") // "my-blog-post"
 * toKebabCase("Hello   World") // "hello-world"
 */
export function toKebabCase(str: string): string {
	return str
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

/**
 * Merges saved settings with defaults, handling missing keys gracefully.
 * This is the standard Obsidian pattern, extracted for testability.
 *
 * @example
 * mergeSettings({ theme: 'dark' }, { theme: 'light', fontSize: 14 })
 * // { theme: 'dark', fontSize: 14 }
 */
export function mergeSettings<T extends Record<string, unknown>>(
	defaults: T,
	saved: Partial<T> | null | undefined
): T {
	return Object.assign({}, defaults, saved ?? {});
}

/**
 * Truncates a string to a maximum length, adding an ellipsis if needed.
 *
 * @example
 * truncate("Hello World", 5) // "Hello…"
 * truncate("Hi", 10) // "Hi"
 */
export function truncate(str: string, maxLength: number): string {
	if (maxLength < 1) return '';
	if (str.length <= maxLength) return str;
	return str.slice(0, maxLength) + '…';
}
