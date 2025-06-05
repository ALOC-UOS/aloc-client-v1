import { DecorationItemName } from '@/types/decorationItem.types';

export const PRICE = {
  GREEN_TURTLE: 1000,
  PINK_TURTLE: 1000,
  WAVE: 1500,
  CHANGE_COLOR_ITEM: 100,
  BUBBLE: 2000,
};

export const DECORATION_ITEMS: {
  name: string;
  description: string;
  price: number;
  type: DecorationItemName;
}[] = [
  {
    name: '초록 거북이',
    description: '귀여운 거북이가 엉금엉금 기어오릅니다.',
    price: PRICE.GREEN_TURTLE,
    type: 'GreenTurtle',
  },
  {
    name: '분홍 거북이',
    description: '귀여운 거북이가 엉금엉금 기어오릅니다.',
    price: PRICE.PINK_TURTLE,
    type: 'PinkTurtle',
  },
  {
    name: '파랑 파도',
    description: '바다로 떠나고 싶어지네요.',
    price: PRICE.WAVE,
    type: 'Wave',
  },
  {
    name: '비눗방울',
    description: '비눗방울이 두둥실 떠다닙니다.',
    price: PRICE.BUBBLE,
    type: 'Bubble',
  },
];

export const NORMAL_ITEMS = [
  {
    name: '컬러 변경권',
    description: '문제를 풀었을 때 색깔이 변경됩니다.',
    price: PRICE.CHANGE_COLOR_ITEM,
  },
];
