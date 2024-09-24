import styled, { css, keyframes } from 'styled-components';

const AppearProfile = keyframes`
  0% {
    transform: translateY(-24px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const MoveBackground = keyframes`
  0% {
    background-position: 20% 50%;
  }
  65% {
    background-position: -190% 50%;
  }
  100% {
    background-position: -180% 50%;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  to {
    transform: rotate(360deg) translate(-50%, -50%);
  }
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 24px 0 24px 40px;
  margin-top: 120px;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileWrapper = styled.div`
  animation: ${AppearProfile} 1s ease forwards;
  animation-delay: ${props => props.delay}s;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  min-width: 260px;
  width: calc(100% / 6 - 40px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  opacity: 0;
  // 1840 = 300(260 + 40) * 6 + 40
  @media (max-width: 1840px) {
    width: calc(100% / 5 - 40px);
  }
  @media (max-width: 1540px) {
    width: calc(100% / 4 - 40px);
  }
  @media (max-width: 1240px) {
    width: calc(100% / 3 - 40px);
  }
  @media (max-width: 940px) {
    width: calc(100% / 2 - 40px);
  }
`;

const ProfileBackgroundImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3c414c;
  height: 220px;
  overflow: hidden;

  ${props =>
    props.solved &&
    css`
      &:hover {
        filter: brightness(1.2);
      }
    `}
  ${props =>
    props.solved &&
    props.category === 'common' &&
    css`
      background-color: ${props => props.color1};
    `}

  ${props =>
    props.solved &&
    props.category === 'rare' &&
    css`
      background-image: linear-gradient(
        ${props.degree}deg,
        ${props.color1} 0%,
        ${props.color2} 100%
      );
    `}

  ${props =>
    props.solved &&
    props.category === 'special' &&
    css`
      background-image: linear-gradient(
        ${props.degree}deg,
        ${props.color1} 0%,
        ${props.color2} 50%,
        ${props.color3} 100%
      );
    `}
`;

const ProfileLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: 0 0 16px #ffffff40;
  overflow: hidden;
  &::after {
    position: absolute;
    transition: all 0.3s ease;
    content: 'Github 보기';
    color: #ffffff;
    opacity: 0;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
    & > img {
      filter: brightness(0.5);
      transform: scale(1.1);
    }
  }
  &:active {
    & > img {
      filter: brightness(0.3);
      transform: scale(1);
    }
  }
`;

const ProfileImage = styled.img`
  will-change: transform;
  position: relative;
  width: 160px;
  height: 160px;
`;

const ProfileBlurImage = styled.img`
  animation: ${rotate360} 12s linear infinite;
  transform-origin: top left;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 480px;
  height: 378px;
  filter: blur(64px);
  &:hover {
    filter: blur(80px) brightness(1.3);
    scale: 1.2;
  }
`;

const ProfileRankWrap = styled.a`
  position: absolute;
  top: 0;
  right: 16px;
  width: 56px;
  height: 72px;

  &:hover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::after {
      position: absolute;
      opacity: 1;
    }
    & > img {
      filter: brightness(0.5);
    }
  }
  &:active {
    & > img {
      filter: brightness(0.3);
    }
  }
`;

const ProfileRank = styled.img`
  width: 56px;
  height: 72px;
`;

const ProfileNumber = styled.img`
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 24px;
  height: 24px;
  transform: translateX(-50%);
  opacity: 0.8;
`;

const MemberWrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 12px 12px 24px 12px;
`;

const MemberName = styled.div`
  color: ${props => props.theme.titleText};
  font-size: 24px;
  font-weight: 500;
  margin-left: 12px;
`;

const MemberUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
`;

const MemberUserInfoText = styled.div`
  color: ${props => props.theme.subText};
  font-size: 16px;
`;

const MemberUserInfoBar = styled.div`
  width: 1px;
  height: 16px;
  background-color: #00000010;
  margin: 0 8px;
  border-radius: 1px;
  transform: translateY(1px);
`;

const MemberUserInfoCoin = styled.div`
  z-index: 1;
  position: absolute;
  top: 16px;
  right: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #ffb800;
  font-size: 16px;
  font-weight: 500;
  gap: 4px;
  opacity: 0.25;
  user-select: none;

  padding: 4px 8px;
  background-color: #00000080;
  border-radius: 24px;
  & > img {
    width: 24px;
    height: 24px;
  }
  &:hover {
    opacity: 1;
    & > img {
      transform: rotateY(180deg);
    }
  }
`;

const MemberBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #00000010;
  border-radius: 1px;
  margin: 12px 0;
`;

const MemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  gap: 8px;
`;

const MemberInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MemberInfoItem = styled.div`
  color: ${props => props.theme.subText};
  font-size: 16px;

  ${props =>
    props.blue &&
    css`
      color: ${props => props.theme.primary};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    `}
`;

const SolvedAnimation = styled.div`
  animation: ${MoveBackground} 3s ease forwards;
  animation-delay: ${props => props.delay}s;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: 200% 100%;
  background-image: linear-gradient(
    60deg,
    transparent 20%,
    #ffffff80 20%,
    #ffffff80 35%,
    transparent 35%,
    transparent 40%,
    #ffffff40 40%,
    #ffffff40 45%,
    transparent 45%,
    transparent
  );
  opacity: 0;

  ${props =>
    props.solved &&
    css`
      opacity: 1;
    `}
`;

const IconWrapper = styled.div`
  z-index: 300;
  position: fixed;
  top: 32px;
  left: 50%;
  width: 48px;
  height: 48px;
  transform: translateX(-50%);
  opacity: 0;
  background-color: ${props => props.theme.primary};
  border-radius: 50%;

  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
`;

const Icon = styled.img`
  position: absolute;
  top: 25%;
  left: 50%;

  width: 32px;
  height: 32px;
  transform: translate(-50%, -50%);
  opacity: 0;
  transform-origin: top left;
  scale: 0.5;
  ${props =>
    props.active &&
    css`
      top: 50%;
      opacity: 1;
      animation: ${rotate360} 1s linear infinite;
      scale: 1;
    `}

  ${props =>
    props.active &&
    props.check &&
    css`
      top: 50%;
      opacity: 1;
      animation: none;
      scale: 1;
    `}
`;
const ProblemSolvedButton = styled.div`
  margin: 20px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 15px 30px;
  border-radius: 12px;
  background-color: ${props => props.theme.primary};

  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    transform: scale(1.1);
  }
`;
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1080deg);
  } 
`;
const BlueLoadingIcon = styled.img`
  animation: ${rotateAnimation} 4s cubic-bezier(0.25, 0.51, 0.43, 0.7) infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 48px;
  height: 48px;
`;

const MessageComponentText = styled.span`
  font-weight: 500;
  font-size: 16;
  color: ${props => props.theme.titleText};
`;

export {
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
};
