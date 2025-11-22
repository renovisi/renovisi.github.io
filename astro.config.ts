import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';
import shiki from './astro.plugins/shiki.ts';
import tableWrapper from './astro.plugins/table-wrapper.ts';

export default defineConfig({
    // Site metadata.
    site: "https://renovisi.com",
    outDir: './dist',

    // Set 'enable' to 'false' to disable Astro dev toolbar.
    devToolbar: {
        enabled: false,
    },

    // Markdown configuration.
    markdown: { 
        remarkPlugins: [ tableWrapper ],
        shikiConfig: shiki,
    },
    
    // Integrations and Vite plugins.
    integrations: [alpinejs({ entrypoint: '/src/assets/js/alpine.ts' })],
    vite: {
        plugins: [tailwindcss()],
    },
});