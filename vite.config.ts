import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion'],
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000, // Vite 서버 포트 설정
    host: 'localhost',
    strictPort: true,
    open: true, // 자동으로 브라우저 열기
  },
  root: '.', // 프로젝트 루트 설정 (기본값)
});
