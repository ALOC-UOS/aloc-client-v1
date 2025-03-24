import styled from '@emotion/styled';
import Animation from '@/styles/animation';

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  animation: ${Animation.FadeInUp} 2s 2s ease forwards;
  opacity: 0;
`;

export default { ParticleCanvas };
