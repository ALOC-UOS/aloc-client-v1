import TopBar from '@/components/TopBar';
import { VStack } from '@/components/Stack';
import CourseContainer from './CourseContainer';

const Main = () => {
  return (
    <VStack style={{ minHeight: '100dvh', backgroundColor: 'var(--color-black)' }}>
      <TopBar />
      <CourseContainer />
    </VStack>
  );
};

export default Main;
