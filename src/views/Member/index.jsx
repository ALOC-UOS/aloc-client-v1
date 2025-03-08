import { useState } from 'react';
import S from './style';
import DecorationItemComponent from '../../components/service/Decorations/Item';
import TierBronzeEmblem from '../../assets/icons/tier/bronze.emblem.png';
import TierSilverEmblem from '../../assets/icons/tier/silver.emblem.png';
import TierGoldEmblem from '../../assets/icons/tier/gold.emblem.png';
import TierPlatinumEmblem from '../../assets/icons/tier/platinum.emblem.png';
import Number1 from '../../assets/icons/roman-number/1.svg';
import Number2 from '../../assets/icons/roman-number/2.svg';
import Number3 from '../../assets/icons/roman-number/3.svg';
import Number4 from '../../assets/icons/roman-number/4.svg';
import Number5 from '../../assets/icons/roman-number/5.svg';
import CoinIcon from '../../assets/icons/coin.svg';
import LoadingBlueIcon from '../../assets/icons/loading.blue.svg';
import DefaultProfile from '../../assets/images/default-profile.svg';
import Confetti from '../../components/common/Confetti';
import useMember from '../../hooks/useMember';
import UserProfileImage from '@/components/service/UserProfileImage';

const Member = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { getMembers, isLoading, members } = useMember();

  return (
    <S.MemberContainer>
      <S.ContentContainer>
        {isLoading ? (
          <S.BlueLoadingIcon src={LoadingBlueIcon} />
        ) : (
          members.map((member, index) => (
            <S.ProfileWrapper delay={index * 0.15}>
              <S.MemberUserInfoCoin>
                <img src={CoinIcon} alt="coin" />
                {member.coin}
              </S.MemberUserInfoCoin>
              <S.ProfileBackgroundImage
                solved={member.todaySolved}
                category={member.colorCategory}
                color1={member.color1}
                color2={member.color2}
                color3={member.color3}
                color4={member.color4}
                color5={member.color5}
                degree={member.degree}
              >
                {member.baekjoonId === 'alicehrk' && (
                  <DecorationItemComponent type="Bubble" size="normal" />
                )}
                {member.baekjoonId === 'parkne0114' && (
                  <DecorationItemComponent type="PinkTurtle" size="normal" />
                )}
                {member.baekjoonId === 'jojongjojong' && (
                  <DecorationItemComponent type="Wave" size="normal" />
                )}
                <S.SolvedAnimation solved={member.todaySolved} delay={index * 0.25} />
                {!member.todaySolved && (
                  <S.ProfileBlurImage
                    src={
                      member.profileImageFileName
                        ? `${import.meta.env.VITE_USER_PROFILE_IMAGE_URL}/${member.profileImageFileName}`
                        : DefaultProfile
                    }
                  />
                )}
                <S.ProfileLink href={`https://github.com/${member.githubId}`} target="_blank">
                  <UserProfileImage user={member} width="160px" height="160px" />
                </S.ProfileLink>
              </S.ProfileBackgroundImage>
              <S.MemberWrapper>
                <S.ProfileRankWrap href={`https://solved.ac/${member.baekjoonId}`} target="_blank">
                  <S.ProfileRank
                    src={
                      parseInt(member.rank / 10) === 1
                        ? TierBronzeEmblem
                        : parseInt(member.rank / 10) === 2
                          ? TierSilverEmblem
                          : parseInt(member.rank / 10) === 3
                            ? TierGoldEmblem
                            : TierPlatinumEmblem
                    }
                  />
                  <S.ProfileNumber
                    src={
                      member.rank % 10 === 1
                        ? Number1
                        : member.rank % 10 === 2
                          ? Number2
                          : member.rank % 10 === 3
                            ? Number3
                            : member.rank % 10 === 4
                              ? Number4
                              : Number5
                    }
                  />
                </S.ProfileRankWrap>
                <S.MemberName>{member.username}</S.MemberName>
                <S.MemberUserInfoWrapper>
                  <S.MemberUserInfoText>{member.studentId}학번</S.MemberUserInfoText>
                  {/* <MemberUserInfoBar />
                  <MemberUserInfoText>{member.joinedAt}</MemberUserInfoText> */}
                </S.MemberUserInfoWrapper>
                <S.MemberBar />
                <S.MemberInfoWrapper>
                  <S.MemberInfoRow>
                    <S.MemberInfoItem>해결한 문제 수</S.MemberInfoItem>
                    <S.MemberInfoItem blue={true}>{member.solvedCount}개</S.MemberInfoItem>
                  </S.MemberInfoRow>
                  <S.MemberInfoRow>
                    <S.MemberInfoItem>해결하지 못한 문제 수</S.MemberInfoItem>
                    <S.MemberInfoItem blue={true}>{member.unsolvedCount}개</S.MemberInfoItem>
                  </S.MemberInfoRow>
                </S.MemberInfoWrapper>
              </S.MemberWrapper>
            </S.ProfileWrapper>
          ))
        )}
      </S.ContentContainer>
      {showConfetti && <Confetti />}
    </S.MemberContainer>
  );
};

export default Member;
