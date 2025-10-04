import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = '/Capstone-Project/';

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
