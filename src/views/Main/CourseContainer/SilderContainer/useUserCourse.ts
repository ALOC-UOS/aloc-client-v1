import { atom, useAtom } from 'jotai';
import { dummyUserInProgressCourseList } from '../../../../dummy/Problem';
import { TodayProblem } from '@/types/problem.types';
import { UserCourse } from '@/types/course.types';

const courseListAtom = atom<UserCourse[]>(dummyUserInProgressCourseList);

const courseIndexAtom = atom<number>(0);

const todayProblemAtom = atom<TodayProblem | null>((get) => {
  const courseIndex = get(courseIndexAtom);
  const course = dummyUserInProgressCourseList[courseIndex];
  if (!course) return null;
  const lastIndex = course.problems.length - 1;
  return course.problems[lastIndex] as TodayProblem;
});

const useUserCourse = () => {
  const [courseList] = useAtom(courseListAtom);
  const [courseIndex, setCourseIndex] = useAtom(courseIndexAtom);
  const [todayProblem] = useAtom(todayProblemAtom);

  return {
    courseIndex,
    setCourseIndex,
    todayProblem,
    courseList,
  };
};

export default useUserCourse;
