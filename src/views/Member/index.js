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
  MessageComponentText,
} from './style';
import TopBar from '../../components/TopBar';
import ListModal from '../../components/ListModal';
import { BlackScreen } from '../../components/BlackScreen';
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
import angryMan from '../../assets/angry-man.svg';
import { serverAPI } from '../../api/axios';
import useLoginState from '../../hooks/useLoginState';
import loadingIcon from '../../assets/blue-loading-icon.svg';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import loadingIconWithBg from '../../assets/with-bg-blue-loading-icon.svg';
import { HStack } from '../../styles/Stack.styles';
import { Message } from '../../components/Message';
import CoinMessage from '../../components/Message/CoinMessage';

const MessageText = ({ solvedStatus, rank }) => {
  switch (solvedStatus) {
    case 'ALREADY_SOLVED':
      return (
        <HStack style={{ gap: 4 }}>
          <span>✅</span>
          <span>이미 문제를 풀었어요!</span>
        </HStack>
      );
    case 'SOLVED':
      return (
        <HStack>
          <span style={{ color: '#408cff' }}>{rank}등</span>으로 문제를 풀었어요!
        </HStack>
      );
    default:
      return (
        <HStack style={{ gap: 4 }}>
          <span>🤔</span>
          <div>아직 문제를 풀지 않았어요!</div>
        </HStack>
      );
  }
};

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
  const [showConfetti, setShowConfetti] = useState(false);
  const loadingMessage = Message();
  const rankMessage = Message();
  const coinMessage = Message();
  const [solvedStatus, setSolvedStatus] = useState('');
  const [rank, setRank] = useState(0);
  const [userCoin, setUserCoin] = useState(0);
  const [obtainCoin, setObtainCoin] = useState(0);
  const [coinTriggerAnimation, setCoinTriggerAnimation] = useState(false);

  useEffect(() => {
    loadMemberData();
  }, []);

  function loadMemberData() {
    setMemberDataPending(true);
    let url = `${process.env.API_BASE_URL}/users`;
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
      url = `${process.env.API_BASE_URL}/user/${githubId}/solved-problems?routine=DAILY&season=3`;
      setModalTitle('해결한 문제 목록');
    } else {
      url = `${process.env.API_BASE_URL}/user/${githubId}/unsolved-problems?routine=DAILY&season=3`;
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
        console.error(error, 'API 요청 중 오류 발생:');
      });
  }

  const checkTodaySolvedProblem = () => {
    loadingMessage.show();
    serverAPI
      .post('/today-problem/solved', {}, { timeout: 300000 })
      .then(res => {
        setSolvedStatus(res.data.result.solvedStatus);
        if (res.data.result.solvedStatus === 'SOLVED') {
          setRank(res.data.result.place);
          setUserCoin(res.data.result.userCoin);
          setObtainCoin(res.data.result.obtainCoin);
          loadMemberData();
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2000);
        }
        loadingMessage.hide();
        rankMessage.toast();
        if (res.data.result.solvedStatus === 'SOLVED') {
          setTimeout(() => {
            setCoinTriggerAnimation(true);
            coinMessage.show();
          }, 2000);
          setTimeout(() => {
            setCoinTriggerAnimation(false);
            coinMessage.hide();
          }, 6000);
        }
      })
      .catch(error => {
        console.error(error, 'API 요청 중 오류 발생:');
      });
  };

  const decorateOptions = originalOptions => {
    return {
      ...originalOptions,
      particleCount: 200, // 조각 개수 설정
      spread: 120, // 퍼짐 정도 설정
      startVelocity: 50, // 초기 속도 설정
      ticks: 200, // 애니메이션 지속 시간 설정
      origin: { y: 0.8 }, // 발사 위치 설정
      shapes: ['circle', 'circle', 'square'], // 이미지 배열을 shapes로 설정
      gravity: 1.5, // 중력 설정
    };
  };

  return (
    <MemberContainer>
      <TopBar active={true} />
      {loadingMessage.render({
        icon: loadingIconWithBg,
        isLoading: true,
        children: (
          <MessageComponentText>
            <span style={{ color: '#408cff' }}>풀이 여부</span>를 확인하고 있어요
          </MessageComponentText>
        ),
      })}
      {rankMessage.render({
        children: (
          <MessageComponentText>
            <MessageText solvedStatus={solvedStatus} rank={rank} />
          </MessageComponentText>
        ),
      })}
      {coinMessage.render({
        icon: CoinIcon,
        isCoin: true,
        children: (
          <MessageComponentText>
            <CoinMessage
              userCoin={userCoin}
              obtainCoin={obtainCoin}
              triggerAnimation={coinTriggerAnimation}
            />
          </MessageComponentText>
        ),
      })}
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
            <ProfileWrapper delay={index * 0.15}>
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
                {member.baekjoonId === 'alicehrk' && <DecorationCharacter type={'Bubble'} />}
                {member.baekjoonId === 'parkne0114' && <DecorationCharacter type={'PinkTurtle'} />}
                {member.baekjoonId === 'jojongjojong' && <DecorationCharacter type={'Wave'} />}
                <SolvedAnimation solved={member.todaySolved} delay={index * 0.25} />
                {!member.todaySolved && (
                  <ProfileBlurImage
                    src={
                      member.profileImageFileName
                        ? `https://www.iflab.run/files/user/profile/${member.profileImageFileName}`
                        : angryMan
                    }
                  />
                )}
                <ProfileLink href={`https://github.com/${member.githubId}`} target="_blank">
                  <ProfileImage
                    src={
                      member.profileImageFileName
                        ? `https://www.iflab.run/files/user/profile/${member.profileImageFileName}`
                        : angryMan
                    }
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
                  {/* <MemberUserInfoBar />
                  <MemberUserInfoText>{member.joinedAt}</MemberUserInfoText> */}
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
      {showConfetti && (
        <Fireworks
          width={window.innerWidth}
          height={window.innerHeight}
          autorun={{ speed: 0.5, duration: 4, delay: 500 }}
          decorateOptions={decorateOptions}
          style={{
            position: 'fixed',
            zIndex: 1000,
          }}
        />
      )}
    </MemberContainer>
  );
};

export default Member;
