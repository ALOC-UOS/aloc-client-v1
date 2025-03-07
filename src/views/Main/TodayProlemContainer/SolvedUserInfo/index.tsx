import S from './style';
import { useEffect, useState } from 'react';
import useSolvedUser from '@/hooks/useSolvedUser';
import { formatSolveTime } from '@/utils/index';
import UserProfileImage from '@/components/UserProfileImage';
import { HStack } from '@/components/Stack';

const ONE_SECOND = 1000;

const SolvedUserInfo = () => {
  const { solvedUserList, isEmpty } = useSolvedUser();
  const [listIndex, setListIndex] = useState(0);
  const [isShowUser, setIsShowUser] = useState(false);

  useEffect(() => {
    if (!solvedUserList) {
      return;
    }

    const showUserInterval = 5 * ONE_SECOND;
    const hideUserDelay = 4 * ONE_SECOND;

    const timer = setInterval(() => {
      setListIndex((prevIndex) => (prevIndex + 1) % solvedUserList.length);
      setIsShowUser(false);
      setTimeout(() => setIsShowUser(true), hideUserDelay);
    }, showUserInterval);

    return () => clearInterval(timer);
  }, [solvedUserList]);

  if (isEmpty) {
    return (
      <S.DefaultUserWrapper>
        <UserProfileImage user={null} />
        <S.Description>아무도 문제를 풀지 않았어요.</S.Description>
        <S.SolveTime>-</S.SolveTime>
      </S.DefaultUserWrapper>
    );
  }

  return (
    <S.UserWrapper isShow={isShowUser}>
      <UserProfileImage user={solvedUserList[listIndex]} />
      <HStack alignItems="center">
        <S.Description>
          <span style={{ color: 'var(--color-blue)' }}>{solvedUserList[listIndex].username}</span>
          님이 문제를 풀었어요.
        </S.Description>
      </HStack>
      <S.SolveTime>{formatSolveTime(solvedUserList[listIndex].solvedAt)}</S.SolveTime>
    </S.UserWrapper>
  );
};

export default SolvedUserInfo;
