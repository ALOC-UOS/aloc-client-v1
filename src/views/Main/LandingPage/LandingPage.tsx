import { HStack, VStack } from '@/components/common/Stack';
import ParticleText from '@/components/common/ParticleText';
import S from './LandingPage.style';
import GoogleLoginModal from '@/components/common/GoogleLogin/GoogleLoginModal';
import useModal from '@/hooks/useModal';
import Button from '@/components/common/Button';
import { tierStyleConfig } from '@/styles/tier.config';
import { Tier } from '@/types/tier.types';

const LandingPage = () => {
  const { isOpen, show, hide } = useModal();

  return (
    <VStack
      style={{
        height: '100vh',
        overflowY: 'scroll',
        backgroundColor: 'var(--color-black)',
        scrollSnapType: 'y mandatory',
      }}
    >
      <S.Section>
        <S.GradientBackground />
        <ParticleText title="ALOC" />
        <div style={{ marginBottom: 240 }}>
          <S.Description>알고리즘 공부를 더 재미있게</S.Description>
        </div>
      </S.Section>
      <S.Section>
        <S.Description>원데이와 데드라인 방식이 있어요</S.Description>
        <HStack justifyContent="space-around" style={{ width: '100%' }}>
          <VStack gap={12}>
            <HStack alignItems="flex-end">
              <p style={{ color: 'var(--color-blue)', fontSize: '48px', fontWeight: 'bold' }}>
                원데이
              </p>
              <p style={{ color: 'var(--color-blue)', fontSize: '24px', fontWeight: 'bold' }}>
                (One-Day)
              </p>
            </HStack>
            <VStack gap={8}>
              <p style={{ color: 'var(--color-white)', fontSize: '24px', fontWeight: '500' }}>
                하루에 한 문제를 꼭 풀어야 해요.
              </p>
              <p style={{ color: 'var(--color-white-50)', fontSize: '16px', fontWeight: '500' }}>
                * 하루라도 못풀면 실패
              </p>
            </VStack>
          </VStack>
          <VStack gap={12}>
            <HStack alignItems="flex-end">
              <p style={{ color: 'var(--color-blue)', fontSize: '48px', fontWeight: 'bold' }}>
                데드라인
              </p>
              <p style={{ color: 'var(--color-blue)', fontSize: '24px', fontWeight: 'bold' }}>
                (Deadline)
              </p>
            </HStack>
            <VStack gap={8}>
              <p style={{ color: 'var(--color-white)', fontSize: '24px', fontWeight: '500' }}>
                지정된 기간동안 준비된 문제를 모두 풀어야해요.
              </p>
              <p style={{ color: 'var(--color-white-50)', fontSize: '16px', fontWeight: '500' }}>
                * 기간이 지나면 실패
              </p>
            </VStack>
          </VStack>
        </HStack>
      </S.Section>
      <S.Section>
        <S.DotBackground />
        <S.Description>백준 아이디를 입력하여 티어를 확인하세요</S.Description>
        <HStack gap={24} style={{ zIndex: 1 }}>
          <TierIcon tier="unranked" />
          <TierIcon tier="bronze" />
          <TierIcon tier="silver" />
          <TierIcon tier="gold" />
          <TierIcon tier="platinum" />
          <TierIcon tier="diamond" />
          <TierIcon tier="ruby" />
        </HStack>
      </S.Section>
      <Button
        variant="primary"
        onClick={show}
        style={{
          zIndex: 1,
          position: 'fixed',
          left: '50%',
          bottom: '20px',
          transform: 'translateX(-50%)',
        }}
      >
        지금 가입하기
      </Button>
      <GoogleLoginModal isOpen={isOpen} onClose={hide} />
    </VStack>
  );
};

export default LandingPage;

const TierIcon = ({ tier }: { tier: Tier }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid var(--color-white)',
        borderRadius: '50%',
        aspectRatio: '1 / 1',
        padding: 8,
      }}
    >
      <img src={tierStyleConfig[tier].icon.small} alt={tier} width={64} height={64} />
    </div>
  );
};
