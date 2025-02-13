export type ItemName = 'GreenTurtle' | 'PinkTurtle' | 'Wave' | 'Bubble';

export interface DecorationStyleConfig {
  type: string;
  position: { top: number; left: number };
  style: { width: number; height: number };
  src: string;
}
