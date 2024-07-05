import styled, { css } from 'styled-components';

const ModalContainer = styled.div`
  min-width: 400px;
  z-index: 300;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.foreground};
  padding: 16px;
  border-radius: 16px;
  filter: blur(12px);
  pointer-events: none;

  ${props =>
    props.isOpen &&
    css`
      min-width: 320px;
      opacity: 1;
      filter: blur(0px);
      pointer-events: auto;
    `}
`;

const Description = styled.div`
  color: ${props => props.theme.titleText};
  font-size: 16px;
  letter-spacing: -2px;
  user-select: none;
  padding-bottom: 24px;
`;

export { ModalContainer, Description };
