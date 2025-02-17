import { Course } from "./algorithm.types";

export interface ProfileBackground {
  category: "common" | "rare" | "special";
  colorName: string;
  color1: string;
  color2: string | null;
  color3: string | null;
  color4: string | null;
  color5: string | null;
  degree: number | null;
}

export interface UserInfo {
  authority: string;
  username: string;
  profileImageFileName: string;
  solvedAt: string;
  coin: number;
  rank: number;
  background: ProfileBackground;
  baekjoonId: string;
  githubId: string;
  algorithmCourse: Course;
  createdAt: string;
  studentId: string;
  todaySolved: boolean;
  solvedCount: number;
  unsolvedCount: number;
};
