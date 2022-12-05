import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const path = require('path')

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    watch: {
      usePolling: true
    },
    hmr: {
      overlay: false
    }
  },
  build: {
    target: 'esnext',
  },
});
