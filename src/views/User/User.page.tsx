import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import styled from '@emotion/styled';
import UserProfileCard from './UserProfileCard';

const UserPage = () => {
  return (
    <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
      <Header title="유저 목록" />
      <ContentContainer>
        {Array.from({ length: 25 }).map((_, index) => (
          <UserProfileCard key={index} />
        ))}
      </ContentContainer>
    </VStack>
  );
};

export default UserPage;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background-color: var(--color-foreground);

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
