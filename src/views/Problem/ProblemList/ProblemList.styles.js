/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -20%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

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

const ProblemItem = styled.div`
  animation: ${fadeInUp} 1s ${({ delay }) => delay * 0.05}s forwards;
  animation-timing-function: linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 48px;
  background-color: ${props => props.theme.white};
  opacity: 0;
`;

const EmptyContainer = styled.div`
  animation: ${fadeIn} 1s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const EmptyTitle = styled.p`
  color: ${props => props.theme.subText};
  font-size: 16px;
  font-weight: 500;
`;

const ProblemTier = styled.img`
  width: 24px;
  height: 24px;
`;

const ProblemName = styled.p`
  color: ${props => props.theme.titleText};
  font-size: 20px;
  font-weight: 500;
`;

const SolvingCount = styled.p`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 500;
  margin-left: 4px;
  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
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

export default {
  ProblemItem,
  EmptyContainer,
  EmptyTitle,
  ProblemTier,
  ProblemName,
  SolvingCount,
  Image,
};
