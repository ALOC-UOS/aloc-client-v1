import { Tier } from '@/types/tier.types';
import S from './TierCircle.style';

import Number0 from '@/assets/icons/roman-number/0.svg';
import Number1 from '@/assets/icons/roman-number/1.svg';
import Number2 from '@/assets/icons/roman-number/2.svg';
import Number3 from '@/assets/icons/roman-number/3.svg';
import Number4 from '@/assets/icons/roman-number/4.svg';
import Number5 from '@/assets/icons/roman-number/5.svg';
import { tierStyleConfig } from '@/styles/tier.config';

type TierCircleSize = 'small' | 'medium' | 'large';

interface TierCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  tier: Tier;
  number: number;
  size?: TierCircleSize;
}

const TierCircle = ({ tier, number, size = 'medium', ...props }: TierCircleProps) => {
  const renderNumber = () => {
    if (number === 1) return Number1;
    if (number === 2) return Number2;
    if (number === 3) return Number3;
    if (number === 4) return Number4;
    if (number === 5) return Number5;
    return Number0;
  };

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
      <img
        src={renderNumber()}
        alt={tier}
        width={numberSize}
        height={numberSize}
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
