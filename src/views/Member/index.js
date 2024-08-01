import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  MemberContainer,
  ContentContainer,
  ProfileWrapper,
  ProfileBackgroundImage,
  ProfileLink,
  ProfileImage,
  ProfileBlurImage,
  ProfileRankWrap,
  ProfileRank,
  ProfileNumber,
  MemberWrapper,
  MemberName,
  MemberUserInfoWrapper,
  MemberUserInfoText,
  MemberUserInfoBar,
  MemberUserInfoCoin,
  MemberBar,
  MemberInfoWrapper,
  MemberInfoRow,
  MemberInfoItem,
  SolvedAnimation,
  IconWrapper,
  Icon,
  ProblemSolvedButton,
  BlueLoadingIcon,
} from './style';
import TopBar from '../../components/TopBar';
import ListModal from '../../components/ListModal';
import BlackScreen from '../../components/BlackScreen';
import DecorationCharacter from '../../components/Decorations/Character';
import Bronze from '../../assets/bronze.png';
import Silver from '../../assets/silver.png';
import Gold from '../../assets/gold.png';
import Platinum from '../../assets/platinum.png';
import Number5 from '../../assets/number-5.svg';
import Number4 from '../../assets/number-4.svg';
import Number3 from '../../assets/number-3.svg';
import Number2 from '../../assets/number-2.svg';
import Number1 from '../../assets/number-1.svg';
import CoinIcon from '../../assets/coin-icon.svg';
import LoadingIcon from '../../assets/loading-icon.svg';
import CheckIcon from '../../assets/check-icon.svg';
import { serverAPI } from '../../api/axios';
import useLoginState from '../../hooks/useLoginState';
import loadingIcon from '../../assets/blue-loading-icon.svg';

const Member = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [MemberData, setMemberData] = useState([]);
  const [SelectedGithubId, setSelectedGithubId] = useState('');
  const [SelectedType, setSelectedType] = useState('');
  const [ProblemListData, setProblemListData] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const { isLoggedIn } = useLoginState();
  const [memberDataPending, setMemberDataPending] = useState(false);

  useEffect(() => {
    loadMemberData();
  }, []);

  function loadMemberData() {
    setMemberDataPending(true);
    let url = 'https://www.iflab.run/api2/users';
    axios
      .get(url)
      .then(response => {
        setMemberData(response.data.result);
        setMemberDataPending(false);
      })
      .catch(error => {
        setMemberDataPending(false);
        console.error('API 요청 중 오류 발생:');
      });
  }

  function openProblemListModal(type, githubId) {
    let url = '';

    if (type === 'solved') {
      url = `https://www.iflab.run/api2/user/${githubId}/solved-problems?routine=DAILY&season=2`;
      setModalTitle('해결한 문제 목록');
    } else {
      url = `https://www.iflab.run/api2/user/${githubId}/unsolved-problems?routine=DAILY&season=2`;
      setModalTitle('해결하지 못한 문제 목록');
    }
    axios
      .get(url)
      .then(response => {
        setProblemListData(response.data.result);
        setIsOpenedModal(true);
        setSelectedGithubId(githubId);
        setSelectedType(type);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  }

  function closeModal() {
    setIsOpenedModal(false);
    setSelectedGithubId('');
    setSelectedType('');
  }

  function checkSolvedProblem() {
    setIsLoading(true);
    setIsShowLoading(true);
    serverAPI
      .post('/problems/solved')
      .then(response => {
        loadMemberData();
        openProblemListModal(SelectedType, SelectedGithubId);
        setTimeout(() => {
          setIsShowLoading(false);
        }, 500);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  }

  const checkTodaySolvedProblem = () => {
    serverAPI
      .post('/today-problem/solved', {}, { timeout: 300000 })
      .then(() => {
        loadMemberData();
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
    // window.location.reload();
  };

  return (
    <MemberContainer>
      <TopBar active={true} />
      <IconWrapper active={isLoading}>
        <Icon active={isShowLoading} src={LoadingIcon} />
        <Icon active={!isShowLoading && isLoading} src={CheckIcon} check={true} />
      </IconWrapper>
      <ListModal
        isOpen={isOpenedModal}
        modalTitle={modalTitle}
        problemListData={ProblemListData}
        closeModal={closeModal}
        checkSolvedProblem={checkSolvedProblem}
      />
      <BlackScreen isOpen={isOpenedModal} />
      <ContentContainer>
        {memberDataPending ? (
          <BlueLoadingIcon src={loadingIcon} />
        ) : (
          MemberData.map((member, index) => (
            <ProfileWrapper delay={index * 0.25}>
              <MemberUserInfoCoin>
                <img src={CoinIcon} />
                {member.coin}
              </MemberUserInfoCoin>
              <ProfileBackgroundImage
                solved={member.todaySolved}
                category={member.colorCategory}
                color1={member.color1}
                color2={member.color2}
                color3={member.color3}
                color4={member.color4}
                color5={member.color5}
                degree={member.degree}
              >
                {member.baekjoonId === 'parkne0114' && <DecorationCharacter type={'PinkTurtle'} />}
                <SolvedAnimation solved={member.todaySolved} delay={index * 0.25} />
                {!member.todaySolved && (
                  <ProfileBlurImage
                    src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`}
                  />
                )}
                <ProfileLink href={`https://github.com/${member.githubId}`} target="_blank">
                  <ProfileImage
                    src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`}
                  />
                </ProfileLink>
              </ProfileBackgroundImage>
              <MemberWrapper>
                <ProfileRankWrap href={`https://solved.ac/${member.baekjoonId}`} target="_blank">
                  <ProfileRank
                    src={
                      parseInt(member.rank / 10) === 1
                        ? Bronze
                        : parseInt(member.rank / 10) === 2
                          ? Silver
                          : parseInt(member.rank / 10) === 3
                            ? Gold
                            : Platinum
                    }
                  />
                  <ProfileNumber
                    src={
                      member.rank % 10 === 1
                        ? Number1
                        : member.rank % 10 === 2
                          ? Number2
                          : member.rank % 10 === 3
                            ? Number3
                            : member.rank % 10 === 4
                              ? Number4
                              : Number5
                    }
                  />
                </ProfileRankWrap>
                <MemberName>{member.username}</MemberName>
                <MemberUserInfoWrapper>
                  <MemberUserInfoText>{member.studentId}학번</MemberUserInfoText>
                  <MemberUserInfoBar />
                  <MemberUserInfoText>{member.joinedAt}</MemberUserInfoText>
                </MemberUserInfoWrapper>
                <MemberBar />
                <MemberInfoWrapper>
                  <MemberInfoRow>
                    <MemberInfoItem>해결한 문제 수</MemberInfoItem>
                    <MemberInfoItem
                      blue={true}
                      onClick={() => openProblemListModal('solved', member.githubId)}
                    >
                      {member.solvedCount}개
                    </MemberInfoItem>
                  </MemberInfoRow>
                  <MemberInfoRow>
                    <MemberInfoItem>해결하지 못한 문제 수</MemberInfoItem>
                    <MemberInfoItem
                      blue={true}
                      onClick={() => openProblemListModal('unsolved', member.githubId)}
                    >
                      {member.unsolvedCount}개
                    </MemberInfoItem>
                  </MemberInfoRow>
                </MemberInfoWrapper>
              </MemberWrapper>
            </ProfileWrapper>
          ))
        )}
      </ContentContainer>
      {isLoggedIn && (
        <ProblemSolvedButton onClick={() => checkTodaySolvedProblem()}>
          문제 풀었어요!
        </ProblemSolvedButton>
      )}
    </MemberContainer>
  );
};

export default Member;
