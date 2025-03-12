import { TierStyleConfig } from './tier.types';
import { UserInfo } from './user.types';

export type Problem = {
  id: number;
  problemId: number;
  name: string;
  difficulty: number;
  tier: TierStyleConfig;
  isSolved: boolean;
};

export interface TodayProblem extends Problem {
  userList: UserInfo[];
  solvedCount: number;
  lastSolvedAt: string;
}
