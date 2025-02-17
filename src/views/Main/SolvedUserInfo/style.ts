import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

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

const MemberWrapper = styled.div<{ isShow: boolean }>`
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
  color: var(--color-white);
  font-size: 14px;
  font-weight: 500;
  margin-right: 12px;
  user-select: none;
`;

const MemberName = styled.div`
  color: var(--color-blue);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
`;

const SolveTime = styled.div`
  color: var(--color-white-50);
  font-size: 12px;
  font-weight: 500;
  user-select: none;
`;


export default {
  DefaultMemberWrapper,
  MemberWrapper,
  ProfileImage,
  Description,
  MemberName,
  SolveTime,
};
