import { defineConfig, type LibraryFormats } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import nodeUrl from 'node:url';
import dts from 'unplugin-dts/vite';

const __dirname = path.dirname(nodeUrl.fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      bundleTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'popups-engine',
      fileName: 'popups-engine',
      formats: ['es'] as LibraryFormats[],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(process.cwd()),
      '@views': path.resolve(process.cwd(), 'src', 'views'),
      '@lib': path.resolve(process.cwd(), 'src', 'lib'),
    },
  },
});
