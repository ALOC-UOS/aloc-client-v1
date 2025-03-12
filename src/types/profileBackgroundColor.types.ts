export type ProfileBackgroundColorType = 'common' | 'rare' | 'special';

export interface ProfileBackgroundColor {
  name: string;
  type: ProfileBackgroundColorType;
  color1: string;
  color2: string | null;
  color3: string | null;
  color4: string | null;
  color5: string | null;
  degree: number | null;
}
