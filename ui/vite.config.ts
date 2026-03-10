import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // 이 설정이 있어야 @/가 src/ 폴더로 연결됨
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});