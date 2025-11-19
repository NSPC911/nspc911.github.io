// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nspc911.github.io",
  // Only use base path in production (GitHub Pages)
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      langs: [],
      wrap: true,
    },
  },
});
