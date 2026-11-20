// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

import { VitePWA } from 'vite-plugin-pwa';
import { seoConfig, manifest } from './src/utils/seoConfig';

import vue from '@astrojs/vue';

const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: 'always',
	},
	compressHTML: true,
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
	site: seoConfig.baseURL,
	integrations: [sitemap(), vue({ devtools: true })],
	output: 'server',
	// The Netlify dev emulation serves project files as static assets and breaks
	// Vue island hydration in `astro dev`, so the adapter is only used for builds.
	adapter: isDev ? undefined : netlify(),
	vite: {
		plugins: [
			tailwindcss(),
			VitePWA({
				registerType: 'autoUpdate',
				manifest,
				workbox: {
					globDirectory: 'dist',
					globPatterns: ['**/*.{html,js,css,woff,woff2,ttf,eot,ico}'],
					runtimeCaching: [
						{
							urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
							handler: 'CacheFirst',
							options: {
								cacheName: 'images',
								expiration: {
									maxEntries: 100,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
						{
							urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
							handler: 'CacheFirst',
							options: {
								cacheName: 'fonts',
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
					],
					navigateFallback: null,
				},
			}),
		],
	},
});
