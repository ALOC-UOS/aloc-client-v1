import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const DropDownMenu = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return <DropDownMenuContainer>{children}</DropDownMenuContainer>;
};

export default DropDownMenu;

const dropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropDownMenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  top: calc(100% - 12px);
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 48px);
  padding: 8px;
  gap: 4px;

  background-color: var(--color-white);
  border-radius: 24px;
  z-index: 1000;

  animation: ${dropdownAnimation} 0.3s ease-out;
`;
