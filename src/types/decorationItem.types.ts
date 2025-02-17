export type DecorationItemName = 'GreenTurtle' | 'PinkTurtle' | 'Wave' | 'Bubble';

export type DecorationItemSize = 'small' | 'normal';

export interface DecorationStyleConfig {
  type: string;
  position: { top: number; left: number };
  style: { width: number; height: number };
  src: string;
}
