import React, { useState, useEffect } from 'react';
import S from './style';
import { decorationStyleConfig } from '../../../styles/decorationStyleConfig';

const DecorationItem = ({ type, size }) => {
  const [selectedDecorationItem, setSelectedDecorationItem] = useState(null);
  const [selectedDecorationItemIndex, setSelectedDecorationItemIndex] = useState(0);

  useEffect(() => {
    const item = decorationStyleConfig[type];
    setSelectedDecorationItem(item);
    setSelectedDecorationItemIndex(0);
  }, [type]);

  useEffect(() => {
    if (!selectedDecorationItem || selectedDecorationItem.type !== 'gif') {
      return;
    }

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

    const ItemComponent = item.type === 'gif' ? S.DecorationItem : S.BubbleItem;

    return <ItemComponent key={index} src={item.src[selectedDecorationItemIndex]} {...itemStyle} />;
  };

  if (selectedDecorationItem && selectedDecorationItem.type === 'multi') {
    return <>{selectedDecorationItem.items.map((item, index) => renderItem(item, index))}</>;
  }

  return renderItem(selectedDecorationItem, 0);
};

export default DecorationItem;
