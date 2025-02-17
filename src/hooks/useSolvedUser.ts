import axios from "axios";
import { useState } from "react";
import { User } from "@/types/user.types";

const useSolvedUser = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ solvedUserList, setSolvedUserList ] = useState<User[]>([]);

  const loadSolveMember = async (problemId: number) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/problem/${problemId}/solved-users`);
      setSolvedUserList(response.data.result);
    } catch (error) {
      console.error('문제를 푼 유저를 불러오는 중 에러가 발생했습니다:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    solvedUserList,
    loadSolveMember
  }
}

export default useSolvedUser;