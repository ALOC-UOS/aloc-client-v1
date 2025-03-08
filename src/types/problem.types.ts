import { TierStyleConfig } from './tier.types';

export type Problem = {
  id: number;
  problemId: number;
  name: string;
  difficulty: number;
  tier: TierStyleConfig;
  isSolved: boolean;
};

export interface TodayProblem extends Problem {
  profileImageList: string[];
  solvedCount: number;
  lastSolvedAt: string;
}
