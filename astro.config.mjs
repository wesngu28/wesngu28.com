import { defineConfig, envField } from 'astro/config';
// import solidJs from '@astrojs/solid-js';
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

let adapter = vercel();

import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [sitemap(), playformCompress(), solidJs()],
  site: 'https://wesngu28.com/',
  adapter: vercel(),
  prefetch: true,

  server: {
    port: 3000
  },

  env: {
      schema: {
          PUBLIC_URL: envField.string({ context: "client", access: "public", default: "https://wesngu28.com" }),
          SPOTIFY_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
          SPOTIFY_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
          SPOTIFY_REFRESH_TOKEN: envField.string({ context: "server", access: "secret" }),
          LASTFM_API_KEY: envField.string({ context: "server", access: "secret" }),
          GITHUB_PERSONAL_TOKEN: envField.string({ context: "server", access: "secret" }),
          STEAM_KEY: envField.string({ context: "server", access: "secret" }),
          STEAM_ID: envField.string({ context: "server", access: "secret" })
      }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});