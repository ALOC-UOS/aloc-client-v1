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
      <S.DefaultUserWrapper>
        <UserProfileImage user={null} />
        <S.Description>아무도 문제를 풀지 않았어요</S.Description>
      </S.DefaultUserWrapper>
    );
  }

  return (
    <S.UserWrapper>
      <HStack>
        {userList.map((user) => (
          <UserProfileImage key={user.id} user={user} />
        ))}
      </HStack>
      <HStack alignItems="center">
        <S.Description>
          <span style={{ color: 'var(--color-blue)' }}>{solvedCount}</span>
          명이 이 문제를 풀었어요.
        </S.Description>
      </HStack>
      <S.SolveTime>{formatSolveTime(lastSolvedAt)}</S.SolveTime>
    </S.UserWrapper>
  );
};

export default SolvedUserInfo;
