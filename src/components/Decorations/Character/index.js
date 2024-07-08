import React, { useState, useEffect } from 'react';
import DecorationItem from './style';
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

const DecorationItems = [
  {
    id: 'GreenTurtle',
    width: 100,
    height: 100,
    top: -48,
    left: 64,
    delay: 500,
  },
  {
    id: 'PinkTurtle',
    width: 100,
    height: 100,
    top: -48,
    left: 64,
    delay: 500,
  },
  {
    id: 'Wave',
    width: 134,
    height: 49,
    top: 66,
    left: 0,
    delay: 300,
  },
];

const Character = ({ type, size }) => {
  const [selectedDecorationItem, setSelectedDecorationItem] = useState({});
  const [selectedDecorationItemIndex, setSelectedDecorationItemIndex] = useState(0);

  function gifItem() {
    if (type === 'GreenTurtle') {
      return [GreenTurtle1, GreenTurtle2, GreenTurtle3, GreenTurtle4];
    } else if (type === 'PinkTurtle') {
      return [PinkTurtle1, PinkTurtle2, PinkTurtle3, PinkTurtle4];
    } else if (type === 'Wave') {
      return [Wave1, Wave2, Wave3];
    }
  }

  function FindDecorationItem(type) {
    return DecorationItems.find(item => item.id === type);
  }

  useEffect(() => {
    setSelectedDecorationItem(FindDecorationItem(type));
  }, [type]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedDecorationItemIndex((selectedDecorationItemIndex + 1) % gifItem().length);
    }, selectedDecorationItem.delay);

    return () => {
      clearInterval(timer);
    };
  }, [selectedDecorationItemIndex]);

  return (
    <>
      {size === 'small' ? (
        <DecorationItem
          src={gifItem()[selectedDecorationItemIndex]}
          width={selectedDecorationItem.width * 0.8}
          height={selectedDecorationItem.height * 0.8}
          top={selectedDecorationItem.top * 0.8}
          left={selectedDecorationItem.left * 0.8}
        />
      ) : (
        <DecorationItem
          src={gifItem()[selectedDecorationItemIndex]}
          width={selectedDecorationItem.width}
          height={selectedDecorationItem.height}
          top={selectedDecorationItem.top}
          left={selectedDecorationItem.left}
        />
      )}
    </>
  );
};

export default Character;
