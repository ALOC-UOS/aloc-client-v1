import { HStack, VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import CourseList from './CourseList';
import UserCourseList from '@/components/service/Course/UserCourseList';

const CoursePage = () => {
  return (
    <>
      <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
        <Header title="코스 목록" />
        <HStack alignItems="flex-start" gap={32} style={{ width: '100%' }}>
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
          <CourseList />
        </HStack>
      </VStack>
    </>
  );
};

export default CoursePage;
