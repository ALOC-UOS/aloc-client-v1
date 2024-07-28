import S from './SolvedUserList.styles';
import { useProblem } from '../../../hooks/useProblem';
import { useState } from 'react';

export const SolvedUserListComponent = () => {
  const { solvedUserList } = useProblem();

  const isSolvedUserListEmpty = solvedUserList.length === 0;

  const moveToGithubSite = githubId => {
    window.open(`https://www.github.com/${githubId}`);
  };

  return (
    <S.SolvedUserListContainer isOpen={!isSolvedUserListEmpty}>
      {solvedUserList.map((user, index) => (
        <S.SolvedUserItem key={user.githubId} delay={index}>
          <S.ProfileImage
            src={`https://avatars.githubusercontent.com/u/${user.profileNumber}?v=4`}
            onClick={() => moveToGithubSite(user.githubId)}
          />
        </S.SolvedUserItem>
      ))}
    </S.SolvedUserListContainer>
  );
};
