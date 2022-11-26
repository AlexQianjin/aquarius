import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
    proxy: {
      '/api': 'http://localhost:1233'
    }
  },
  preview: {
    port: 8080
  },
  plugins: [react()]
});
