import TopBar from '@/components/TopBar';
import { VStack } from '@/components/Stack';
import ProblemContent from './ProblemContent';

const Main = () => {
  return (
    <VStack style={{ backgroundColor: 'var(--color-black)' }}>
      <TopBar />
      <ProblemContent />
    </VStack>
  );
};

export default Main;
