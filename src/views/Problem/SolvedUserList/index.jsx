import S from './SolvedUserList.styles';
import { useAlgorithm } from '../../../hooks/useAlgorithm';

export const SolvedUserListComponent = () => {
  const { solvedUserList } = useAlgorithm();

  const isSolvedUserListEmpty = solvedUserList.length === 0;

  const moveToGithubSite = githubId => {
    window.open(`https://www.github.com/${githubId}`);
  };

  return (
    <S.SolvedUserListContainer isOpen={!isSolvedUserListEmpty}>
      {solvedUserList.map((user, index) => (
        <S.SolvedUserItem key={user.githubId} delay={index}>
          <S.ProfileImage
            src={`https://avatars.githubusercontent.com/${user.githubId}`}
            onClick={() => moveToGithubSite(user.githubId)}
          />
        </S.SolvedUserItem>
      ))}
    </S.SolvedUserListContainer>
  );
};
