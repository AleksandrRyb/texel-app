import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const customResolver = (source, importer, options) => {
  return source + '/index.ts/';
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@hoc', replacement: 'src/hoc' },
      {
        find: '@components',
        replacement: 'src/components',
        customResolver,
      },
      { find: '@constants', replacement: 'src/constants' },
      { find: '@store', replacement: 'src/store' },
      { find: '@hooks', replacement: 'src/hooks' },
      {
        find: '@pages',
        replacement: 'src/pages',
        customResolver,
      },
      { find: '@services', replacement: 'src/services' },
      { find: '@models', replacement: 'src/models' },
    ],
  },
});
