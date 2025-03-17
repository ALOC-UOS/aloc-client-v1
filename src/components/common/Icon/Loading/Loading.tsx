import LoadingBlueIcon from '@/assets/icons/loading.blue.svg';
import S from './Loading.style';

const LoadingIcon: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({ ...props }) => {
  return <S.LoadingIcon src={LoadingBlueIcon} width={64} height={64} {...props} />;
};

export default LoadingIcon;
