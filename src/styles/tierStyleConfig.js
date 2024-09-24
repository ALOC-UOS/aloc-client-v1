import BronzeTierCircle from '../assets/bronze-tier-circle.svg';
import SilverTierCircle from '../assets/silver-tier-circle.svg';
import GoldTierCircle from '../assets/gold-tier-circle.svg';
import PlatinumTierCircle from '../assets/platinum-tier-circle.svg';

import BronzeSmall from '../assets/bronze-small.svg';
import SilverSmall from '../assets/silver-small.svg';
import GoldSmall from '../assets/gold-small.svg';
import PlatinumSmall from '../assets/platinum-small.svg';

export const tierStyleConfig = {
  bronze: {
    backgroundColor: '#4E332B',
    color: '#B97C63',
    icon: {
      small: BronzeSmall,
      circle: BronzeTierCircle,
    },
  },
  silver: {
    backgroundColor: '#233851',
    color: '#ABBAC7',
    icon: {
      small: SilverSmall,
      circle: SilverTierCircle,
    },
  },
  gold: {
    backgroundColor: '#513C23',
    color: '#FFB800',
    icon: {
      small: GoldSmall,
      circle: GoldTierCircle,
    },
  },
  platinum: {
    backgroundColor: '#14463D',
    color: '#03FFC3',
    icon: {
      small: PlatinumSmall,
      circle: PlatinumTierCircle,
    },
  },
};
