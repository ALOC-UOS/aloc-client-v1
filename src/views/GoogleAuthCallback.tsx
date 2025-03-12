import { useEffect } from 'react';
import axios from 'axios';

const GoogleAuthCallback = () => {
  useEffect(() => {
    const handleAuth = async () => {
      try {
        // 액세스 토큰 요청 (인증 코드 없이 직접 요청)
        const response = await axios.post('/auth/refresh');

        if (response.data && response.data.accessToken) {
          // accessToken을 localStorage에 저장
          localStorage.setItem('accessToken', response.data.accessToken);

          // 원래 창으로 로그인 성공 메시지 전달
          window.opener.postMessage(
            {
              type: 'google-login-success',
              success: true,
            },
            window.location.origin
          );
        } else {
          throw new Error('액세스 토큰을 받지 못했습니다.');
        }
      } catch (err) {
        console.error('구글 로그인 처리 중 오류:', err);

        // 오류 발생 시 원래 창에 실패 메시지 전달
        if (window.opener) {
          window.opener.postMessage(
            {
              type: 'google-login-error',
              success: false,
              error: err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다',
            },
            window.location.origin
          );
        }
      } finally {
        // 창 닫기
        setTimeout(() => {
          window.close();
        }, 1000);
      }
    };

    handleAuth();
  }, []);

  return <></>;
};

export default GoogleAuthCallback;
