import styled from '@emotion/styled';
import Animation from '@/styles/animation';

const ParticleTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${Animation.FadeIn} 2s 3s ease forwards;
  background-image: linear-gradient(to bottom, #444e79, var(--color-black));
  opacity: 0;
`;

const ParticleCanvas = styled.canvas`
  animation: ${Animation.FadeInUp} 2s 2s ease forwards;
  opacity: 0;
`;

export default { ParticleTextContainer, ParticleBackground, ParticleCanvas };
