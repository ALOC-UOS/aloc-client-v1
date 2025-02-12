import styled from 'styled-components';

const BlackOverlayContainer = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.black};
  opacity: ${props =>
    props.isOpen && props.theme.mode === 'dark' ? '0.7' : props.isOpen ? '0.5' : '0'};
  user-select: ${props => (props.isOpen ? 'auto' : 'none')};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
`;

export default { BlackOverlayContainer };
