import { useEffect } from 'react';

const GoogleAuthCallback = () => {
  useEffect(() => {
    // URL에서 인증 코드 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // 원래 창으로 코드 전달
      window.opener.postMessage({ type: 'google-login', code }, window.location.origin);
      // 창 닫기
      window.close();
    }
  }, []);

  return <div>구글 로그인 처리 중...</div>;
};

export default GoogleAuthCallback;
