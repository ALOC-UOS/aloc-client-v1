import { TierStyleConfig } from "./tier.types";

export type Problem = {
  id: number;
  problemId: number;
  title: string;
  difficulty: number;
  tier: TierStyleConfig
}