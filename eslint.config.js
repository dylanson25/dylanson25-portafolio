import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import astroEslintParser from 'astro-eslint-parser';

export default [
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx,astro}'],
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				extraFileExtensions: ['.astro'],
			},
		},

		rules: {},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroEslintParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		rules: {},
	},
];
