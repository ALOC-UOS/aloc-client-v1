import styled from 'styled-components';

const DecorationItem = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  z-index: 10;
  position: absolute;
  top: calc(50% + ${props => props.top}px);
  left: calc(50% + ${props => props.left}px);
  transform: translate(-50%, -50%);
  opacity: 1;
  user-select: none;
  pointer-events: none;
`;

export default DecorationItem;
