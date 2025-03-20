import { TierStyleConfig } from './tier.types';
import { UserInfo } from './user.types';

type ProblemStatus = 'UNSOLVED' | 'SOLVED' | 'CLOSED' | 'HIDDEN';

export type Problem = {
  problemId: number;
  name: string;
  difficulty: number;
  tier: TierStyleConfig;
  status: ProblemStatus;
  userList: UserInfo[];
  solvedCount: number;
  lastSolvedAt: string;
};
