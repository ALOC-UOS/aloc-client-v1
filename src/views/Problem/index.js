import React from 'react';
import S from './Problem.styles';
import TopBar from '../../components/TopBar';
import { AlgorithmListComponent as AlgorithmList } from './AlgorithmList';
import { ProblemListComponent as ProblemList } from './ProblemList';
import { VStack } from '../../styles/Stack.styles';
import { useProblem } from '../../hooks/useProblem';

const Problem = () => {
  const { selectedCourse, handleCourseButtonClick } = useProblem();
  return (
    <S.ProblemContainer>
      <TopBar />
      <VStack style={{ gap: '16px' }}>
        <S.Wrapping style={{ flexDirection: 'row', gap: '24px' }}>
          <S.Button
            selected={selectedCourse === 'HALF'}
            onClick={() => handleCourseButtonClick('HALF')}
          >
            HALF
          </S.Button>
          <S.Button
            selected={selectedCourse === 'FULL'}
            onClick={() => handleCourseButtonClick('FULL')}
          >
            FULL
          </S.Button>
        </S.Wrapping>
        <S.Wrapping>
          <AlgorithmList />
        </S.Wrapping>
      </VStack>
      <S.Wrapping style={{ width: '100%', height: '80vh' }}>
        <ProblemList />
      </S.Wrapping>
    </S.ProblemContainer>
  );
};

export default Problem;
