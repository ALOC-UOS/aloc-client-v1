import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import CourseList from './CourseList';

const CoursePage = () => {
  return (
    <>
      <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
        <Header title="코스 목록" />
        <CourseList />
      </VStack>
    </>
  );
};

export default CoursePage;
