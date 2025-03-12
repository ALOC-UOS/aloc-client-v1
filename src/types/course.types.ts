import { Problem, TodayProblem } from './problem.types';
import { UserInfo } from './user.types';

export type CourseType = 'oneday' | 'deadline';

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
  isSolved: boolean;
  duration?: number;
}

export interface UserCourse extends Course {
  problems: (Problem | TodayProblem)[];
}
