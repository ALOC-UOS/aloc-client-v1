import { useState } from "react";
import useUserState from "./useUserState";
import axios from "axios";
import { getProblemTier } from '@/utils/index';
import { Problem } from "@/types/problem.types";
import { tierStyleConfig } from "@/styles/tier.config";
import { Tier } from "@/types/tier.types";


const useProblem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todayProblem, setTodayProblem] = useState<Problem | null>(null);
  const { user } = useUserState();

  const fetchTodayProblem = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const course = user ? user.course : 'FULL';
      await axios
        .get('/today-problem', {
          params: { course },
        })
        .then(response => {
          const data = response.data.result;
          const tier: Tier = getProblemTier(data.difficulty);

          setTodayProblem({
            ...data,
            tier: {
              backgroundColor: tierStyleConfig[tier].backgroundColor,
              color: tierStyleConfig[tier].color,
              icon: tierStyleConfig[tier].icon,
            },
          });
        });
    } catch (error) {
      console.error('오늘의 문제를 가져오는 중 오류 발생:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    todayProblem,
    fetchTodayProblem,
  }
};

export default useProblem;