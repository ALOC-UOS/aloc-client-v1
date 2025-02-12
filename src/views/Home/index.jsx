import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import S from './style';
import TopBar from '../../components/TopBar';
import { formatSolveTime } from '../../utils';
import BottomInfo from '../../components/Card';
import MarathonProblemList from '../../components/MarathonProblemList';
import useLoginState from '../../hooks/useLoginState';
import useUserState from '../../hooks/useUserState';
import { VStack } from '../../styles/Stack.styles';
import { TIER_STYLE_CONFIG } from '../../styles/tierStyleConfig';
import { getProblemTier } from '../../utils';
import { gsap } from 'gsap';
import DefaultProfile from '../../assets/default-profile.svg';

const dummyProblemData = {
  id: 12865,
  problemId: 12865,
  title: '평범한 배낭',
  difficulty: 12,
  tier: {
    backgroundColor: TIER_STYLE_CONFIG.gold.backgroundColor,
    color: TIER_STYLE_CONFIG.gold.color,
    icon: TIER_STYLE_CONFIG.gold.icon,
  },
};

const Home = () => {
  const [problemData, setProblemData] = useState(dummyProblemData);
  const [isLoading, setIsLoading] = useState(false);
  const [solvedMemberList, setSolvedMemberList] = useState([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [isShowMember, setIsShowMember] = useState(false);
  const { user } = useUserState();
  const { isLoggedIn } = useLoginState();
  const bigTierIconWrapperRef = useRef(null);
  const bigTierIconRef = useRef(null);
  const smallIconWrapperRef = useRef(null);
  const smallIconRef = useRef(null);

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
  }, [problemData]);

  useEffect(() => {
    if (!isLoggedIn || user) {
      loadProblem();
    }
  }, [user]);

  useEffect(() => {
    if (problemData.id) {
      loadSolveMember();
    }
  }, [problemData]);

  useEffect(() => {
    if (!solvedMemberList) {
      return;
    }

    const showMemberInterval = 5000;
    const hideMemberDelay = 4000;

    const timer = setInterval(() => {
      setCurrentMemberIndex(prevIndex => (prevIndex + 1) % solvedMemberList.length);
      setIsShowMember(false);
      setTimeout(() => setIsShowMember(true), hideMemberDelay);
    }, showMemberInterval);

    return () => clearInterval(timer);
  }, [solvedMemberList]);

  const loadProblem = async () => {
    try {
      const course = user ? user.course : 'FULL';
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/today-problem`, {
        params: { course },
      });
      const { difficulty, ...rest } = response.data.result;
      const tier = getProblemTier(difficulty);

      setProblemData({
        ...rest,
        difficulty,
        tier: {
          backgroundColor: TIER_STYLE_CONFIG[tier].backgroundColor,
          color: TIER_STYLE_CONFIG[tier].color,
          icon: TIER_STYLE_CONFIG[tier].icon,
        },
      });
    } catch (error) {
      console.error('Error loading problem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadSolveMember = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/problem/${problemData.id}/solved-users`
      );
      setSolvedMemberList(response.data.result);
    } catch (error) {
      console.error('Error loading solved members:', error);
    }
  };

  const moveToProblemPage = () => {
    window.open(`https://www.acmicpc.net/problem/${problemData.problemId}`, '_blank');
  };

  const renderProblemContent = () => (
    <S.Container backgroundColor={problemData.tier.backgroundColor}>
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
          src={problemData.tier?.icon.circle}
          alt="tier-icon"
          ref={bigTierIconRef}
          backgroundColor={problemData.tier.backgroundColor}
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
          src={problemData.tier?.icon.circle}
          alt="tier-icon"
          ref={smallIconRef}
          backgroundColor={problemData.tier.backgroundColor}
        />
      </div>
      <S.ProblemWrapper color={problemData.tier.color} onClick={moveToProblemPage}>
        <VStack style={{ alignItems: 'center', gap: 8 }}>
          <S.ProblemTitle color={problemData.tier.color}>오늘의 문제</S.ProblemTitle>
          <S.ProblemName>
            {problemData.problemId}. {problemData.title}
          </S.ProblemName>
        </VStack>
        {renderMemberInfo()}
        <S.BottomText> 오늘도 파이팅 😁 </S.BottomText>
      </S.ProblemWrapper>
      {isLoggedIn && <MarathonProblemList />}
    </S.Container>
  );

  const renderMemberInfo = () => {
    if (solvedMemberList.length === 0) {
      return (
        <S.DefaultMemberWrapper isShow={false}>
          <S.ProfileImage src={DefaultProfile} />
          <S.Description>아무도 문제를 풀지 않았어요.</S.Description>
          <S.SolveTime>지금</S.SolveTime>
        </S.DefaultMemberWrapper>
      );
    }

    const currentMember = solvedMemberList[currentMemberIndex];
    return (
      <S.MemberWrapper isShow={isShowMember}>
        <S.ProfileImage
          src={
            currentMember.profileImageFileName
              ? `https://${import.meta.env.VITE_API_BASE_URL}/files/user/profile/${currentMember.profileImageFileName}`
              : DefaultProfile
          }
        />
        <S.Description>
          <S.MemberName>{currentMember.username}</S.MemberName>
          님이 문제를 풀었어요.
        </S.Description>
        <S.SolveTime>{formatSolveTime(currentMember.solvedAt)}</S.SolveTime>
      </S.MemberWrapper>
    );
  };

  return (
    <VStack style={{ backgroundColor: '#000000' }}>
      <TopBar />
      {isLoading ? (
        <S.Container backgroundColor={problemData.tier.backgroundColor} />
      ) : (
        renderProblemContent()
      )}
      <BottomInfo />
    </VStack>
  );
};

export default Home;
