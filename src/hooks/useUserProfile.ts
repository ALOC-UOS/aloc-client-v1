import { serverAPI } from '@/api/axios';
import { UserInfo } from '@/types/user.types';
import { useState } from 'react';
import useUser from './useUser';

const useUserProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const { user, setUser } = useUser();

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

  const updateUserProfile = async ({
    baekjoonId,
    nickname,
  }: {
    baekjoonId: string;
    nickname: string;
  }) => {
    setIsLoading(true);
    try {
      await serverAPI.patch('/user', { baekjoonId, name: nickname });
      setUser({ ...user, baekjoonId, nickname } as UserInfo);
    } catch (error) {
      console.error('사용자 정보 업데이트 실패:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isUploadingImage,
    updateProfileImage,
    updateUserProfile,
  };
};

export default useUserProfile;
