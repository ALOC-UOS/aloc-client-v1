import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import UserProfileCardList from './UserProfileCardList';

const UserPage = () => {
  return (
    <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
      <Header title="유저 목록" />
      <UserProfileCardList />
    </VStack>
  );
};

export default UserPage;
