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

const BattleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d2128;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 24px 0;
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
  align-items: center;
  border-radius: 40px;
  overflow: hidden;
  padding: 40px 64px;
  background-color: #3c414c;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.1),
    0 -8px 16px #ffffff40 inset;
  opacity: 0;
`;

const ProfileBackgroundImage = styled.div`
  position: relative;
  background-color: ${props => props.theme.foreground};
  height: 120px;

  ${props =>
    props.solved &&
    css`
      background-color: ${props => props.theme.primary};
    `}
`;

const ProfileLink = styled.a`
  position: absolute;
  left: 24px;
  bottom: -64px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &::after {
    transition: all 0.3s ease;
    content: 'Github 보기';
    color: #ffffff;
    opacity: 0;
  }
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

const ProfileImageWrapper = styled.div`
  width: 256px;
  height: 256px;
  position: relative;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 256px;
  height: 256px;
  border-radius: 50%;
  box-shadow: 0 0 16px #ffffff40;
  user-select: none;
  pointer-events: none;
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
  top: 100%;
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
  background-color: #ffffff;
  padding: 80px 12px 24px 12px;
`;

const MemberName = styled.div`
  color: #ffffff;
  font-size: 48px;
  padding-top: 16px;
`;

const MemberUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MemberUserInfoText = styled.div`
  color: #ffffff80;
  font-size: 20px;
  padding-bottom: 16px;
`;

const MemberUserInfoBar = styled.div`
  width: 1px;
  height: 16px;
  background-color: #00000010;
  margin: 0 8px;
  border-radius: 1px;
  transform: translateY(1px);
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

export {
  BattleContainer,
  ContentContainer,
  ProfileWrapper,
  ProfileBackgroundImage,
  ProfileLink,
  ProfileImageWrapper,
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
  MemberBar,
  MemberInfoWrapper,
  MemberInfoRow,
  MemberInfoItem,
  SolvedAnimation,
  IconWrapper,
  Icon,
};
