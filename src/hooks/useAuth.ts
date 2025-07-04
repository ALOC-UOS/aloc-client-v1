import { serverAPI } from '@/lib/api/axios';
import { atom, useAtom } from 'jotai';
import axios from 'axios';

const authAtom = atom<boolean>(!!localStorage.getItem('accessToken'));

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);

  // 토큰 갱신
  const refreshToken = async (): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
        {},
        { withCredentials: true }
      );

      if (response.data && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      clearTokens();
      return false;
    }
  };

  // 토큰 삭제
  const clearTokens = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  // 로그아웃
  const logout = async () => {
    try {
      await serverAPI.post('/auth/logout');
    } catch (error) {
      console.error('로그아웃 요청 실패:', error);
    } finally {
      clearTokens();
      window.location.href = '/';
    }
  };

  // 소셜 로그인 URL 생성
  const getGoogleLoginUrl = () => {
    return import.meta.env.VITE_GOOGLE_LOGIN_URL;
  };

  return {
    isAuthenticated,
    setIsAuthenticated,
    refreshToken,
    logout,
    getGoogleLoginUrl,
  };
};

export default useAuth;
