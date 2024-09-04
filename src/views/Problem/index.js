import React from 'react';
import S from './Problem.styles';
import TopBar from '../../components/TopBar';
import { AlgorithmListComponent as AlgorithmList } from './AlgorithmList';
import { ProblemListComponent as ProblemList } from './ProblemList';
import { SolvedUserListComponent as SolvedUserList } from './SolvedUserList';
import { VStack } from '../../styles/Stack.styles';
import { useProblem } from '../../hooks/useProblem';

const Problem = () => {
  const { selectedCourse, setSelectedCourse } = useProblem();
  return (
    <S.ProblemContainer>
      <TopBar />
      <VStack style={{ height: '80vh', gap: '16px', minWidth: '262px' }}>
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
