import { useEffect, useState } from 'react';
import axios from 'axios';

const useMember = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);

  const loadMembers = () => {
    setIsLoading(true);
    axios
      .get('/users')
      .then((response) => {
        setMembers(response.data.result);
      })
      .catch((error) => {
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
