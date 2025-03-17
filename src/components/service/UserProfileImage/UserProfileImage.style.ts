import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ProfileImage = styled.img<{
  width?: string;
  height?: string;
  backgroundColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
}>`
  position: absolute;
  width: ${(props) => props.width || '32px'};
  height: ${(props) => props.height || '32px'};
  background-color: ${(props) => props.backgroundColor || 'var(--color-background)'};
  border-radius: 50%;
  will-change: transform;
  border: 1px solid var(--color-black-10);
  opacity: ${(props) => (props.isLoading ? 0.5 : 1)};

  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }

      &:active {
        transition: all 0.03s;
        filter: brightness(0.8);
        transform: scale(0.95);
      }
    `}
`;

export default { ProfileImage };
