import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://paoloresteghini.github.io',
  base: process.env.ASTRO_BASE || '/simply-sun-kiss-glow',
  integrations: [tailwind()],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
