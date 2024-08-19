import React, { useState, useEffect } from 'react';
import { DecorationItem, BubbleItem } from './style';
import GreenTurtle1 from '../../../assets/green-turtle-1.svg';
import GreenTurtle2 from '../../../assets/green-turtle-2.svg';
import GreenTurtle3 from '../../../assets/green-turtle-3.svg';
import GreenTurtle4 from '../../../assets/green-turtle-4.svg';
import PinkTurtle1 from '../../../assets/pink-turtle-1.svg';
import PinkTurtle2 from '../../../assets/pink-turtle-2.svg';
import PinkTurtle3 from '../../../assets/pink-turtle-3.svg';
import PinkTurtle4 from '../../../assets/pink-turtle-4.svg';
import Wave1 from '../../../assets/wave-1.svg';
import Wave2 from '../../../assets/wave-2.svg';
import Wave3 from '../../../assets/wave-3.svg';
import Bubble from '../../../assets/bubble.svg';

const DecorationItems = {
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

const DecorationCharacter = ({ type, size }) => {
  const [selectedDecorationItem, setSelectedDecorationItem] = useState(null);
  const [selectedDecorationItemIndex, setSelectedDecorationItemIndex] = useState(0);

  useEffect(() => {
    const item = DecorationItems[type];
    setSelectedDecorationItem(item);
    setSelectedDecorationItemIndex(0);
  }, [type]);

  useEffect(() => {
    if (!selectedDecorationItem || selectedDecorationItem.type !== 'gif') return;
    const timer = setInterval(() => {
      setSelectedDecorationItemIndex(
        prevIndex => (prevIndex + 1) % selectedDecorationItem.src.length
      );
    }, selectedDecorationItem.interval);

    return () => {
      clearInterval(timer);
    };
  }, [selectedDecorationItem]);

  const renderItem = (item, index) => {
    if (!item) return null;
    console.log(item);
    const itemStyle =
      size === 'small'
        ? {
            width: item.style.width * 0.8,
            height: item.style.height * 0.8,
            top: item.position.top * 0.8,
            left: item.position.left * 0.8,
            delay: item.delay,
          }
        : {
            width: item.style.width,
            height: item.style.height,
            top: item.position.top,
            left: item.position.left,
            delay: item.delay,
          };

    const ItemComponent = item.type === 'gif' ? DecorationItem : BubbleItem;

    return <ItemComponent key={index} src={item.src[selectedDecorationItemIndex]} {...itemStyle} />;
  };
  if (selectedDecorationItem && selectedDecorationItem.type === 'multi') {
    return <>{selectedDecorationItem.items.map((item, index) => renderItem(item, index))}</>;
  }
  return renderItem(selectedDecorationItem, 0);
};

export default DecorationCharacter;
