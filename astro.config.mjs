// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain once it's set up on Netlify.
  site: 'https://example.netlify.app',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
