import styled, { css } from 'styled-components';

const ModalContainer = styled.div`
  min-width: 400px;
  z-index: 300;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
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
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  gap: 12px;
`;

export { ModalContainer, Description, ButtonWrap };
