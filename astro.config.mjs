// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import codeTheme from './src/styles/code-theme.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
	site: 'https://shawncruz.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Colors ported from the old site's Prism theme.
			theme: codeTheme,
		},
	},
});
