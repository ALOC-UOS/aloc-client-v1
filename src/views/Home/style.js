import styled, { css, keyframes } from 'styled-components';

const MoveUp = keyframes`
  0% {
    transform: translateY(16px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const MoveDown = keyframes`
  0% {
    transform: translateY(-16px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const DisappearUp = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-16px);
    opacity: 0;
  }
`;

const AppearBackground = keyframes`
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  padding-bottom: 48px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ProblemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
  overflow: hidden;
  background-color: #000000;
  @media (max-width: 480px) {
    width: calc(100% - 32px);
  }
`;

const ProblemWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0 40px;
`;

const ProblemTitleWrapper = styled.div`
  animation: ${MoveDown} 1s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 8px;
  background-color: #1a1a1a;
  border-radius: 24px;
  padding: 8px 8px 8px 16px;
  margin-bottom: 4px;
  flex-shrink: 0;
`;

const ProblemTitle = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;

const ProblemDifficulty = styled.img`
  width: 24px;
  height: 24px;
`;

const ProblemName = styled.div`
  animation: ${MoveDown} 1s ease-in-out;
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  flex-shrink: 0;
  text-align: center;
  margin-bottom: 48px;
`;

const BackgroundImage = styled.img`
  animation: ${AppearBackground} 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MemberWrapper = styled.div`
  animation: ${MoveUp} 1s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  padding: 8px 12px 8px 8px;
  ${props =>
    props.isShow &&
    css`
      animation: ${DisappearUp} 1s ease-in-out forwards;
    `}
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 4px;
  border-radius: 50%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-right: 12px;
`;

const MemberName = styled.div`
  color: #408cff;
  font-size: 14px;
  font-weight: 500;
`;

const SolveTime = styled.div`
  color: #ffffff80;
  font-size: 12px;
  font-weight: 500;
`;

export {
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
};
