import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import prefetch from '@astrojs/prefetch';


// https://astro.build/config
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), solidJs(), sitemap(), prefetch(), playformCompress()],
  site: 'https://wesngu28.com/',
  adapter: vercel(),
  server: {
    port: 3000
  }
});