import S from './style';
import MarathonProblemList from '@/components/MarathonProblemList';
import SolvedUserInfo from './SolvedUserInfo';
import { useEffect } from 'react';
import useLoginState from '@/hooks/useLoginState';
import useUserState from '@/hooks/useUserState';
import useProblem from '@/hooks/useProblem';
import { VStack } from '@/components/Stack';
import TierIcons from './TierIcons';

const PreblemContent = () => {
  const {isLoading, todayProblem, fetchTodayProblem} = useProblem();
  const { user } = useUserState();
  const { isLoggedIn } = useLoginState();

  const moveToProblemPage = (problemId: number) => {
    window.open(`https://www.acmicpc.net/problem/${problemId}`, '_blank');
  };

  useEffect(() => {
    if (isLoggedIn && !user) {
      return;
    }
    fetchTodayProblem();
  }, [user]);

  if (isLoading || !todayProblem) {
    return (
      <S.Container backgroundColor={'#000000'} />
    )
  }

  return (
    <S.Container backgroundColor={todayProblem.tier.backgroundColor}>
      <TierIcons tier={todayProblem.tier} />
      <S.ProblemWrapper color={todayProblem.tier.color} onClick={() => moveToProblemPage(todayProblem.problemId)}>
        <VStack alignItems="center" gap={8}>
          <S.ProblemTitle color={todayProblem.tier.color}>오늘의 문제</S.ProblemTitle>
          <S.ProblemName>
            {todayProblem.problemId}. {todayProblem.title}
          </S.ProblemName>
        </VStack>
        <SolvedUserInfo />
        <S.BottomText> 오늘도 파이팅 😁 </S.BottomText>
      </S.ProblemWrapper>
      {isLoggedIn && <MarathonProblemList />}
    </S.Container>
  )
};

export default PreblemContent;