import { useMemo, useState, useEffect } from 'react';
import { UserInfo } from '@/types/user.types';
import { serverAPI } from '@/api/axios';
import { atom, useAtom } from 'jotai';
import useUserCourses from './useUserCourses';
import useAuth from './useAuth';

export const userAtom = atom<UserInfo | null>(null);

const useUser = () => {
  const { setUserCourses } = useUserCourses();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [user, setUser] = useAtom(userAtom);
  const { isAuthenticated, refreshToken, logout: authLogout } = useAuth();
  const isLoggedIn = useMemo(() => user !== null, [user]);

  // 사용자 정보 로드
  const loadUser = async () => {
    if (!isAuthenticated) {
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

  // 로그인 상태 확인 (App.tsx에서 호출)
  const checkLoginStatus = async () => {
    if (!isAuthenticated) {
      setUser(null);
      await refreshToken();
      return;
    }
    await loadUser();
  };

  // useAuth의 인증 상태가 변경될 때 사용자 정보 갱신
  useEffect(() => {
    checkLoginStatus();
  }, [isAuthenticated]);

  // 로그아웃 - useAuth의 logout을 호출하고 사용자 데이터 초기화
  const logout = async () => {
    await authLogout();
    setUser(null);
    setUserCourses([]);
  };

  const updateUser = async ({ baekjoonId, nickname }: { baekjoonId: string; nickname: string }) => {
    setIsLoading(true);
    try {
      await serverAPI.patch('/user', { baekjoonId, name: nickname });
      await loadUser();
    } catch (error) {
      console.error('사용자 정보 업데이트 실패:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfileImage = async (imageFile: File | null) => {
    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append('profileImageFile', imageFile);
      }

      const response = await serverAPI.patch('/user/profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const newUserInfo = response.data.result;
      setUser({ ...user, profileImageFileName: newUserInfo.profileImageFileName } as UserInfo);
    } catch (error) {
      console.error('사용자 정보 업데이트 실패:', error);
      throw error;
    } finally {
      setIsUploadingImage(false);
    }
  };

  return {
    isLoading,
    user,
    isLoggedIn,
    loadUser,
    logout,
    checkLoginStatus,
    updateUser,
    updateProfileImage,
    isUploadingImage,
  };
};

export default useUser;
