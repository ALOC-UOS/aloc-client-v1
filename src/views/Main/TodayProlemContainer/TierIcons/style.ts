import styled from '@emotion/styled';

const TierIcon = styled.img<{ backgroundColor: string }>`
  position: relative;
  transition: background-color 0.3s;
  opacity: 0;
  border-radius: 50%;
  &:hover {
    background-color: ${(props) => props.backgroundColor}80;
  }
  &:active {
    background-color: ${(props) => props.backgroundColor};
  }
`;

export default { TierIcon };
