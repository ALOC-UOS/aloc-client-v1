import { useState } from 'react';
import { UserInfo } from '@/types/user.types';
import { serverAPI } from '@/api/axios';
import { atom, useAtom } from 'jotai';
import useAuth from './useAuth';

export const userAtom = atom<UserInfo | null>(null);

const useUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useAtom(userAtom);
  const { isAuthenticated, logout: authLogout } = useAuth();

  // 사용자 정보 로드
  const loadUser = async () => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return false;
    }

    setIsLoading(true);
    try {
      const response = await serverAPI.get('/user');
      const userInfo = response.data.result;
      setUser({
        nickname: userInfo.name,
        coin: userInfo.coin,
        rank: userInfo.rank,
        baekjoonId: userInfo.baekjoonId,
        profileImageFileName: userInfo.profileImageFileName,
        profileBackgroundColor: userInfo.color,
        createdAt: userInfo.createdAt,
        todaySolved: userInfo.todaySolved,
        solvedCount: userInfo.solvedCount,
        consecutiveSolvedDays: userInfo.consecutiveSolvedDays,
      });
      return true;
    } catch (error) {
      console.error('사용자 정보 불러오기 실패:', error);
      setUser(null);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // 로그아웃 - useAuth의 logout을 호출하고 사용자 데이터 초기화
  const logout = async () => {
    await authLogout();
    setUser(null);
  };

  return {
    isLoading,
    user,
    setUser,
    loadUser,
    logout,
  };
};

export default useUser;
