import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fernandotwe.github.io',
  base: '/ip-ai-test',
  integrations: [tailwind()],
});
