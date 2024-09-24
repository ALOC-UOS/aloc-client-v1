import styled from 'styled-components';

const CurrentCoin = styled.span`
  transition: all 1s ease-in-out;
  color: ${props => (props.isVisible ? props.theme.yellow : props.theme.titleText)};
`;

const EarnedCoin = styled.span`
  margin-left: ${props => (props.isVisible ? '4px' : 0)};
  color: ${props => props.theme.yellow};
  transform: ${props => (props.isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  width: ${props => (props.isVisible ? `${props.width}px` : 0)};
  transition:
    width 0.8s ease-in-out,
    opacity 0.5s ease-in-out,
    transform 0.8s ease-in-out;
`;

export default { CurrentCoin, EarnedCoin };
