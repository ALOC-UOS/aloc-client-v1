import { ItemName, DecorationStyleConfig } from '@/types/decoration.types';
import GreenTurtle from '../assets/items/green-turtle.gif';
import PinkTurtle from '../assets/items/pink-turtle.gif';
import Wave from '../assets/items/wave.gif';
import Bubble from '../assets/items/bubble.gif';

// 추후에 Interface 분리
export const decorationStyleConfig: Record<ItemName, DecorationStyleConfig> = {
  GreenTurtle: {
    type: 'gif',
    position: { top: -48, left: 64 },
    style: { width: 100, height: 100 },
    src: GreenTurtle,
  },
  PinkTurtle: {
    type: 'gif',
    position: { top: -48, left: 64 },
    style: { width: 100, height: 100 },
    src: PinkTurtle,
  },
  Wave: {
    type: 'gif',
    position: { top: 60, left: 0 },
    style: { width: 120, height: 40 },
    src: Wave,
  },
  Bubble: {
    type: 'gif',
    position: { top: 0, left: 0 },
    style: { width: 160, height: 160 },
    src: Bubble,
  },
};
