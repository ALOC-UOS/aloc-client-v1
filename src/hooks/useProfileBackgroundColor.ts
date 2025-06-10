import { useState } from 'react';
import { serverAPI } from '@/lib/api/axios';
import useUser from './useUser';

const useProfileBackgroundColor = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser } = useUser();

  const updateProfileBackgroundColor = async () => {
    setIsLoading(true);
    try {
      const response = await serverAPI.patch('/user/profile-background-color');
      const { userCoin, color } = response.data.result;
      setUser((prev) =>
        prev
          ? {
              ...prev,
              coin: userCoin,
              profileBackgroundColor: color,
            }
          : prev
      );

      return { color };
    } catch (error: any) {
      const errorMessage = error?.response?.data?.result || '프로필 배경색 변경 실패';
      return { error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    updateProfileBackgroundColor,
  };
};

export default useProfileBackgroundColor;
