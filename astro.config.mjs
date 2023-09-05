import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import prefetch from '@astrojs/prefetch';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    tailwind(),
    solidJs(),
    sitemap(),
    compress({
			css: true,
			html: true,
			img: false,
			js: true,
			svg: true,
		}),
    prefetch()
  ],
  site: 'https://wesngu28.com/',
  adapter: vercel(),
  server: {
    port: 3000
  }
});