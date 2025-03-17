import S from './UserProfileImage.style';
import { UserInfo } from '@/types/user.types';
import DefaultProfile from '@/assets/images/default-profile.svg';
import LoadingIcon from '@/components/common/Icon/Loading';
import { HStack } from '@/components/common/Stack';

interface UserProfileImageProps {
  user: UserInfo | null;
  width?: string;
  height?: string;
  backgroundColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const UserProfileImage = ({
  user,
  width,
  height,
  backgroundColor,
  disabled = false,
  isLoading = false,
}: UserProfileImageProps) => {
  if (!user || !user.profileImageFileName) {
    return (
      <HStack
        alignItems="center"
        justifyContent="center"
        style={{ position: 'relative', width: `${width}`, height: `${height}` }}
      >
        <S.ProfileImage
          src={DefaultProfile}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          disabled={disabled}
          isLoading={isLoading}
        />
        {isLoading && <LoadingIcon />}
      </HStack>
    );
  }

  const moveToBaekjoonSite = (baekjoonId: string) => {
    window.open(`https://www.acmicpc.net/user/${baekjoonId}`);
  };

  const handleClick = () => {
    if (disabled || !user.baekjoonId) {
      return;
    }

    moveToBaekjoonSite(user.baekjoonId);
  };

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      style={{ position: 'relative', width: `${width}`, height: `${height}` }}
    >
      <S.ProfileImage
        src={`${import.meta.env.VITE_USER_PROFILE_IMAGE_URL}/${user.profileImageFileName}`}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        onClick={handleClick}
        disabled={disabled}
        isLoading={isLoading}
      />
      {isLoading && <LoadingIcon />}
    </HStack>
  );
};

export default UserProfileImage;
