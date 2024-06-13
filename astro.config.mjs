import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://fernandotwe.github.io',
  base: '/ip-ai-test',
  integrations: [tailwind()],
});
