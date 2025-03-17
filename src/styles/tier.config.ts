import TierBronzeCircle from '../assets/icons/tier/bronze.circle.svg';
import TierSilverCircle from '../assets/icons/tier/silver.circle.svg';
import TierGoldCircle from '../assets/icons/tier/gold.circle.svg';
import TierPlatinumCircle from '../assets/icons/tier/platinum.circle.svg';
import TierDiamondCircle from '../assets/icons/tier/diamond.circle.svg';
import TierUnrankedSmall from '../assets/icons/tier/unranked.small.svg';
import TierBronzeSmall from '../assets/icons/tier/bronze.small.svg';
import TierSilverSmall from '../assets/icons/tier/silver.small.svg';
import TierGoldSmall from '../assets/icons/tier/gold.small.svg';
import TierPlatinumSmall from '../assets/icons/tier/platinum.small.svg';
import TierDiamondSmall from '../assets/icons/tier/diamond.small.svg';
import { Tier, TierStyleConfig } from '@/types/tier.types';

export const tierStyleConfig: Record<Tier, TierStyleConfig> = {
  unranked: {
    backgroundColor: '#404148',
    color: '#898A90',
    icon: {
      small: TierUnrankedSmall,
      circle: '',
    },
  },
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
  diamond: {
    backgroundColor: '#00315C',
    color: '#00AEFF',
    icon: {
      small: TierDiamondSmall,
      circle: TierDiamondCircle,
    },
  },
};
