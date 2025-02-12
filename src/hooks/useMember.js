import { useEffect, useState } from 'react';
import axios from 'axios';

const useMember = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);

  const loadMembers = () => {
    setIsLoading(true);
    const url = `${import.meta.env.VITE_API_BASE_URL}/users`;
    axios
      .get(url)
      .then(response => {
        console.log(response.data.result);
        setMembers(response.data.result);
      })
      .catch(error => {
        console.error(error, 'API 요청 중 오류 발생:');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadMembers();
  }, []);

  return { isLoading, members, loadMembers };
};

export default useMember;
