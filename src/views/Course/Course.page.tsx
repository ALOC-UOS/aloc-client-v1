import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import S from './Course.style';

const CoursePage = () => {
  return (
    <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
      <Header title="유저 목록" />
      <S.ContentContainer />
    </VStack>
  );
};

export default CoursePage;
