import { useMemo, useState } from 'react';
import { UserInfo } from '@/types/user.types';
import { serverAPI } from '@/api/axios';
import { atom, useAtom } from 'jotai';
import useUserCourses from './useUserCourses';

export const userAtom = atom<UserInfo | null>(null);

const useUser = () => {
  const { getUserCourses } = useUserCourses();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [user, setUser] = useAtom(userAtom);
  const isLoggedIn = useMemo(() => user !== null, [user]);

  // 토큰 확인 및 사용자 정보 로드
  const loadUser = async () => {
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
      await getUserCourses();
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
