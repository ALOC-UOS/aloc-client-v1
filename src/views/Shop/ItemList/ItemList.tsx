import CoinIcon from '../../../assets/icons/coin.svg';
import ChangeColor from '../../../assets/items/change-color.svg';
import { DECORATION_ITEMS, NORMAL_ITEMS } from '../../../lib/constants/Shop';
import { DecorationShopItem, NormalShopItem } from '../../../types/decorationItem.types';
import {
  ItemContainer,
  ItemCard,
  ItemImgWrapper,
  ItemImg,
  ItemInfo,
  InfoWrapper,
  ItemName,
  InfoDescription,
  ItemPrice,
  Button,
} from './ItemList.style';
import axios from 'axios';
import { useState, useCallback } from 'react';

const ItemList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePurchase = useCallback(
    async (item: DecorationShopItem | NormalShopItem, index: number, isDecoration: boolean) => {
      try {
        setIsLoading(true);
        setSelectedIndex(index);
        const token = localStorage.getItem('token');
        if (!token) {
          alert('로그인이 필요합니다.');
          return;
        }
        const response = await axios.post(
          '/user/profile-background-color',
          {
            itemId: isDecoration ? (item as DecorationShopItem).type : item.name,
            price: item.price,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          alert('구매가 완료되었습니다.');
        }
      } catch (e) {
        alert('구매 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
        setSelectedIndex(null);
      }
    },
    []
  );

  return (
    <ItemContainer>
      {/*
          {DECORATION_ITEMS.map((item: DecorationShopItem, index: number) => (
            <ItemCard key={index}>
              <ItemImgWrapper>
                <DecorationItemComponent type={item.type} size="small" />
                <ItemImg src={DefaultProfile} alt="Default Profile" />
              </ItemImgWrapper>
              <ItemInfo>
                <InfoWrapper>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    <img src={CoinIcon} alt="Coin" />
                    {item.price}
                  </ItemPrice>
                </InfoWrapper>
                <InfoDescription>{item.description}</InfoDescription>
              </ItemInfo>
              <Button
                onClick={() => handlePurchase(item, index, true)}
                style={{ opacity: isLoading && selectedIndex === index ? 0.5 : 1, pointerEvents: isLoading && selectedIndex === index ? 'none' : 'auto' }}
              >
                {isLoading && selectedIndex === index ? '구매 중...' : '구매'}
              </Button>
            </ItemCard>
          ))}
          */}
      {NORMAL_ITEMS.map((item: NormalShopItem, index: number) => (
        <ItemCard key={index + DECORATION_ITEMS.length}>
          <ItemImgWrapper>
            <ItemImg src={ChangeColor} alt="Change Color" />
          </ItemImgWrapper>
          <ItemInfo>
            <InfoWrapper>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>
                <img src={CoinIcon} alt="Coin" />
                {item.price}
              </ItemPrice>
            </InfoWrapper>
            <InfoDescription>{item.description}</InfoDescription>
          </ItemInfo>
          <Button
            onClick={() => handlePurchase(item, index + DECORATION_ITEMS.length, false)}
            style={{
              opacity: isLoading && selectedIndex === index + DECORATION_ITEMS.length ? 0.5 : 1,
              pointerEvents:
                isLoading && selectedIndex === index + DECORATION_ITEMS.length ? 'none' : 'auto',
            }}
          >
            {isLoading && selectedIndex === index + DECORATION_ITEMS.length ? '구매 중...' : '구매'}
          </Button>
        </ItemCard>
      ))}
    </ItemContainer>
  );
};

export default ItemList;
