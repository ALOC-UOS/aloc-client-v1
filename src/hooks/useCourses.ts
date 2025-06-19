import { serverAPI } from '@/lib/api/axios';
import { CourseInfo, CourseType, SortType } from '@/types/course.types';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const coursesAtom = atom<CourseInfo[]>([]);

interface UseCoursesProps {
  courseType: CourseType | null;
  sortType: SortType;
  currentPage: number;
}

const useCourses = ({ courseType, sortType, currentPage }: UseCoursesProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useAtom(coursesAtom);
  const [totalPage, setTotalPage] = useState(0);
  const SIZE = 6;

  const getSortParam = (sortType: SortType) => {
    switch (sortType) {
      case SortType.POPULAR:
        return 'generateCnt,desc';
      case SortType.EASY:
        return 'averageRank,asc';
      case SortType.HARD:
        return 'averageRank,desc';
      case SortType.NEWEST:
      default:
        return 'createdAt,desc';
    }
  };

  const getCourses = async () => {
    setIsLoading(true);
    try {
      const response = await serverAPI.get('/courses', {
        params: {
          page: currentPage - 1,
          size: SIZE,
          courseType: courseType === null ? null : courseType,
          sort: getSortParam(sortType),
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

  useEffect(() => {
    getCourses();
  }, [currentPage, courseType, sortType]);

  return { courses, totalPage, isLoading };
};

export default useCourses;
