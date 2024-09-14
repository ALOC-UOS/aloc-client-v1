import styled from 'styled-components';

const DropdownItem = ({ children, onClick }) => {
  return <DropdownItemContainer onClick={onClick}>{children}</DropdownItemContainer>;
};

export default DropdownItem;

const DropdownItemContainer = styled.button`
  padding: 12px 16px;
  cursor: pointer;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 24px;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transition: all 0.05s;
    filter: brightness(0.9);
  }

  font-size: 14px;
  color: #3c414c;
  letter-spacing: -1.12px;
  text-align: left;
`;
