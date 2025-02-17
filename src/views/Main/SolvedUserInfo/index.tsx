import S from "./style";
import { useEffect, useState } from "react";
import useSolvedUser from "@/hooks/useSolvedUser";
import { formatSolveTime } from '@/utils/index';
import UserProfileImage from "@/components/UserProfileImage";

const ONE_SECOND = 1000;

const SolvedUserInfo = () => {
  const { solvedUserList } = useSolvedUser();
  const [listIndex, setListIndex] = useState(0);
  const [isShowUser, setIsShowUser] = useState(false);

  useEffect(() => {
    if (!solvedUserList) {
      return;
    }

    const showMemberInterval = 5 * ONE_SECOND;
    const hideMemberDelay = 4 * ONE_SECOND;

    const timer = setInterval(() => {
      setListIndex(prevIndex => (prevIndex + 1) % solvedUserList.length);
      setIsShowUser(false);
      setTimeout(() => setIsShowUser(true), hideMemberDelay);
    }, showMemberInterval);

    return () => clearInterval(timer);
  }, [solvedUserList]);
    

  if (solvedUserList.length === 0) {
    return (
      <S.DefaultMemberWrapper>
        <UserProfileImage user={null} />
        <S.Description>아무도 문제를 풀지 않았어요.</S.Description>
        <S.SolveTime>-</S.SolveTime>
      </S.DefaultMemberWrapper>
    );
  }


  return (
    <S.MemberWrapper isShow={isShowUser}>
      <UserProfileImage user={solvedUserList[listIndex]} />
      <S.Description>
        <S.MemberName>{solvedUserList[listIndex].username}</S.MemberName>
        님이 문제를 풀었어요.
      </S.Description>
      <S.SolveTime>{formatSolveTime(solvedUserList[listIndex].solvedAt)}</S.SolveTime>
    </S.MemberWrapper>
  );
};

export default SolvedUserInfo;