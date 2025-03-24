import S from './style';
import { formatSolveTime } from '@/utils/index';
import UserProfileImage from '@/components/service/UserProfileImage';
import { HStack } from '@/components/common/Stack';
import { UserInfo } from '@/types/user.types';

interface SolvedUserInfoProps {
  userList: UserInfo[];
  solvedCount: number;
  lastSolvedAt: string;
}

const SolvedUserInfo = ({ userList, solvedCount, lastSolvedAt }: SolvedUserInfoProps) => {
  if (solvedCount === 0) {
    return (
      <S.UserWrapper>
        <UserProfileImage user={null} width="32px" height="32px" />
        <S.Description>아무도 문제를 풀지 않았어요</S.Description>
      </S.UserWrapper>
    );
  }

  return (
    <S.UserWrapper>
      <S.UserProfileImageWrapper>
        {userList.map((user) => (
          <UserProfileImage key={user.baekjoonId} user={user} width="32px" height="32px" />
        ))}
      </S.UserProfileImageWrapper>
      <HStack alignItems="center">
        <S.Description>
          <span style={{ color: 'var(--color-blue)' }}>{solvedCount}</span>
          명이 이 문제를 풀었어요.
        </S.Description>
      </HStack>
      <S.LastSolvedAt>{formatSolveTime(lastSolvedAt)}</S.LastSolvedAt>
    </S.UserWrapper>
  );
};

export default SolvedUserInfo;
