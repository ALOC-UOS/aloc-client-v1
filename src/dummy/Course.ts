import { CourseInfo } from '@/types/course.types';

const dummyCourseList: CourseInfo[] = [
  {
    id: '1',
    type: 'oneday',
    name: '코스 1',
    totalProblemCount: 10,
    selectedUserCount: 10,
    difficulty: {
      start: 1,
      end: 10,
    },
    success: {
      userList: [],
      count: 0,
      lastSuccessAt: '',
    },
    isSolved: false,
  },
  {
    id: '2',
    type: 'deadline',
    name: '코스 2',
    totalProblemCount: 5,
    selectedUserCount: 10,
    difficulty: {
      start: 6,
      end: 10,
    },
    success: {
      userList: [],
      count: 0,
      lastSuccessAt: '',
    },
    isSolved: false,
    duration: 7,
  },
  {
    id: '3',
    type: 'deadline',
    name: '코스 3',
    totalProblemCount: 9,
    selectedUserCount: 13,
    difficulty: {
      start: 11,
      end: 20,
    },
    success: {
      userList: [],
      count: 0,
      lastSuccessAt: '',
    },
    isSolved: false,
    duration: 7,
  },
];

export default dummyCourseList;
