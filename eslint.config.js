import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	{ ignores: ['dist/', '.netlify/', '.astro/', 'node_modules/'] },
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	},
	...eslintPluginAstro.configs.recommended,
];
