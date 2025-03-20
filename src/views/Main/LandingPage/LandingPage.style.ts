import styled from '@emotion/styled';
import Animation from '@/styles/animation';

const Section = styled.section`
  height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  animation: ${Animation.FadeInUp} 2s 1s ease forwards;
  color: var(--color-white);
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 240px;
  opacity: 0;
`;

export default { Section, Description };
