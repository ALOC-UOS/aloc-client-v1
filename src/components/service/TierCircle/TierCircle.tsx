import { Tier } from '@/types/tier.types';
import S from './TierCircle.style';

import Number1 from '@/assets/icons/roman-number/1.svg';
import Number2 from '@/assets/icons/roman-number/2.svg';
import Number3 from '@/assets/icons/roman-number/3.svg';
import Number4 from '@/assets/icons/roman-number/4.svg';
import Number5 from '@/assets/icons/roman-number/5.svg';
import { tierStyleConfig } from '@/styles/tier.config';

interface TierCircleProps {
  tier: Tier;
  number: number;
  width?: string;
  height?: string;
}

const TierCircle = ({ tier, number }: TierCircleProps) => {
  const renderNumber = () => {
    if (number === 1) return Number1;
    if (number === 2) return Number2;
    if (number === 3) return Number3;
    if (number === 4) return Number4;
    return Number5;
  };
  return (
    <S.TierCircle>
      <img src={tierStyleConfig[tier].icon.small} alt={tier} />
      <img
        src={renderNumber()}
        alt={tier}
        width={16}
        height={16}
        style={{ position: 'absolute', left: '50%', bottom: '0px', transform: 'translateX(-50%)' }}
      />
    </S.TierCircle>
  );
};

export default TierCircle;
