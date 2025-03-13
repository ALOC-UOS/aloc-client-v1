import { useState } from 'react';
import { UserInfo } from '@/types/user.types';
import { serverAPI } from '@/api/axios';
import { atom, useAtom } from 'jotai';

export const userAtom = atom<UserInfo | null>(null);

const useUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useAtom(userAtom);

  // 토큰 확인 및 사용자 정보 로드
  const loadUser = async () => {
    setIsLoading(true);
    try {
      const response = await serverAPI.get('/user');
      const userInfo = response.data.result;
      setUser({
        id: userInfo.id,
        nickname: userInfo.username,
        coin: userInfo.coin,
        rank: userInfo.rank,
        baekjoonId: userInfo.baekjoonId,
        profileImageFileName: userInfo.profileImageFileName,
        profileBackgroundColor: {
          name: userInfo.profileColor,
          type: userInfo.type,
          color1: userInfo.color1,
          color2: userInfo.color2,
          color3: userInfo.color3,
          color4: userInfo.color4,
          color5: userInfo.color5,
          degree: userInfo.degree,
        },
        createdAt: userInfo.createdAt,
        todaySolved: userInfo.todaySolved,
        solvedCount: userInfo.solvedCount,
        consecutiveSolvedDays: userInfo.consecutiveSolvedDays,
      });
    } catch (error) {
      console.error('사용자 정보 불러오기 실패:', error);
      setUser(null);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const checkLoginStatus = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      await loadUser();
    } catch (error) {
      console.error('토큰으로 사용자 정보 조회 실패:', error);
      // 토큰이 유효하지 않은 경우 로그아웃 처리
      logout();
    }
  };

  // 로그아웃
  const logout = () => {
    localStorage.removeItem('accessToken');
    serverAPI.post('/auth/logout');
    setUser(null);
  };

  return {
    isLoading,
    user,
    isLoggedIn: user !== null,
    loadUser,
    logout,
    checkLoginStatus,
  };
};

export default useUser;
