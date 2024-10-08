// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

import { VitePWA } from 'vite-plugin-pwa';
import { seoConfig, manifest } from './src/utils/seoConfig';

import vue from '@astrojs/vue';

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
    integrations: [tailwind(), sitemap(), vue()],
    output: 'server',
    adapter: netlify(),
    vite: {
        build: {
            cssMinify: 'lightningcss',
        },
        plugins: [
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