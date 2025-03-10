import styled from '@emotion/styled';

const TierCircle = styled.div<{ width: number; height: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #686b72, #35373c);
  padding-top: 2px;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to bottom, var(--color-white-50), transparent);
    padding: 1px;
    border-radius: 24px;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export default {
  TierCircle,
};
