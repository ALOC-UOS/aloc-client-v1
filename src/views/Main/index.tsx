import { VStack } from '@/components/common/Stack';
import CourseContainer from './CourseContainer';
import useUser from '@/hooks/useUser';
import LandingPage from './LandingPage';

const Main = () => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <LandingPage />;
  }

  return (
    <VStack style={{ minHeight: '100dvh', backgroundColor: 'var(--color-black)' }}>
      <CourseContainer />
    </VStack>
  );
};

export default Main;
