import TopBar from '@/components/TopBar';
import BottomInfo from '@/components/Card';
import { VStack } from '@/components/Stack';
import ProblemContent from './ProblemContent';
import LandingContent from './LandingContent';

const Main = () => {
  return (
    <VStack style={{ backgroundColor: 'var(--color-black)' }}>
      <TopBar />
      {/* <ProblemContent /> */}
      {/* <BottomInfo /> */}

      <LandingContent />
      {/* 랜딩 페이지 */}
    </VStack>
  );
};

export default Main;
