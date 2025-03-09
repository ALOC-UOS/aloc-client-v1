import S from './UserProfileImage.style';
import { UserInfo } from '@/types/user.types';
import DefaultProfile from '@/assets/images/default-profile.svg';

interface UserProfileImageProps {
  user: UserInfo | null;
  width?: string;
  height?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const UserProfileImage = ({
  user,
  width,
  height,
  backgroundColor,
  disabled = false,
}: UserProfileImageProps) => {
  if (!user || !user.profileImageFileName) {
    return (
      <S.ProfileImage
        src={DefaultProfile}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        disabled={disabled}
      />
    );
  }

  const moveToGithubSite = (githubId: string) => {
    window.open(`https://www.github.com/${githubId}`);
  };

  return (
    <S.ProfileImage
      src={`${import.meta.env.VITE_USER_PROFILE_IMAGE_URL}/${user.profileImageFileName}`}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={() => moveToGithubSite(user.githubId)}
      disabled={disabled}
    />
  );
};

export default UserProfileImage;
