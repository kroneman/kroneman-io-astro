import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://kroneman.io',
  output: 'server',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  adapter: vercel({
    analytics: true
  }),
});
