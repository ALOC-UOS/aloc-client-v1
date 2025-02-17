import S from './style';
import { gsap } from 'gsap';
import MarathonProblemList from '@/components/MarathonProblemList';
import SolvedUserInfo from '../SolvedUserInfo';
import { useEffect, useRef } from 'react';
import useLoginState from '@/hooks/useLoginState';
import useUserState from '@/hooks/useUserState';
import useProblem from '@/hooks/useProblem';
import { VStack } from '@/components/Stack';

const problemContent = () => {
  const {isLoading, todayProblem, fetchTodayProblem} = useProblem();
  const { user } = useUserState();
  const { isLoggedIn } = useLoginState();

  const bigTierIconWrapperRef = useRef(null);
  const bigTierIconRef = useRef(null);
  const smallIconWrapperRef = useRef(null);
  const smallIconRef = useRef(null);

  const moveToProblemPage = (problemId: number) => {
    window.open(`https://www.acmicpc.net/problem/${problemId}`, '_blank');
  };

  useEffect(() => {
    if (isLoggedIn && !user) {
      return;
    }
    fetchTodayProblem();
  }, [user]);

  useEffect(() => {
    const tl = gsap.timeline();

    const iconAnimation = {
      duration: 2,
      ease: 'power1.inOut',
    };

    tl.to(bigTierIconRef.current, {
      ...iconAnimation,
      opacity: 1,
      rotationY: 360,
    }).to(
      bigTierIconRef.current,
      {
        ...iconAnimation,
        y: -40,
        yoyo: true,
        repeat: -1,
      },
      '<'
    );

    tl.to(
      smallIconRef.current,
      {
        ...iconAnimation,
        opacity: 1,
        rotationY: 360,
        delay: 0.3,
      },
      0.3
    ).to(
      smallIconRef.current,
      {
        ...iconAnimation,
        y: -24,
        yoyo: true,
        repeat: -1,
      },
      '<'
    );

    const wrapperAnimation = {
      duration: 2,
      scale: 1,
      ease: 'power1.inOut',
    };

    tl.to(bigTierIconWrapperRef.current, wrapperAnimation, 0).to(
      smallIconWrapperRef.current,
      wrapperAnimation,
      0
    );

    return () => {
      tl.kill();
    };
  }, [todayProblem]);
  
  if (isLoading || !todayProblem) {
    return (
      <S.Container backgroundColor={'#000000'} />
    )
  }

  return (
    <S.Container backgroundColor={todayProblem.tier.backgroundColor}>
      <div
        style={{
          position: 'absolute',
          top: 'calc(50% - 240px)',
          left: 'calc(50% - 420px)',
          transform: 'skew(10deg, 10deg) scale(0.5)',
          width: 400,
          height: 400,
        }}
        ref={bigTierIconWrapperRef}
      >
        <S.TierIcon
          src={todayProblem.tier?.icon.circle}
          alt="tier-icon"
          ref={bigTierIconRef}
          backgroundColor={todayProblem.tier.backgroundColor}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 'calc(50% + 70px)',
          left: 'calc(50% + 190px)',
          transform: 'skew(-20deg, 10deg) scale(0.5)',
          width: 200,
          height: 200,
        }}
        ref={smallIconWrapperRef}
      >
        <S.TierIcon
          src={todayProblem.tier?.icon.circle}
          alt="tier-icon"
          ref={smallIconRef}
          backgroundColor={todayProblem.tier.backgroundColor}
        />
      </div>
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

export default problemContent;