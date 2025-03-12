import { tierStyleConfig } from '@/styles/tier.config';
import { UserCourse } from '@/types/course.types';
import { Problem, TodayProblem } from '@/types/problem.types';
import { dummyUserList } from './User';

const dummyProblemList: Problem[] = [
  {
    id: 1,
    problemId: 1,
    name: '문제 1',
    difficulty: 1,
    tier: {
      backgroundColor: tierStyleConfig['bronze'].backgroundColor,
      color: tierStyleConfig['bronze'].color,
      icon: tierStyleConfig['bronze'].icon,
    },
    isSolved: false,
  },
  {
    id: 2,
    problemId: 2,
    name: '문제 2',
    difficulty: 2,
    tier: {
      backgroundColor: tierStyleConfig['silver'].backgroundColor,
      color: tierStyleConfig['silver'].color,
      icon: tierStyleConfig['silver'].icon,
    },
    isSolved: false,
  },
  {
    id: 3,
    problemId: 3,
    name: '문제 3',
    difficulty: 3,
    tier: {
      backgroundColor: tierStyleConfig['gold'].backgroundColor,
      color: tierStyleConfig['gold'].color,
      icon: tierStyleConfig['gold'].icon,
    },
    isSolved: false,
  },
  {
    id: 4,
    problemId: 4,
    name: '문제 4',
    difficulty: 4,
    tier: {
      backgroundColor: tierStyleConfig['platinum'].backgroundColor,
      color: tierStyleConfig['platinum'].color,
      icon: tierStyleConfig['platinum'].icon,
    },
    isSolved: false,
  },
];

const dummyTodayProblemList: TodayProblem[] = [
  {
    id: 5,
    problemId: 5,
    name: '문제 1',
    difficulty: 1,
    tier: {
      backgroundColor: tierStyleConfig['bronze'].backgroundColor,
      color: tierStyleConfig['bronze'].color,
      icon: tierStyleConfig['bronze'].icon,
    },
    isSolved: false,
    userList: [...dummyUserList.slice(0, 2)],
    solvedCount: 2,
    lastSolvedAt: '',
  },
  {
    id: 6,
    problemId: 6,
    name: '문제 2',
    difficulty: 2,
    tier: {
      backgroundColor: tierStyleConfig['silver'].backgroundColor,
      color: tierStyleConfig['silver'].color,
      icon: tierStyleConfig['silver'].icon,
    },
    isSolved: false,
    userList: [],
    solvedCount: 0,
    lastSolvedAt: '2025-03-05 12:00:00',
  },
  {
    id: 7,
    problemId: 7,
    name: '문제 3',
    difficulty: 3,
    tier: {
      backgroundColor: tierStyleConfig['gold'].backgroundColor,
      color: tierStyleConfig['gold'].color,
      icon: tierStyleConfig['gold'].icon,
    },
    isSolved: false,
    userList: [...dummyUserList.slice(0, 3)],
    solvedCount: 3,
    lastSolvedAt: '2025-03-06 12:00:00',
  },
  {
    id: 8,
    problemId: 8,
    name: '문제 4',
    difficulty: 4,
    tier: {
      backgroundColor: tierStyleConfig['platinum'].backgroundColor,
      color: tierStyleConfig['platinum'].color,
      icon: tierStyleConfig['platinum'].icon,
    },
    isSolved: false,
    userList: [],
    solvedCount: 0,
    lastSolvedAt: '2025-03-06 14:30:00',
  },
];

export const dummyUserInProgressCourseList: UserCourse[] = [
  {
    id: '1',
    type: 'oneday',
    name: '작심삼일',
    totalProblemCount: 3,
    problems: [...dummyProblemList.slice(1, 3), dummyTodayProblemList[0]],
  },
  {
    id: '2',
    type: 'deadline',
    name: '마감 문제입니다',
    totalProblemCount: 7,
    problems: [...dummyProblemList.slice(3, 4), dummyTodayProblemList[1]],
  },
  {
    id: '3',
    type: 'deadline',
    name: '마감 문제',
    totalProblemCount: 7,
    problems: [...dummyProblemList.slice(3, 4), dummyTodayProblemList[2]],
  },
];
