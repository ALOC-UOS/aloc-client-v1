import TierBronzeCircle from '../assets/icons/tier/bronze.circle.svg';
import TierSilverCircle from '../assets/icons/tier/silver.circle.svg';
import TierGoldCircle from '../assets/icons/tier/gold.circle.svg';
import TierPlatinumCircle from '../assets/icons/tier/platinum.circle.svg';

import TierBronzeSmall from '../assets/icons/tier/bronze.small.svg';
import TierSilverSmall from '../assets/icons/tier/silver.small.svg';
import TierGoldSmall from '../assets/icons/tier/gold.small.svg';
import TierPlatinumSmall from '../assets/icons/tier/platinum.small.svg';

type Tier = 'bronze' | 'silver' | 'gold' | 'platinum';

interface TierStyleConfig {
  backgroundColor: string;
  color: string;
  icon: {
    small: string;
    circle: string;
  };
}

export const tierStyleConfig: Record<Tier, TierStyleConfig> = {
  bronze: {
    backgroundColor: '#4E332B',
    color: '#B97C63',
    icon: {
      small: TierBronzeSmall,
      circle: TierBronzeCircle,
    },
  },
  silver: {
    backgroundColor: '#233851',
    color: '#ABBAC7',
    icon: {
      small: TierSilverSmall,
      circle: TierSilverCircle,
    },
  },
  gold: {
    backgroundColor: '#513C23',
    color: '#FFB800',
    icon: {
      small: TierGoldSmall,
      circle: TierGoldCircle,
    },
  },
  platinum: {
    backgroundColor: '#14463D',
    color: '#03FFC3',
    icon: {
      small: TierPlatinumSmall,
      circle: TierPlatinumCircle,
    },
  },
};
