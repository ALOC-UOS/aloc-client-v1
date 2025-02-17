
import TopBar from '../../components/TopBar';
import BottomInfo from '../../components/Card';
import { VStack } from '../../components/Stack';
import ProblemContent from './ProblemContent';

const Home = () => {
  return (
    <VStack style={{ backgroundColor: '#000000' }}>
      <TopBar />
      <ProblemContent />
      <BottomInfo />
    </VStack>
  );
};

export default Home;
