import axios from 'axios';
import React, { useState, useEffect } from 'react';
import S from './style';
import TopBar from '../../components/TopBar';
import ListModal from '../../components/ListModal';
import { BlackOverlay } from '../../components/BlackOverlay';
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
import DefaultProfile from '../../assets/default-profile.svg';
import { serverAPI } from '../../api/axios';
import useLoginState from '../../hooks/useLoginState';
import loadingIcon from '../../assets/blue-loading-icon.svg';
import loadingIconWithBg from '../../assets/with-bg-blue-loading-icon.svg';
import { HStack } from '../../styles/Stack.styles';
import { Message } from '../../components/Message';
import CoinMessage from '../../components/Message/CoinMessage';
import Confetti from '../../components/Confetti';
import useMember from '../../hooks/useMember';

const MessageText = ({ solvedStatus, rank }) => {
  switch (solvedStatus) {
    case 'ALREADY_SOLVED':
      return (
        <HStack gap={4}>
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
        <HStack gap={4}>
          <span>🤔</span>
          <div>아직 문제를 풀지 않았어요!</div>
        </HStack>
      );
  }
};

const Member = () => {
  const [isLoadingSolvedProblem, setIsLoadingSolvedProblem] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [SelectedGithubId, setSelectedGithubId] = useState('');
  const [SelectedType, setSelectedType] = useState('');
  const [ProblemListData, setProblemListData] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const { isLoggedIn } = useLoginState();
  const [showConfetti, setShowConfetti] = useState(false);
  const loadingMessage = Message();
  const rankMessage = Message();
  const coinMessage = Message();
  const [solvedStatus, setSolvedStatus] = useState('');
  const [rank, setRank] = useState(0);
  const [userCoin, setUserCoin] = useState(0);
  const [obtainCoin, setObtainCoin] = useState(0);
  const [coinTriggerAnimation, setCoinTriggerAnimation] = useState(false);
  const { getMembers, isLoading, members } = useMember();

  function openProblemListModal(type, githubId) {
    const url = `${import.meta.env.VITE_API_BASE_URL}/user/${githubId}/${type === 'solved' ? 'solved' : 'unsolved'}-problems?routine=DAILY&season=3`;
    setModalTitle(type === 'solved' ? '해결한 문제 목록' : '해결하지 못한 문제 목록');

    axios
      .get(url)
      .then(response => {
        setProblemListData(response.data.result);
        setIsOpenedModal(true);
        setSelectedGithubId(githubId);
        setSelectedType(type);
      })
      .catch(error => {
        console.error(error, 'API 요청 중 오류 발생:');
      });
  }

  function closeModal() {
    setIsOpenedModal(false);
    setSelectedGithubId('');
    setSelectedType('');
  }

  function checkSolvedProblem() {
    setIsLoadingSolvedProblem(true);
    setIsShowLoading(true);
    serverAPI
      .post('/problems/solved')
      .then(response => {
        getMembers();
        openProblemListModal(SelectedType, SelectedGithubId);
        setTimeout(() => {
          setIsShowLoading(false);
        }, 500);
        setTimeout(() => {
          setIsLoadingSolvedProblem(false);
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
          getMembers();
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

  return (
    <S.MemberContainer>
      <TopBar active={true} />
      {loadingMessage.render({
        icon: loadingIconWithBg,
        isLoadingSolvedProblem: true,
        children: (
          <S.MessageComponentText>
            <span style={{ color: '#408cff' }}>풀이 여부</span>를 확인하고 있어요
          </S.MessageComponentText>
        ),
      })}
      {rankMessage.render({
        children: (
          <S.MessageComponentText>
            <MessageText solvedStatus={solvedStatus} rank={rank} />
          </S.MessageComponentText>
        ),
      })}
      {coinMessage.render({
        icon: CoinIcon,
        isCoin: true,
        children: (
          <S.MessageComponentText>
            <CoinMessage
              userCoin={userCoin}
              obtainCoin={obtainCoin}
              triggerAnimation={coinTriggerAnimation}
            />
          </S.MessageComponentText>
        ),
      })}
      <S.IconWrapper active={isLoadingSolvedProblem}>
        <S.Icon active={isShowLoading} src={LoadingIcon} />
        <S.Icon active={!isShowLoading && isLoadingSolvedProblem} src={CheckIcon} check={true} />
      </S.IconWrapper>
      <ListModal
        isOpen={isOpenedModal}
        modalTitle={modalTitle}
        problemListData={ProblemListData}
        closeModal={closeModal}
        checkSolvedProblem={checkSolvedProblem}
      />
      <BlackOverlay isOpen={isOpenedModal} />
      <S.ContentContainer>
        {isLoading ? (
          <S.BlueLoadingIcon src={loadingIcon} />
        ) : (
          members.map((member, index) => (
            <S.ProfileWrapper delay={index * 0.15}>
              <S.MemberUserInfoCoin>
                <img src={CoinIcon} alt="coin" />
                {member.coin}
              </S.MemberUserInfoCoin>
              <S.ProfileBackgroundImage
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
                <S.SolvedAnimation solved={member.todaySolved} delay={index * 0.25} />
                {!member.todaySolved && (
                  <S.ProfileBlurImage
                    src={
                      member.profileImageFileName
                        ? `https://${import.meta.env.VITE_API_BASE_URL}/files/user/profile/${member.profileImageFileName}`
                        : DefaultProfile
                    }
                  />
                )}
                <S.ProfileLink href={`https://github.com/${member.githubId}`} target="_blank">
                  <S.ProfileImage
                    src={
                      member.profileImageFileName
                        ? `https://${import.meta.env.VITE_API_BASE_URL}/files/user/profile/${member.profileImageFileName}`
                        : DefaultProfile
                    }
                  />
                </S.ProfileLink>
              </S.ProfileBackgroundImage>
              <S.MemberWrapper>
                <S.ProfileRankWrap href={`https://solved.ac/${member.baekjoonId}`} target="_blank">
                  <S.ProfileRank
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
                  <S.ProfileNumber
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
                </S.ProfileRankWrap>
                <S.MemberName>{member.username}</S.MemberName>
                <S.MemberUserInfoWrapper>
                  <S.MemberUserInfoText>{member.studentId}학번</S.MemberUserInfoText>
                  {/* <MemberUserInfoBar />
                  <MemberUserInfoText>{member.joinedAt}</MemberUserInfoText> */}
                </S.MemberUserInfoWrapper>
                <S.MemberBar />
                <S.MemberInfoWrapper>
                  <S.MemberInfoRow>
                    <S.MemberInfoItem>해결한 문제 수</S.MemberInfoItem>
                    <S.MemberInfoItem
                      blue={true}
                      onClick={() => openProblemListModal('solved', member.githubId)}
                    >
                      {member.solvedCount}개
                    </S.MemberInfoItem>
                  </S.MemberInfoRow>
                  <S.MemberInfoRow>
                    <S.MemberInfoItem>해결하지 못한 문제 수</S.MemberInfoItem>
                    <S.MemberInfoItem
                      blue={true}
                      onClick={() => openProblemListModal('unsolved', member.githubId)}
                    >
                      {member.unsolvedCount}개
                    </S.MemberInfoItem>
                  </S.MemberInfoRow>
                </S.MemberInfoWrapper>
              </S.MemberWrapper>
            </S.ProfileWrapper>
          ))
        )}
      </S.ContentContainer>
      {isLoggedIn && (
        <S.ProblemSolvedButton onClick={() => checkTodaySolvedProblem()}>
          문제 풀었어요!
        </S.ProblemSolvedButton>
      )}
      {showConfetti && <Confetti />}
    </S.MemberContainer>
  );
};

export default Member;
