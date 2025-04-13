import useAuth from '@/hooks/useAuth';
import S from './GoogleLoginButton.style';
import GoogleLogoIcon from '@/assets/icons/google-logo.svg';

const GoogleLoginButton = () => {
  const { getGoogleLoginUrl } = useAuth();

  const handleGoogleLogin = () => {
    window.open(getGoogleLoginUrl(), '_blank', 'width=500,height=600');
  };

  return (
    <S.GoogleLoginButton onClick={handleGoogleLogin}>
      <img src={GoogleLogoIcon} alt="Google" width={24} height={24} />
      <span style={{ color: 'var(--color-title-text)', fontSize: '16px', fontWeight: '500' }}>
        Google 계정으로 계속하기
      </span>
    </S.GoogleLoginButton>
  );
};

export default GoogleLoginButton;
