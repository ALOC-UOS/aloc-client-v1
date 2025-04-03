import { atom, useAtom } from 'jotai';
import { Problem } from '@/types/problem.types';
import { CourseInfo, UserCourse } from '@/types/course.types';
import { useEffect, useState } from 'react';
import { serverAPI } from '@/api/axios';
import { getTierByDifficulty } from '@/utils/Tier';
import { tierStyleConfig } from '@/styles/tier.config';

const userCourseListAtom = atom<UserCourse[]>([]);

const courseIndexAtom = atom<number>(0);

const todayProblemAtom = atom<Problem | null>(null);

const useUserCourses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSolvingCheckLoading, setIsSolvingCheckLoading] = useState(false);
  const [userCourses, setUserCourses] = useAtom(userCourseListAtom);
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);
  const [courseIndex, setCourseIndex] = useAtom(courseIndexAtom);
  const [todayProblem, setTodayProblem] = useAtom(todayProblemAtom);

  useEffect(() => {
    if (userCourses.length === 0) {
      setCourseIndex(0);
    }
  }, []);

  useEffect(() => {
    if (userCourses.length === 0) {
      return;
    }

    const todayProblem = userCourses[courseIndex].problems.find(
      (problem) => problem.problemId === userCourses[courseIndex].todayProblemId
    );

    if (todayProblem) {
      setTodayProblem(todayProblem);
    }
  }, [courseIndex, userCourses]);

  const getUserCourses = async () => {
    setIsLoading(true);
    try {
      const response = await serverAPI.get('/user/courses');
      const newUserCourses = response.data.result.map((course: any): UserCourse => {
        return {
          id: course.id,
          type: course.courseType,
          name: course.title,
          totalProblemCount: course.problemCnt,
          todayProblemId: course.todayProblemId,
          problems: course.problems.map((problem: any): Problem => {
            return {
              problemId: problem.problemId,
              name: problem.title,
              difficulty: problem.rank,
              tier: tierStyleConfig[getTierByDifficulty(problem.rank)],
              status: problem.status,
              userList: problem.solvingUserList,
              solvedCount: problem.solvingUserNum,
              lastSolvedAt: problem.lastSolvedAt,
            };
          }),
        };
      });
      setUserCourses(newUserCourses);
    } catch (error) {
      console.error('코스 목록 조회 중 오류 발생:', error);
      setUserCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

  const addCourse = async (course: CourseInfo) => {
    setIsLoading(true);
    try {
      await serverAPI.post(`/user/course/${course.id}`);
      await getUserCourses();
      return true;
    } catch (error) {
      console.error('코스 추가 중 오류 발생:', error);
      throw error;
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSelectedCourse(null);
      }, 300);
    }
  };

  const deleteCourse = async (courseId: string) => {
    setIsLoading(true);
    try {
      await serverAPI.patch(`/user/course/${courseId}`);
      await getUserCourses();
    } catch (error) {
      console.error('코스 삭제 중 오류 발생:', error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSelectedCourse(null);
      }, 300);
    }
  };

  const checkTodayProblem = async () => {
    setIsSolvingCheckLoading(true);
    try {
      const response = await serverAPI.put(`/problem/${todayProblem?.problemId}`);
      return response.data.result.isSolved;
    } catch (error) {
      console.error('오늘의 문제 조회 중 오류 발생:', error);
    } finally {
      setIsSolvingCheckLoading(false);
    }
  };

  return {
    isLoading,
    courseIndex,
    setCourseIndex,
    todayProblem,
    userCourses,
    getUserCourses,
    setUserCourses,
    addCourse,
    deleteCourse,
    selectedCourse,
    setSelectedCourse,
    isSolvingCheckLoading,
    checkTodayProblem,
  };
};

export default useUserCourses;
