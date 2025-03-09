import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

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

const UserProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: 16px;
  overflow: hidden;
  height: min-content;
`;

const TopSection = styled.div<{ isSolved: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  padding: 12px;
  background-color: ${(props) =>
    props.isSolved ? 'var(--color-blue)' : 'var(--color-background)'};
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
  background-color: var(--color-white);
`;

const Nickname = styled.p`
  color: var(--color-title-text);
  font-size: 20px;
  font-weight: 500;
`;

const AchievementItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-blue);
  font-size: 12px;
  font-weight: 500;

  padding: 6px 8px;
  border-radius: 24px;
  background-color: var(--color-foreground);
`;

const SolvedAnimation = styled.div<{ isSolved: boolean; delay: number }>`
  animation: ${MoveBackground} 3s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: 200% 100%;
  background-image: linear-gradient(
    60deg,
    transparent 20%,
    var(--color-white-50) 20%,
    var(--color-white-50) 35%,
    transparent 35%,
    transparent 40%,
    var(--color-white-25) 40%,
    var(--color-white-25) 45%,
    transparent 45%,
    transparent
  );
  opacity: 0;

  ${(props) =>
    props.isSolved &&
    css`
      opacity: 1;
    `}
`;

export default {
  UserProfileCardContainer,
  TopSection,
  BottomSection,
  Nickname,
  AchievementItem,
  SolvedAnimation,
};
