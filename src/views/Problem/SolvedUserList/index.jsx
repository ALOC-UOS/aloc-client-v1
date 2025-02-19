import S from './SolvedUserList.styles';
import { useAlgorithm } from '@/hooks/useAlgorithm';
import UserProfileImage from '@/components/UserProfileImage';

export const SolvedUserListComponent = () => {
  const { solvedUserList } = useAlgorithm();

  const isSolvedUserListEmpty = solvedUserList.length === 0;

  return (
    <S.SolvedUserListContainer isOpen={!isSolvedUserListEmpty}>
      {solvedUserList.map((user, index) => (
        <S.SolvedUserItem key={user.githubId} delay={index}>
          <UserProfileImage user={user} width="48px" height="48px" />
        </S.SolvedUserItem>
      ))}
    </S.SolvedUserListContainer>
  );
};
