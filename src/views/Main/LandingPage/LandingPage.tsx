import { VStack } from '@/components/common/Stack';
import ParticleText from '@/components/common/ParticleText';
import S from './LandingPage.style';

const LandingPage = () => {
  return (
    <VStack style={{ minHeight: '100dvh', backgroundColor: 'var(--color-black)' }}>
      <S.Section>
        <ParticleText title="ALOC" />
        <VStack alignItems="center" justifyContent="center" style={{ zIndex: 1, height: '100dvh' }}>
          <S.Description>알고리즘 공부를 더 재미있게</S.Description>
        </VStack>
      </S.Section>
    </VStack>
  );
};

export default LandingPage;
