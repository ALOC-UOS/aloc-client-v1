import { serverAPI } from '@/api/axios';
import { CourseInfo } from '@/types/course.types';
import { useState } from 'react';
import useUserCourses from './useUserCourses';

const useCourse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);
  const { getUserCourses } = useUserCourses();

  const addCourse = async (course: CourseInfo) => {
    setIsLoading(true);
    try {
      await serverAPI.post(`/course/${course.id}`);
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

  return {
    isLoading,
    selectedCourse,
    setSelectedCourse,
    addCourse,
  };
};

export default useCourse;
