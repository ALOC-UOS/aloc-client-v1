import S from './Problem.styles';
import TopBar from '../../components/TopBar';
import { AlgorithmListComponent as AlgorithmList } from './AlgorithmList';
import { ProblemListComponent as ProblemList } from './ProblemList';
import { SolvedUserListComponent as SolvedUserList } from './SolvedUserList';
import { VStack } from '../../components/Stack';
import { useAlgorithm } from '../../hooks/useAlgorithm';
import useDropdown from '../../hooks/useDropdown';

const Problem = () => {
  const { selectedCourse, setSelectedCourse, setSelectedSeason } = useAlgorithm();
  const seasons = ['시즌 1', '시즌 2', '시즌 3'];
  const seasonDropdown = useDropdown({
    itemList: seasons,
    defaultIdx: 2,
    onClickItem: item => {
      const season = item.split(' ');
      setSelectedSeason(season[1]);
    },
  });
  return (
    <S.ProblemContainer>
      <TopBar />
      <VStack gap={16} style={{ height: '80vh', minWidth: '262px' }}>
        {seasonDropdown.render()}
        <S.Wrapping style={{ flexDirection: 'row', gap: '24px', flexShrink: 0 }}>
          <S.Button selected={selectedCourse === 'HALF'} onClick={() => setSelectedCourse('HALF')}>
            HALF
          </S.Button>
          <S.Button selected={selectedCourse === 'FULL'} onClick={() => setSelectedCourse('FULL')}>
            FULL
          </S.Button>
        </S.Wrapping>
        <S.Wrapping style={{ height: '100%' }}>
          <AlgorithmList />
        </S.Wrapping>
      </VStack>
      <S.Wrapping style={{ width: '100%', height: '80vh' }}>
        <ProblemList />
      </S.Wrapping>
      <SolvedUserList />
    </S.ProblemContainer>
  );
};

export default Problem;
