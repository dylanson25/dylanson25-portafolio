/** @type {import("prettier").Config} */
export default {
	singleQuote: true,
	useTabs: true,
	tabWidth: 2,
	semi: true,
	bracketSpacing: true,
	arrowParens: 'always',
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
