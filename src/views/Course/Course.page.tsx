import { HStack, VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import CourseList from './CourseList';
import UserCourseList from '@/components/service/Course/UserCourseList';
import CourseFilterPanel from '@/components/service/Course/CourseFilterPanel';
import Pagination from '@/components/common/Pagination';
import { useState } from 'react';
import useCourses from '@/hooks/useCourses';
import { CourseType, SortType } from '@/types/course.types';

const CoursePage = () => {
  const [courseType, setCourseType] = useState<CourseType | null>(null);
  const [sortType, setSortType] = useState<SortType>(SortType.NEWEST);
  const [currentPage, setCurrentPage] = useState(1);
  const { courses, totalPage, isLoading } = useCourses({ courseType, sortType, currentPage });

  const handleCourseTypeChange = (type: CourseType | null) => {
    setCourseType(type);
    setCurrentPage(1);
  };

  const handleSortTypeChange = (type: SortType) => {
    setSortType(type);
    setCurrentPage(1);
  };

  return (
    <>
      <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
        <Header title="코스 목록" />
        <HStack alignItems="flex-start" gap={32} style={{ width: '100%' }}>
          <VStack gap={24} style={{ minWidth: 320, maxWidth: 320 }}>
            <HStack gap={16}>
              <div
                style={{
                  padding: 16,
                  borderRadius: 16,
                  backgroundColor: 'var(--color-foreground)',
                }}
              >
                <CourseFilterPanel
                  courseType={courseType}
                  setCourseType={handleCourseTypeChange}
                  sortType={sortType}
                  setSortType={handleSortTypeChange}
                />
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPage}
                onPageChange={setCurrentPage}
              />
            </HStack>
            <div
              style={{ padding: 16, borderRadius: 16, backgroundColor: 'var(--color-foreground)' }}
            >
              <p
                style={{
                  color: 'var(--color-sub-text)',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                }}
              >
                진행중인 코스
              </p>
              <UserCourseList />
            </div>
          </VStack>

          <HStack gap={32} style={{ flex: 1 }}>
            <CourseList
              courses={courses}
              isLoading={isLoading}
              courseType={courseType}
              sortType={sortType}
              currentPage={currentPage}
            />
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default CoursePage;
