import S from './style';
import MarathonProblemList from './MarathonProblemList';
import SolvedUserInfo from './SolvedUserInfo';
import { useEffect } from 'react';
import useLoginState from '@/hooks/useLoginState';
import useUserState from '@/hooks/useUserState';
import useProblem from '@/hooks/useProblem';
import { VStack } from '@/components/Stack';
import TierIcons from './TierIcons';
import { moveToProblemSite } from '@/utils/index';
import ProblemContentError from './error';

const PreblemContent = () => {
  const {isLoading, error, todayProblem, fetchTodayProblem} = useProblem();
  const { user } = useUserState();
  const { isLoggedIn } = useLoginState();

  useEffect(() => {
    if (isLoggedIn && !user) {
      return;
    }
    fetchTodayProblem();
  }, [user]);

  if (isLoading) {
    return (
      <S.Container backgroundColor={'#000000'} />
    )
  }

  if (error || !todayProblem) {
    return (
      <S.Container backgroundColor={'#000000'}>
        <ProblemContentError error={error} />
      </S.Container>
    )
  }

  return (
    <S.Container backgroundColor={todayProblem.tier.backgroundColor}>
      <TierIcons tier={todayProblem.tier} />
      <S.ContentWrapper color={todayProblem.tier.color} onClick={() => moveToProblemSite(todayProblem.problemId)}>
        <VStack alignItems="center" gap={8}>
          <S.Callout color={todayProblem.tier.color}>오늘의 문제</S.Callout>
          <S.Title>
            {todayProblem.problemId}. {todayProblem.title}
          </S.Title>
        </VStack>
        <SolvedUserInfo />
        <S.BottomText> 오늘도 파이팅 😁 </S.BottomText>
      </S.ContentWrapper>
      {isLoggedIn && <MarathonProblemList />}
    </S.Container>
  )
};

export default PreblemContent;