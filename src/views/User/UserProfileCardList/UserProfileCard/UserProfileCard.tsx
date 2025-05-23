import UserProfileImage from '@/components/service/UserProfileImage';
import { HStack, VStack } from '@/components/common/Stack';
import S from './UserProfileCard.style';
import TierCircle from '@/components/service/TierCircle';
import Label from '@/components/common/Label';
import Line from '@/components/common/Line';
import CoinIcon from '@/assets/icons/coin.svg';
import { UserInfo } from '@/types/user.types';
import { getTierByUserRank, getTierNumberByUserRank } from '@/lib/utils/Tier';

interface UserProfileCardProps {
  user: UserInfo;
}

const UserProfileCard = ({ user }: UserProfileCardProps) => {
  return (
    <S.UserProfileCardContainer>
      <S.TopSection isSolved={user.todaySolved} backgroundColor={user.profileBackgroundColor}>
        <S.CoinWrapper>
          <img src={CoinIcon} alt="coin" width={16} height={16} />
          {user.coin}
        </S.CoinWrapper>
        <S.SolvedAnimation isSolved={user.todaySolved} delay={0} />
        <UserProfileImage user={user} width="120px" height="120px" />
      </S.TopSection>
      <S.BottomSection>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" gap={4}>
            <TierCircle
              tier={user.rank ? getTierByUserRank(user.rank) : 'unranked'}
              number={user.rank ? getTierNumberByUserRank(user.rank) : 0}
            />
            <S.Nickname>{user.nickname}</S.Nickname>
          </HStack>
          <Label text={`${user.consecutiveSolvedDays}일 째`} isActive={user.todaySolved} />
        </HStack>
        <Line />
        <VStack gap={4} alignItems="flex-start">
          <S.AchievementItem>{user.solvedCount}문제 해결</S.AchievementItem>
        </VStack>
      </S.BottomSection>
    </S.UserProfileCardContainer>
  );
};

export default UserProfileCard;
