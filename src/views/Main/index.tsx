import { VStack } from '@/components/common/Stack';
import CourseContainer from './CourseContainer';

const Main = () => {
  return (
    <VStack style={{ minHeight: '100dvh', backgroundColor: 'var(--color-black)' }}>
      <CourseContainer />
    </VStack>
  );
};

export default Main;
