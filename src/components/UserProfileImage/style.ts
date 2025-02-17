import styled from '@emotion/styled';

const ProfileImage = styled.img<{ width?: string, height?: string, backgroundColor?: string }>`
  width: ${props => props.width || '32px'};
  height: ${props => props.height || '32px'};
  background-color: ${props => props.backgroundColor || 'var(--color-background)'};
  border-radius: 50%;
  will-change: transform;
  border: 1px solid var(--color-black-10);
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.03s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;

export default { ProfileImage };