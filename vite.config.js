import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  build: {
    rollupOptions: {
      input: 'public/index.html',
    },
  },
  base: '/portfolio-vue-tailwind/',
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
