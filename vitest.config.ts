import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    include: ['src/**/*.test.tsx'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.d.ts',
        '**/setup.ts',
      ],
    },
  },
});