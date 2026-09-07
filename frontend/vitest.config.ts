import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  css: { postcss: { plugins: [] } },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['src/__tests__/**/*.{test,spec}.{ts,tsx}', 'src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**'],
      exclude: [
        'src/**/*.{test,spec}.{ts,tsx}',
        'src/**/__tests__/**',
      ],
      all: true,
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 80,
        lines: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
