export type Tier = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface TierStyleConfig {
  backgroundColor: string;
  color: string;
  icon: {
    small: string;
    circle: string;
  };
}
