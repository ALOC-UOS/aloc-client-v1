import useProfileBackgroundColor from '@/hooks/useProfileBackgroundColor';
import CoinIcon from '../../../assets/icons/coin.svg';
import ChangeColor from '../../../assets/items/change-color.svg';
import { DECORATION_ITEMS, NORMAL_ITEMS } from '../../../lib/constants/Shop';
import { NormalShopItem } from '../../../types/decorationItem.types';
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
import { toast } from 'sonner';

const ItemList = () => {
  const { isLoading, updateProfileBackgroundColor } = useProfileBackgroundColor();

  const handlePurchase = async () => {
    const response = await updateProfileBackgroundColor();
    if (response?.error) {
      toast.error(response.error);
      return;
    }
    
    if (response?.color) {
      toast.success('배경색이 변경되었습니다! 🎨', {
        description: `색상: ${response.color.name} / 희귀도: ${response.color.type}`,
      });
    }
  };

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
            onClick={handlePurchase}
            style={{
              opacity: isLoading ? 0.5 : 1,
              pointerEvents: isLoading ? 'none' : 'auto',
            }}
          >
            {isLoading ? '구매 중...' : '구매'}
          </Button>
        </ItemCard>
      ))}
    </ItemContainer>
  );
};

export default ItemList;
