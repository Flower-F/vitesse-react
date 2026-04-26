import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vitest/config';

const AliasConfig = {
  '~/': `${path.resolve(__dirname, 'src')}/`,
};

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: AliasConfig,
    },
    plugins: [
      react(),
      ...(mode === 'production'
        ? [
            legacy({
              targets: ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'],
            }),
            visualizer({
              open: false,
            }),
          ]
        : []),
    ],
    test: {
      environment: 'happy-dom',
      alias: AliasConfig,
    },
    ...(mode === 'production'
      ? {
          build: {
            // Vite 8 默认使用 Rolldown (Rust)，无需配置 minify
            cssTarget: 'chrome61',
            modulePreload: {
              polyfill: true,
            },
            rolldownOptions: {
              output: {
                manualChunks(id: string) {
                  if (id.includes('react')) {
                    return 'react-vendor';
                  }
                },
              },
            },
          },
        }
      : {}),
  };
});
