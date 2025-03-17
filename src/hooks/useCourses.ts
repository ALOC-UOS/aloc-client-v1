import { serverAPI } from '@/api/axios';
import { CourseInfo } from '@/types/course.types';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const coursesAtom = atom<CourseInfo[]>([]);

const useCourses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useAtom(coursesAtom);
  const [page, setPage] = useState(0);
  const SIZE = 10;

  const getCourses = async () => {
    setIsLoading(true);
    try {
      const response = await serverAPI.get('/courses', {
        params: {
          page: page,
          size: SIZE,
        },
      });
      // response의 배열을 CourseInfo[] 타입으로 변환
      const courses = response.data.result.content.map((course: any) => ({
        ...course,
        id: course.courseId,
        type: course.courseType,
        name: course.title,
        totalProblemCount: course.problemCnt,
        difficulty: {
          start: course.minRank,
          end: course.maxRank,
        },
        isSolved: course.success,
        duration: course.duration,
      }));
      setCourses(courses);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return { courses, getCourses, isLoading };
};

export default useCourses;
