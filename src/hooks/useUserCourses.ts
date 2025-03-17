import { serverAPI } from '@/api/axios';
import { CourseInfo } from '@/types/course.types';
import { useState } from 'react';

const useUserCourses = () => {
  const [userCourses, setUserCourses] = useState<CourseInfo[]>([]);

  const getUserCourses = async () => {
    const response = await serverAPI.get('/user/courses');
    setUserCourses(response.data.result);
  };

  return { userCourses, getUserCourses };
};

export default useUserCourses;
