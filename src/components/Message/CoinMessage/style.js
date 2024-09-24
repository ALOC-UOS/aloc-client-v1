import styled from 'styled-components';

const CoinContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 1s ease-in-out;
`;

const CoinSpan = styled.span`
  transition: all 1s ease-in-out;
  color: ${props => !props.isVisible && props.theme.yellow};
`;

const PlusCoinSpan = styled.span`
  margin-left: 5px;
  color: #ffb800;
  transform: ${props => (props.isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  width: ${props => (props.isVisible ? `${props.width}px` : 0)};
  transition:
    width 0.8s ease-in-out,
    opacity 0.5s ease-in-out,
    transform 0.8s ease-in-out;
`;

export default { CoinContainer, CoinSpan, PlusCoinSpan };
