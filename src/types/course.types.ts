import { Problem } from './problem.types';
import { UserInfo } from './user.types';

export enum CourseType {
  DEADLINE = 'DEADLINE',
  DAILY = 'DAILY',
}

export enum SortType {
  NEWEST = 'newest',
  POPULAR = 'popular',
  EASY = 'easy',
  HARD = 'hard',
}

export type CourseStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'SUCCESS' | 'FAILED';

export type Course = {
  id: string;
  type: CourseType;
  name: string;
  totalProblemCount: number;
};

export interface CourseInfo extends Course {
  selectedUserCount: number;
  difficulty: {
    start: number;
    end: number;
  };
  success: {
    userList: UserInfo[];
    count: number;
    lastSuccessAt: string;
  };
  status: CourseStatus;
  duration?: number;
}

export interface UserCourse extends Course {
  todayProblemId: number;
  problems: Problem[];
  closedAt: string;
}
