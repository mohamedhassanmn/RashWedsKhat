import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    watch: {
      chokidar: true
    },
    hmr: {
      overlay: false
    }
  },
  build: {
    target: 'esnext',
  },
});
