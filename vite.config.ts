import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

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
      { find: '@components', replacement: 'src/components' },
      { find: '@store', replacement: 'src/store' },
      { find: '@hooks', replacement: 'src/hooks' },
      { find: '@pages', replacement: 'src/pages' },
      { find: '@services', replacement: 'src/services' },
      { find: '@models', replacement: 'src/models' },
    ],
  },
});
