import styled, { keyframes } from 'styled-components';

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

  top: 130%;
  right: 0;

  width: 100%;
  padding: 8px;
  gap: 4px;

  background-color: ${props => props.theme.white};
  border-radius: 24px;
  z-index: 1000;

  animation: ${dropdownAnimation} 0.3s ease-out;
`;
