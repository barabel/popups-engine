import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(process.cwd()),
      '@views': path.resolve(process.cwd(), 'src', 'views'),
      '@lib': path.resolve(process.cwd(), 'src', 'lib'),
    },
  },
});
