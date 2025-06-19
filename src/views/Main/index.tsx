import { VStack } from '@/components/common/Stack';
import CourseContainer from './CourseContainer';
import { useState } from 'react';
import { CourseType, SortType } from '@/types/course.types';
import useCourses from '@/hooks/useCourses';
import LandingPage from './LandingPage';
import useAuth from '@/hooks/useAuth';

const Main = () => {
  const { isAuthenticated } = useAuth();
  const [courseType, setCourseType] = useState<CourseType | null>(null);
  const [sortType, setSortType] = useState<SortType>(SortType.NEWEST);
  const [currentPage, setCurrentPage] = useState(1);

  const { courses, isLoading } = useCourses({
    courseType,
    sortType,
    currentPage,
  });

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  return (
    <VStack style={{ minHeight: '100dvh', backgroundColor: 'var(--color-black)' }}>
      <CourseContainer
        courses={courses}
        isLoading={isLoading}
        courseType={courseType}
        sortType={sortType}
        currentPage={currentPage}
        setCourseType={setCourseType}
        setSortType={setSortType}
        setCurrentPage={setCurrentPage}
      />
    </VStack>
  );
};

export default Main;
