export type Tier = 'unranked' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'ruby';

export interface TierStyleConfig {
  backgroundColor: string;
  color: string;
  icon: {
    small: string;
    circle: string;
  };
}
