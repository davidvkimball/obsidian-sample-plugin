import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	test: {
		// Where to find test files
		include: ['tests/**/*.test.ts'],

		// Use jsdom so DOM APIs (document.createElement, etc.) work in tests
		environment: 'jsdom',
	},
	resolve: {
		alias: {
			// Redirect 'obsidian' imports to our lightweight mock.
			// This prevents import errors without needing a running Obsidian app.
			'obsidian': path.resolve(__dirname, 'tests/mocks/obsidian.ts'),
		},
	},
});
