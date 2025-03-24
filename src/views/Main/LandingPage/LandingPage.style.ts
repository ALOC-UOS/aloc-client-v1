import styled from '@emotion/styled';
import Animation from '@/styles/animation';

const Section = styled.section`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;
`;

const Description = styled.p`
  animation: ${Animation.FadeInUp} 2s 1s ease forwards;
  color: var(--color-white);
  font-size: 32px;
  font-weight: bold;
  opacity: 0;
  margin-bottom: 48px;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${Animation.FadeIn} 2s 3s ease forwards;
  background-image: linear-gradient(to bottom, #444e79, var(--color-black));
  opacity: 0;
`;

const DotBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--color-black) 60%, transparent 100%),
    radial-gradient(#408cff40 1px, transparent 1px), radial-gradient(#408cff40 1px, transparent 1px);
  background-position:
    0 0,
    0 0,
    10px 10px;
  background-size:
    100% 100%,
    20px 20px,
    20px 20px;
  background-color: var(--color-black);
`;

export default { Section, Description, GradientBackground, DotBackground };
