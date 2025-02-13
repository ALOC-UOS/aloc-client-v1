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

const BubbleItem = styled(DecorationItem)`
  opacity: 0.8;
  animation: float 4s ease-in-out infinite;
  animation-delay: ${props => props.delay}ms;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-16px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default { DecorationItem, BubbleItem };
