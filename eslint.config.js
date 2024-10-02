export default [
	{
		parser: '@typescript-eslint/parser',
		files: ['**/*.{js,jsx,ts,tsx,astro}'],
		extends: [
			'plugin:@typescript-eslint/recommended',
			'plugin:astro/recommended',
		],
		overrides: [
			{
				files: ['*.astro'],
				parser: 'astro-eslint-parser',
				parserOptions: {
					parser: '@typescript-eslint/parser',
					extraFileExtensions: ['.astro'],
				},
			},
		],
		rules: {},
	},
];
