import { useEffect, useState } from 'react';
import { UserInfo } from '@/types/user.types';
import { serverAPI } from '@/api/axios';

const useUsers = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await serverAPI.get('/users');
      const users: UserInfo[] = response.data.result.map((user: any) => ({
        nickname: user.name,
        coin: user.coin,
        rank: user.rank,
        baekjoonId: user.baekjoonId,
        profileImageFileName: user.profileImageFileName,
        profileBackgroundColor: user.color,
        createdAt: user.createdAt,
        todaySolved: user.todaySolved,
        solvedCount: user.solvedCount,
        consecutiveSolvedDays: user.consecutiveSolvedDays,
      }));
      setUsers(users);
    } catch (error) {
      console.error(error, 'API 요청 중 오류 발생:');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, isLoading, loadUsers };
};

export default useUsers;
