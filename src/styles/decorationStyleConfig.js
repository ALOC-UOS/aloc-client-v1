import GreenTurtle1 from '../assets/items/green-turtle/1.svg';
import GreenTurtle2 from '../assets/items/green-turtle/2.svg';
import GreenTurtle3 from '../assets/items/green-turtle/3.svg';
import GreenTurtle4 from '../assets/items/green-turtle/4.svg';
import PinkTurtle1 from '../assets/items/pink-turtle/1.svg';
import PinkTurtle2 from '../assets/items/pink-turtle/2.svg';
import PinkTurtle3 from '../assets/items/pink-turtle/3.svg';
import PinkTurtle4 from '../assets/items/pink-turtle/4.svg';
import Wave1 from '../assets/items/wave/1.svg';
import Wave2 from '../assets/items/wave/2.svg';
import Wave3 from '../assets/items/wave/3.svg';
import Bubble from '../assets/items/bubble.svg';

export const decorationStyleConfig = {
  GreenTurtle: {
    position: { top: -48, left: 64 },
    style: { width: 100, height: 100 },
    interval: 500,
    type: 'gif',
    src: [GreenTurtle1, GreenTurtle2, GreenTurtle3, GreenTurtle4],
  },
  PinkTurtle: {
    position: { top: -48, left: 64 },
    style: { width: 100, height: 100 },
    interval: 500,
    type: 'gif',
    src: [PinkTurtle1, PinkTurtle2, PinkTurtle3, PinkTurtle4],
  },
  Wave: {
    position: { top: 66, left: 0 },
    style: { width: 134, height: 49 },
    interval: 300,
    type: 'gif',
    src: [Wave1, Wave2, Wave3],
  },
  Bubble: {
    type: 'multi',
    items: [
      {
        position: { top: -20, left: 30 },
        style: { width: 32, height: 32 },
        delay: 10,
        type: 'animation',
        src: [Bubble],
      },
      {
        position: { top: 30, left: -60 },
        style: { width: 24, height: 24 },
        delay: 500,
        type: 'animation',
        src: [Bubble],
      },
    ],
  },
};
