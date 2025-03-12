import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import UserProfileCard from './UserProfileCard';
import S from './User.style';
import { dummyUserList } from '../../dummy/User';

const UserPage = () => {
  return (
    <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
      <Header title="유저 목록" />
      <S.ContentContainer>
        {dummyUserList.map((user) => (
          <UserProfileCard key={user.id} user={user} />
        ))}
      </S.ContentContainer>
    </VStack>
  );
};

export default UserPage;
