import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserInfo } from '@/types/user.types';

const useUsers = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, isLoading, loadUsers };
};

export default useUsers;
