import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserInfo } from '@/types/user.types';

const useUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loadUsers = () => {
    setIsLoading(true);
    axios
      .get('/users')
      .then((response) => {
        setUsers(response.data.result);
      })
      .catch((error) => {
        console.error(error, 'API 요청 중 오류 발생:');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loadCurrentUser = () => {
    setIsLoading(true);
    axios
      .get('/users/me')
      .then((response) => {
        setCurrentUser(response.data.result);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error(error, '사용자 정보 불러오기 실패:');
        setIsLoggedIn(false);
        setCurrentUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // 구글 로그인 처리
  const googleLogin = async (token: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/auth/google', { token });
      setCurrentUser(response.data.result);
      setIsLoggedIn(true);
      return { success: true, needsAdditionalInfo: !response.data.result.baekjoonId };
    } catch (error) {
      console.error(error, '구글 로그인 실패:');
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  // 추가 정보 업데이트 (가입 시 또는 프로필 수정 시)
  const updateUserInfo = async (userData: UserInfo) => {
    setIsLoading(true);
    try {
      const response = await axios.patch('/users/me', userData);
      setCurrentUser(response.data.result);
      return { success: true };
    } catch (error) {
      console.error(error, '사용자 정보 업데이트 실패:');
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  // 프로필 이미지 업데이트
  const updateProfileImage = async (imageFile: File) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('profileImage', imageFile);

      const response = await axios.patch('/users/me/profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCurrentUser(response.data.result);
      return { success: true };
    } catch (error) {
      console.error(error, '프로필 이미지 업데이트 실패:');
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  // 로그아웃
  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    // 필요한 경우 서버에 로그아웃 요청 추가
  };

  useEffect(() => {
    // 페이지 로드 시 현재 사용자 정보 확인
    loadCurrentUser();
  }, []);

  return {
    isLoading,
    users,
    loadUsers,
    currentUser,
    isLoggedIn,
    googleLogin,
    updateUserInfo,
    updateProfileImage,
    loadCurrentUser,
    logout,
  };
};

export default useUser;
