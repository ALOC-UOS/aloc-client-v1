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

const AppearOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div<{ backgroundColor: string }>`
  animation: ${AppearOpacity} 1s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background-image: linear-gradient(105deg, ${(props) => props.backgroundColor}, #000000);
  perspective: 1000px;
`;

const ContentWrapper = styled.div`
  animation: ${MoveUp} 1s ease-in-out;
  z-index: 1;
  position: relative;
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0 32px 0;
  background-color: var(--color-white-10);
  gap: 80px;
  border-radius: 24px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to bottom, var(--color-white-50), transparent);
    padding: 1px;
    border-radius: 24px;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
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
      ${(props) => props.color}00,
      ${(props) => props.color}40
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

const Callout = styled.div`
  animation: ${MoveUp} 1s 0.4s ease-in-out forwards;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 32px;
  border: 1px solid ${(props) => props.color};
  user-select: none;
  opacity: 0;
`;

const Title = styled.div`
  animation: ${MoveUp} 1s 0.55s ease-in-out forwards;
  color: var(--color-white);
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  user-select: none;
  opacity: 0;
`;

const Description = styled.p`
  animation: ${MoveUp} 1s 0.8s ease-in-out forwards;
  color: var(--color-white-50);
  font-size: 14px;
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

export default {
  Container,
  ContentWrapper,
  Callout,
  Title,
  Description,
  BottomText,
};
