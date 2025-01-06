import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure relative paths for Electron
  build: {
    outDir: '../', // Build files into a directory above the current one
  },
});
