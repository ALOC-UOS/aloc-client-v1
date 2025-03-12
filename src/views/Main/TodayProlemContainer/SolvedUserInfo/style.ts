import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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

const UserWrapper = styled.div`
  animation: ${MoveUp} 1s 0.7s ease-in-out forwards;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  background-color: var(--color-white-10);
  backdrop-filter: blur(16px);
  padding: 8px 12px 8px 8px;
  opacity: 0;
  gap: 4px;
`;

const UserProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img:not(:first-child) {
    margin-left: -16px;
  }
`;

const Description = styled.span`
  color: var(--color-white);
  font-size: 14px;
  font-weight: 500;
  margin-right: 12px;
  user-select: none;
`;

const LastSolvedAt = styled.span`
  color: var(--color-white-50);
  font-size: 12px;
  font-weight: 500;
  user-select: none;
`;

export default {
  UserWrapper,
  UserProfileImageWrapper,
  Description,
  LastSolvedAt,
};
