import styled from '@emotion/styled';

const SliderContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SliderItem = styled.div<{ isSelected: boolean }>`
  transition: all 0.5s ease-in-out;
  position: absolute;
`;

export default { SliderContainer, SliderItem };
