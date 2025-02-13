import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion'],
      },
    }),
  ],
  server: {
    port: 3000, // Vite 서버 포트 설정
    host: 'localhost',
    strictPort: true,
    open: true, // 자동으로 브라우저 열기
  },
  root: '.', // 프로젝트 루트 설정 (기본값)
});
