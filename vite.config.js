import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Optional: Define custom environment variables or global constants
  define: {
    'process.env': {}, // Ensure that 'process.env' doesn't throw errors in the frontend
  },
  server: {
    port: 3000, // Set a custom port for your dev server
  },
});
