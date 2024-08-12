import { defineConfig, envField } from 'astro/config';
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
  },
  experimental: {
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
    }
  }
});