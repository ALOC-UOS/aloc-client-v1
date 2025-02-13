import { useState } from 'react';
import styled, { css } from 'styled-components';

const useContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);
  const render = ({ children = null } = {}) => {
    return <CardWrapper isOpen={isOpen}>{children}</CardWrapper>;
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
  opacity: 0;
  box-shadow: 0 8px 16px #408cff40;
  ${props =>
    props.isOpen
      ? css`
          opacity: 1;
          filter: blur(0px);
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          display: none;
        `}
`;
