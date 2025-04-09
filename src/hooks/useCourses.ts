import { serverAPI } from '@/lib/api/axios';
import { CourseInfo } from '@/types/course.types';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const coursesAtom = atom<CourseInfo[]>([]);

const useCourses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useAtom(coursesAtom);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const SIZE = 12;

  const getCourses = async () => {
    setIsLoading(true);
    try {
      const response = await serverAPI.get('/courses', {
        params: {
          page: currentPage - 1,
          size: SIZE,
        },
      });

      // response의 배열을 CourseInfo[] 타입으로 변환
      const courses: CourseInfo[] = response.data.result.content.map((course: any) => ({
        ...course,
        id: course.id,
        type: course.type,
        name: course.title,
        totalProblemCount: course.problemCnt,
        difficulty: {
          start: course.rank.min,
          end: course.rank.max,
        },
        status: course.status,
        duration: course.duration,
      }));
      setCourses(courses);
      setTotalPage(Math.ceil(response.data.result.totalElements / SIZE));
    } catch (error) {
      console.error(error);
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getCourses();
  }, [currentPage]);

  return { courses, totalPage, currentPage, getCourses, handlePageChange, isLoading };
};

export default useCourses;
