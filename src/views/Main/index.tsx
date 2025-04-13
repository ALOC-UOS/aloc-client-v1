import { VStack } from '@/components/common/Stack';
import CourseContainer from './CourseContainer';
import LandingPage from './LandingPage';
import useAuth from '@/hooks/useAuth';

const Main = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  return (
    <VStack style={{ minHeight: '100dvh', backgroundColor: 'var(--color-black)' }}>
      <CourseContainer />
    </VStack>
  );
};

export default Main;
