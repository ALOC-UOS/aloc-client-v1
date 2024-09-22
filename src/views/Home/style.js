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

const AppearOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AppearScale = keyframes`
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${AppearOpacity} 1s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background-image: linear-gradient(105deg, ${props => props.backgroundColor}, #000000);
  perspective: 1000px;
`;

const ProblemWrapper = styled.div`
  animation: ${MoveUp} 1s ease-in-out;
  z-index: 1;
  position: relative;
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0 32px 0;
  background-color: #ffffff18;
  gap: 80px;
  border-radius: 24px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to bottom, #ffffff80, #ffffff00);
    padding: 1px;
    border-radius: 24px;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  &:after {
    transition: all 0.3s;
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      to bottom,
      ${props => props.color}00,
      ${props => props.color}40
    );
    border-radius: 24px;
    opacity: 0;
  }
  &:hover {
    transform: scale(1.03);
    &:after {
      opacity: 1;
    }
  }
  &:active {
    transform: rotateX(15deg);
  }

  &:active > p {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProblemTitle = styled.div`
  animation: ${MoveUp} 1s 0.4s ease-in-out forwards;
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 32px;
  border: 1px solid ${props => props.color};
  user-select: none;
  opacity: 0;
`;

const ProblemName = styled.div`
  animation: ${MoveUp} 1s 0.55s ease-in-out forwards;
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  user-select: none;
  opacity: 0;
`;

const BottomText = styled.p`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 24px;
  transform: translateY(-8px);
  opacity: 0;
  text-align: center;
  color: #ffffffce;
  font-size: 12px;
  user-select: none;
`;

const DefaultMemberWrapper = styled.div`
  animation: ${MoveUp} 1s 0.7s ease-in-out forwards;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  padding: 8px 12px 8px 8px;
  opacity: 0;
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
  user-select: none;
`;

const MemberName = styled.div`
  color: #408cff;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
`;

const SolveTime = styled.div`
  color: #ffffff80;
  font-size: 12px;
  font-weight: 500;
  user-select: none;
`;

const TierIcon = styled.img`
  position: relative;
  transition: background-color 0.3s;
  opacity: 0;
  border-radius: 50%;
  &:hover {
    background-color: ${props => props.backgroundColor}80;
  }
  &:active {
    background-color: ${props => props.backgroundColor};
  }
`;

export default {
  Container,
  ProblemWrapper,
  ProblemTitle,
  ProblemName,
  BottomText,
  DefaultMemberWrapper,
  MemberWrapper,
  ProfileImage,
  Description,
  MemberName,
  SolveTime,
  TierIcon,
};
