
import TopBar from '@/components/TopBar';
import BottomInfo from '@/components/Card';
import { VStack } from '@/components/Stack';
import ProblemContent from './ProblemContent';

const Main = () => {
  return (
    <VStack style={{ backgroundColor: 'var(--color-black)' }}>
      <TopBar />
      <ProblemContent />
      <BottomInfo />
    </VStack>
  );
};

export default Main;
