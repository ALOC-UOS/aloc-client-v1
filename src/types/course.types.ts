import { Problem, TodayProblem } from './problem.types';

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
  solvedInfo: {
    userProfileImageList: string[];
    count: number;
    lastSolvedAt: string;
  };
  isSolved: boolean;
  duration?: number;
}

export interface UserCourse extends Course {
  problems: (Problem | TodayProblem)[];
}
