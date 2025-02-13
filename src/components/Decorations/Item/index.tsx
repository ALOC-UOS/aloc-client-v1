import { useState, useEffect } from 'react';
import S from './style';
import { decorationStyleConfig } from '@/styles/decoration.config';
import { DecorationStyleConfig, ItemName } from '@/types/decoration.types';

interface DecorationItemProps {
  type: ItemName;
  size: 'small' | 'normal';
}

const DecorationItemComponent = ({ type, size }: DecorationItemProps) => {
  const [selectedDecorationItem, setSelectedDecorationItem] =
    useState<DecorationStyleConfig | null>(null);

  useEffect(() => {
    const decorationItem = decorationStyleConfig[type];
    setSelectedDecorationItem(decorationItem);
  }, [type]);

  const renderItem = (item: DecorationStyleConfig | null) => {
    if (!item) return null;

    const itemStyle =
      size === 'small'
        ? {
            width: item.style.width * 0.8,
            height: item.style.height * 0.8,
            top: item.position.top * 0.8,
            left: item.position.left * 0.8,
          }
        : {
            width: item.style.width,
            height: item.style.height,
            top: item.position.top,
            left: item.position.left,
          };

    return <S.DecorationItem src={item.src} {...itemStyle} />;
  };

  return renderItem(selectedDecorationItem);
};

export default DecorationItemComponent;
