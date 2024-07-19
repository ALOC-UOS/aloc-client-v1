import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  HomeContainer,
  ContentContainer,
  ProblemContainer,
  ProblemWrapper,
  ProblemTitleWrapper,
  ProblemTitle,
  ProblemDifficulty,
  ProblemName,
  BackgroundImage,
  MemberWrapper,
  ProfileImage,
  Description,
  MemberName,
  SolveTime,
} from './style';
import TopBar from '../../components/TopBar';
import ProblemBackgroundImage from '../../assets/background2.png';
import { getDifficultyIcon, formatSolveTime } from '../../utils';
import BottomInfo from '../../components/Card';

export const API_BASE_URL = 'https://www.iflab.run/api2';

const Home = () => {
  const [problemData, setProblemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [solvedMemberList, setSolvedMemberList] = useState([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [isShowMember, setIsShowMember] = useState(false);

  useEffect(() => {
    loadProblem();
  }, []);

  useEffect(() => {
    if (problemData.id) {
      loadSolveMember();
    }
  }, [problemData]);

  useEffect(() => {
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
      const response = await axios.get(`${API_BASE_URL}/problem/today/FULL`);
      setProblemData(response.data.result);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading problem:', error);
    }
  };

  const loadSolveMember = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/problem/solved-user/${problemData.id}`);
      setSolvedMemberList(response.data.result);
    } catch (error) {
      console.error('Error loading solved members:', error);
    }
  };

  const handleProblemClick = () => {
    window.open(`https://www.acmicpc.net/problem/${problemData.id}`, '_blank');
  };

  const renderProblemContent = () => (
    <ProblemContainer onClick={handleProblemClick}>
      <BackgroundImage src={ProblemBackgroundImage} />
      <ProblemWrapper>
        <ProblemTitleWrapper>
          <ProblemTitle>오늘의 문제</ProblemTitle>
          <ProblemDifficulty src={getDifficultyIcon(problemData.difficulty)} />
        </ProblemTitleWrapper>
        <ProblemName>
          {problemData.id}. {problemData.title}
        </ProblemName>
        {renderMemberInfo()}
      </ProblemWrapper>
    </ProblemContainer>
  );

  const renderMemberInfo = () => {
    if (solvedMemberList.length === 0) return <div style={{ height: '48px' }} />;

    const currentMember = solvedMemberList[currentMemberIndex];
    return (
      <MemberWrapper isShow={isShowMember}>
        <ProfileImage
          src={`https://avatars.githubusercontent.com/u/${currentMember.profileNumber}`}
        />
        <Description>
          <MemberName>{currentMember.username}</MemberName>
          님이 문제를 풀었어요.
        </Description>
        <SolveTime>{formatSolveTime(currentMember.solvedAt)}</SolveTime>
      </MemberWrapper>
    );
  };

  return (
    <HomeContainer>
      <TopBar />
      <ContentContainer>
        {isLoading ? <ProblemContainer /> : renderProblemContent()}
        <BottomInfo />
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
