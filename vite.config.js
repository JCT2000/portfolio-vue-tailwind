import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    assetsInclude: '**/*.+(png|jpg|jpeg|gif|webp|svg|ico)',
  },
  // other configuration options...
});
