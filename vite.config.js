import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  base: "/portfolio-vue-tailwind/",
  assetsInclude: ["**/*.jpg", "**/*.png"],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
