import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import solidJs from '@astrojs/solid-js';
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    solidJs(),
    sitemap()
  ],
  site: 'https://wesngu28.com/',
  adapter: vercel(),
  server: {
    port: 3000
  },
  experimental: {
    contentCollections: true
  }
});