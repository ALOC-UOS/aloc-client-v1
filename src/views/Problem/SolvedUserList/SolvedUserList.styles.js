import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SolvedUserListContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: ${(props) => (props.isOpen ? '24px' : '24px 0px')};
  border-radius: 48px;
  overflow: scroll;
  background-color: var(--color-foreground);
  flex-shrink: 0;
`;

const SolvedUserItem = styled.div`
  animation: ${fadeInUp} 1s ease;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--color-black-10);
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.03s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;

export default { SolvedUserListContainer, SolvedUserItem, ProfileImage };
