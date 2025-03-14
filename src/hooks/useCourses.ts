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
      setCourses(response.data.result.content || []);
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
