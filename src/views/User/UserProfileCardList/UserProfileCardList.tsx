import useUsers from '@/hooks/useUsers';
import S from './UserProfileCardList.style';
import UserProfileCard from './UserProfileCard';

const UserProfileCardList = () => {
  const { users } = useUsers();

  if (users.length === 0) {
    return (
      <S.UserProfileCardList
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <S.EmptyMessage>아직 가입한 유저가 없어요</S.EmptyMessage>
      </S.UserProfileCardList>
    );
  }

  return (
    <S.UserProfileCardList>
      {users.map((user) => (
        <UserProfileCard key={user.baekjoonId} user={user} />
      ))}
    </S.UserProfileCardList>
  );
};

export default UserProfileCardList;
