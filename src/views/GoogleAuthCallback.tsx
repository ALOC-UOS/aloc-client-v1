import { useEffect } from 'react';

const GoogleAuthCallback = () => {
  useEffect(() => {
    const handleAuth = async () => {
      console.log('구글 로그인 콜백 처리 시작');
      try {
        // URL에서 액세스 토큰 추출
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get('accessToken');

        if (accessToken) {
          // accessToken을 localStorage에 저장
          try {
            localStorage.setItem('accessToken', accessToken);
          } catch (storageError) {
            console.error('localStorage 저장 오류:', storageError);
            throw new Error('토큰 저장에 실패했습니다.');
          }

          // 원래 창으로 로그인 성공 메시지 전달
          if (window.opener) {
            console.log(window.opener);
            window.opener.postMessage(
              {
                type: 'google-login-success',
                success: true,
              },
              window.location.origin
            );
          }
        } else {
          throw new Error('URL에서 액세스 토큰을 찾을 수 없습니다.');
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
        window.close();
      }
    };

    handleAuth();
  }, []);

  return <></>;
};

export default GoogleAuthCallback;
