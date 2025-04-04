import { Tier } from '@/types/tier.types';
import S from './TierCircle.style';
import { tierStyleConfig } from '@/styles/tier.config';
import Number from './Number';

type TierCircleSize = 'small' | 'medium' | 'large';

interface TierCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  tier: Tier;
  number: number;
  size?: TierCircleSize;
}

const TierCircle = ({ tier, number, size = 'medium', ...props }: TierCircleProps) => {
  const sizeConfig = {
    small: {
      circleSize: 24,
      tierSize: 16,
      numberSize: 12,
    },
    medium: {
      circleSize: 36,
      tierSize: 24,
      numberSize: 16,
    },
    large: {
      circleSize: 48,
      tierSize: 32,
      numberSize: 20,
    },
  };

  const { circleSize, tierSize, numberSize } = sizeConfig[size];

  return (
    <S.TierCircle width={circleSize} height={circleSize} {...props}>
      <img src={tierStyleConfig[tier].icon.small} alt={tier} width={tierSize} height={tierSize} />
      <Number
        number={number}
        width={numberSize}
        height={numberSize}
        alt={`${tier} ${number}`}
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '0px',
          transform: 'translateX(-50%)',
        }}
      />
    </S.TierCircle>
  );
};

export default TierCircle;
