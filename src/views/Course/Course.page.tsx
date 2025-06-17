import { HStack, VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import CourseList from './CourseList';
import UserCourseList from '@/components/service/Course/UserCourseList';
import CourseFilterPanel from '@/components/service/Course/CourseFilterPanel';
import Pagination from '@/components/common/Pagination';
import { useState } from 'react';
import useCourses from '@/hooks/useCourses';

type CourseType = 'DEADLINE' | 'DAILY' | null;

const CoursePage = () => {
  const [courseType, setCourseType] = useState<CourseType>(null);
  const [sortType, setSortType] = useState<'popular' | 'difficulty'>('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPage } = useCourses({ courseType, sortType, currentPage });

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
                  setCourseType={setCourseType}
                  sortType={sortType}
                  setSortType={setSortType}
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
            <CourseList courseType={courseType} sortType={sortType} currentPage={currentPage} />
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default CoursePage;
