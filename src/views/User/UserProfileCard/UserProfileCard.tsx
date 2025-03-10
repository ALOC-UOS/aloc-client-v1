import UserProfileImage from '@/components/service/UserProfileImage';
import { HStack, VStack } from '@/components/common/Stack';
import S from './UserProfileCard.style';
import TierCircle from '@/components/service/TierCircle';
import Label from '@/components/common/Label';
import Line from '@/components/common/Line';
import CoinIcon from '@/assets/icons/coin.svg';

const UserProfileCard = () => {
  const isSolved = Math.random() < 0.5;

  return (
    <S.UserProfileCardContainer>
      <S.TopSection isSolved={isSolved}>
        <S.CoinWrapper>
          <img src={CoinIcon} alt="coin" width={16} height={16} />
          240
        </S.CoinWrapper>
        <S.SolvedAnimation isSolved={isSolved} delay={0} />
        <UserProfileImage user={null} width="120px" height="120px" disabled={true} />
      </S.TopSection>
      <S.BottomSection>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" gap={4}>
            <TierCircle tier="gold" number={1} />
            <S.Nickname>이종우</S.Nickname>
          </HStack>
          <Label text="0일 째" isActive={isSolved} />
        </HStack>
        <Line />
        <VStack gap={4} alignItems="flex-start">
          <S.AchievementItem>57문제 해결</S.AchievementItem>
          <S.AchievementItem>코스 10개 완주</S.AchievementItem>
        </VStack>
      </S.BottomSection>
    </S.UserProfileCardContainer>
  );
};

export default UserProfileCard;
