import { ProfileBackgroundColor } from './profileBackgroundColor.types';

export interface UserInfo {
  id: string;
  nickname: string;
  coin: number;
  rank: number;
  baekjoonId: string;
  profileImageFileName: string;
  profileBackgroundColor: ProfileBackgroundColor;
  createdAt: string;
  todaySolved: boolean;
  solvedCount: number;
  consecutiveSolvedDays: number;
}
