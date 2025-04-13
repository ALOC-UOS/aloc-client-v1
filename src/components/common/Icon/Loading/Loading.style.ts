import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.img`
  width: 64px;
  height: 64px;
  animation: ${rotate} 1s linear infinite;
`;

export default { LoadingIcon };
