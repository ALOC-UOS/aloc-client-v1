import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export type LabelVariant = 'success' | 'failed' | 'active' | 'inactive' | 'loading';

interface LabelContainerProps {
  variant: LabelVariant;
}

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const getVariantStyles = (variant: LabelVariant) => {
  switch (variant) {
    case 'success':
      return {
        background: 'var(--color-green-10)',
        color: 'var(--color-green)',
      };
    case 'failed':
      return {
        background: 'var(--color-red-10)',
        color: 'var(--color-red)',
      };
    case 'loading':
      return {
        background: 'var(--color-blue-10)',
        color: 'var(--color-blue)',
      };
    case 'active':
      return {
        background: 'var(--color-blue-25)',
        color: 'var(--color-blue)',
      };
    case 'inactive':
      return {
        background: 'var(--color-background)',
        color: 'var(--color-sub-text)',
      };
    default:
      return {
        background: 'var(--color-background)',
        color: 'var(--color-sub-text)',
      };
  }
};

const Container = styled.div<LabelContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${({ variant }) => getVariantStyles(variant).background};
  color: ${({ variant }) => getVariantStyles(variant).color};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Circle = styled.div<{ variant: LabelVariant }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ variant }) => getVariantStyles(variant).color};
  animation: ${({ variant }) => (variant === 'active' ? blink : 'none')} 1.5s infinite;
`;

export default {
  Container,
  IconWrapper,
  Circle,
};
