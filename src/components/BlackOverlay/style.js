import styled from '@emotion/styled';

const BlackOverlayContainer = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-black);
  opacity: ${props => (props.isOpen ? '0.7' : '0')};
  user-select: ${props => (props.isOpen ? 'auto' : 'none')};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
`;

export default { BlackOverlayContainer };
