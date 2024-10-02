import styled from 'styled-components';

const CurrentCoin = styled.span`
  transition: all 0.3s ease-in-out;
  color: ${props => (props.isVisible ? props.theme.titleText : props.theme.yellow)};
`;

const EarnedCoin = styled.span`
  transition: all 0.3s ease-in-out;
  margin-left: ${props => (props.isVisible ? '4px' : 0)};
  color: ${props => props.theme.yellow};
  transform: ${props => (props.isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  width: ${props => (props.isVisible ? `${props.width}px` : 0)};
`;

export default { CurrentCoin, EarnedCoin };
