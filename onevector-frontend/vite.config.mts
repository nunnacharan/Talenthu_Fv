import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/', // Ensure assets are resolved correctly
  publicDir: 'public', // Ensures manifest.json and static assets are copied
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    open: true,
    port: 3001, // Frontend runs on port 3001
    proxy: {
      '/api': {
        target: 'https://5q5faxzgb7.execute-api.ap-south-1.amazonaws.com', // Update backend API endpoint
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    outDir: 'build', // Ensures output goes into build/
  },
});
