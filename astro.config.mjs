import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://ikumikimoto.github.io',
	base: '/astro-blog-test',
	integrations: [mdx(), sitemap()],
});
