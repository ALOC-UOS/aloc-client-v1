import { ProfileBackgroundColor } from './profileBackgroundColor.types';

export interface UserInfo {
  id: string;
  nickname: string | null;
  coin: number | null;
  rank: number | null;
  baekjoonId: string | null;
  profileImageFileName: string | null;
  profileBackgroundColor: ProfileBackgroundColor;
  createdAt: string;
  todaySolved: boolean;
  solvedCount: number;
  consecutiveSolvedDays: number;
}
