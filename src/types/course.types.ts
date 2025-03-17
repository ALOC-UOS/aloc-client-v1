import { Problem, TodayProblem } from './problem.types';
import { UserInfo } from './user.types';

export type CourseType = 'DAILY' | 'DEADLINE';

export type CourseStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

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
  problems: (Problem | TodayProblem)[];
}
