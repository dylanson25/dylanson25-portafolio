import type { ManifestOptions } from 'vite-plugin-pwa';

export const seoConfig = {
	baseURL: 'https://dylanson25.dev/',
	description:
		'Currently my page is under development, but you can come and explore my social networks to get to know me a little better.',
	type: 'website',
	image: {
		url: 'https://dylanson25dev.netlify.app/.netlify/images?url=_astro%2Fdylan.BPEYV6fX.jpeg&w=300',
		alt: 'Dylan Profile image',
		width: 300,
		height: 300,
	},
	siteName: 'Dylan V. T | Portafolio',
	twitter: {
		card: 'summary_large_image',
	},
};

export const manifest: Partial<ManifestOptions> = {
	name: 'Dylan V. T | Portafolio',
	short_name: 'Dylanson25',
	description:
		'Developer Portfolio, where you can find information about my background and skills.',
	theme_color: '#0369a1',
	background_color: '#0369a1',
	display: 'fullscreen',
	icons: [
		{
			src: '/favicon.svg',
			type: 'svg',
		},
	],
};
