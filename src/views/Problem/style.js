import styled, { keyframes } from 'styled-components';

const BreathAnimation = keyframes`
  0% {
    width: 72px;
    height: 108px;
  }
  100% {
    width: 96px;
    height: 144px;
  }
`;

const AppearAnimationBottomToTop = keyframes`
  0% {
    transform: translateY(48px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  width: 100%;
  min-height: 100vh;
  padding-top: 110px;
  align-items: center;
`;

const ContentContainer = styled.div`
  animation: ${AppearAnimationBottomToTop} 1s ease forwards;
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: calc(100vw - 80px);
`;

const ProblemList = styled.div`
  animation: ${AppearAnimationBottomToTop} 1s ease forwards;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.foreground};
  border-radius: 16px;
  overflow-y: scroll;
  height: 75vh;
`;

const ProblemItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.foreground};
  padding: 24px;
  border-bottom: 1px solid #00000018;
  &:last-child {
    border-bottom: 1px solid #00000000;
  }
`;

const ProblemInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProblemName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${props => props.theme.titleText};
  font-size: 24px;
  font-weight: 500;
`;

const ProblemDifficulty = styled.img`
  width: 24px;
  height: 24px;
`;

const ProblemTags = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 1;
  gap: 8px;
`;

const ProblemTag = styled.div`
  display: flex;
  gap: 4px;
`;

const ProblemTagText = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 12px;
  font-weight: 500;
`;

const ProblemCorrect = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.subText};
  font-size: 16px;
  gap: 8px;
`;

const ProblemCorrectNum = styled.div`
  color: ${props => props.theme.primary};
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProblemButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  min-width: 120px;
  border-radius: 12px;
  background-color: ${props => props.theme.primary};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;

const ProblemRightWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const WeekList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WeekItem = styled.div`
  position: relative;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: ${props => props.theme.foreground};
  border-radius: 16px;
  cursor: pointer;
  gap: 4px;
  overflow: hidden;
  &::before {
    animation: ${BreathAnimation} 2s ease-in-out alternate infinite;
    transition: all 0.5s;
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    width: 72px;
    height: 108px;
    background-color: ${props => props.theme.primary};
    border-radius: 50%;
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
    transform-origin: 0 0;
    z-index: -1;
  }
  &:hover {
    filter: brightness(0.9);
    &::before {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
    &::before {
      transition: all 0.3s;
      opacity: 1;
      transform: scale(3) translate(-50%, -50%);
    }
  }
  ${props =>
    props.isActive &&
    `
    background-color: ${props.theme.primary};
    color: #ffffff;
    &:hover {
      filter: brightness(1);
      &::before {
        transition: all 0.3s;
        transform: scale(4) translate(-50%, -50%);
      }
    }
    &:active {
      filter: brightness(1);
      transform: scale(1);
    }
  `}
`;

const WeekTitle = styled.div`
  color: ${props => props.theme.primary};
  font-size: 10px;
  font-weight: 500;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 48px;
  ${props =>
    props.isActive &&
    `
    color: #ffffff;
    border: 1px solid #ffffff;
  `}
`;

const AlgorithmName = styled.div`
  color: ${props => props.theme.titleText};
  font-size: 16px;
  font-weight: 500;
  ${props =>
    props.isActive &&
    `
    color: #ffffff;
  `}
`;

export {
  ProblemContainer,
  ContentContainer,
  ProblemList,
  ProblemItem,
  ProblemInfoWrap,
  ProblemName,
  ProblemDifficulty,
  ProblemTags,
  ProblemTag,
  ProblemTagText,
  ProblemCorrect,
  ProblemCorrectNum,
  ProblemRightWrap,
  ProblemButton,
  WeekList,
  WeekItem,
  WeekTitle,
  AlgorithmName,
};
