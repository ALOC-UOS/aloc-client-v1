import S from './UserProfileImage.style';
import { UserInfo } from '@/types/user.types';
import DefaultProfile from '@/assets/images/default-profile.svg';
import LoadingIcon from '@/components/common/Icon/Loading';
import { HStack } from '@/components/common/Stack';
import { moveToBaekjoonProfileSite } from '@/lib/utils/index';

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
  const handleClick = () => {
    if (disabled || !user?.baekjoonId) return;
    moveToBaekjoonProfileSite(user.baekjoonId);
  };

  const profileImageUrl = user?.profileImageFileName
    ? `${import.meta.env.VITE_USER_PROFILE_IMAGE_URL}/${user.profileImageFileName}`
    : DefaultProfile;

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      style={{ position: 'relative', width: `${width}`, height: `${height}` }}
    >
      <S.ProfileImage
        src={profileImageUrl}
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
