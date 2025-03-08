import { Problem } from '@/types/problem.types';
import S from './style';
import SolvedUserInfo from './SolvedUserInfo';
import { VStack } from '@/components/Stack';

interface TodayProlemContainerProps {
  courseName: string;
  problem: Problem;
  onClick: () => void;
}

const TodayProlemContainer = ({ courseName, problem, onClick }: TodayProlemContainerProps) => {
  return (
    <S.ProblemContainer color={problem.tier.color} onClick={onClick}>
      <VStack alignItems="center" gap={8}>
        <S.Callout color={problem.tier.color}>{courseName}</S.Callout>
        <S.Title>
          {problem.problemId}. {problem.name}
        </S.Title>
      </VStack>
      <SolvedUserInfo />
      <S.BottomText> 오늘도 파이팅 😁 </S.BottomText>
    </S.ProblemContainer>
  );
};

export default TodayProlemContainer;
