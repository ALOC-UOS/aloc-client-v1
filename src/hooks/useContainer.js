import { useState } from 'react';
import styled, { css } from 'styled-components';

const useContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const toggle = () => {
    console.log(isOpen);
    setIsOpen(prev => !prev);
  };
  const render = ({ children }) => {
    return isOpen && <CardWrapper>{children}</CardWrapper>;
  };
  return { show, hide, toggle, render };
};
export default useContainer;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  background-color: ${props => props.theme.foreground};
  padding: 10px;
`;
