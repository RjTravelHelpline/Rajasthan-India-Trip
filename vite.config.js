import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'public_html', // Change 'custom-build' to your desired directory name
  },
  plugins: [react()],
});
