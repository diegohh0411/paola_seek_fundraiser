// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://seek25.vercel.app',

  integrations: [mdx(), sitemap(), tailwind()],

  i18n: {
      defaultLocale: 'es-MX',
      locales: ['es-MX', 'en']
  },

  output: 'hybrid',
  adapter: vercel()
});
