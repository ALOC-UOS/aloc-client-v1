import S from './style';
import { VStack } from '@/components/Stack';
import PurpleCharacterVideo1 from '@/assets/videos/purple.character.1.mp4';
import PurpleCharacterVideo2 from '@/assets/videos/purple.character.2.mp4';

interface ProblemContentErrorProps {
  error: string;
}

const VideoFiles = [PurpleCharacterVideo1, PurpleCharacterVideo2];

const PurpleCharacterVideo = VideoFiles[Math.floor(Math.random() * VideoFiles.length)];

const ProblemContentError = ({ error }: ProblemContentErrorProps) => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(12px) brightness(0.25)',
        }}
      >
        <source src={PurpleCharacterVideo} type="video/mp4" />
      </video>
      <S.ProblemContainer color={'var(--color-black)'}>
        <VStack alignItems="center" gap={80}>
          <VStack alignItems="center" gap={8}>
            <S.Callout color={'var(--color-white-50)'}>오늘의 에러</S.Callout>
            <S.Title>오늘의 문제가 길을 잃었어요.</S.Title>
            <S.Description>문제를 찾게 되면 알려드릴게요!</S.Description>
          </VStack>
          <VStack>
            <S.Description>[{error}]</S.Description>
          </VStack>
        </VStack>
        <S.BottomText> 관리자에게 문의해주세요 😭 </S.BottomText>
      </S.ProblemContainer>
    </>
  );
};

export default ProblemContentError;
