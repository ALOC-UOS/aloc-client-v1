import CoinIcon from '../../assets/icons/coin.svg';
import DefaultProfile from '../../assets/images/default-profile.svg';
import ChangeColor from '../../assets/items/change-color.svg';
import DecorationItemComponent from '../../components/service/Decorations/Item';
import { DECORATION_ITEMS, NORMAL_ITEMS } from '../../constants/Shop';
import {
  ShopContainer,
  ContentContainer,
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
} from './style';

const Shop = () => {
  return (
    <ShopContainer>
      <ContentContainer>
        <ItemContainer>
          {DECORATION_ITEMS.map((item, index) => (
            <ItemCard key={index}>
              <ItemImgWrapper>
                <DecorationItemComponent type={item.type} size={'small'} />
                <ItemImg src={DefaultProfile} />
              </ItemImgWrapper>
              <ItemInfo>
                <InfoWrapper>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    <img src={CoinIcon} />
                    {item.price}
                  </ItemPrice>
                </InfoWrapper>
                <InfoDescription>{item.description}</InfoDescription>
              </ItemInfo>
              <Button>구매</Button>
            </ItemCard>
          ))}
          {NORMAL_ITEMS.map((item, index) => (
            <ItemCard key={index}>
              <ItemImgWrapper>
                <ItemImg src={ChangeColor} />
              </ItemImgWrapper>
              <ItemInfo>
                <InfoWrapper>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    <img src={CoinIcon} />
                    {item.price}
                  </ItemPrice>
                </InfoWrapper>
                <InfoDescription>{item.description}</InfoDescription>
              </ItemInfo>
              <Button>구매</Button>
            </ItemCard>
          ))}
        </ItemContainer>
      </ContentContainer>
    </ShopContainer>
  );
};

export default Shop;
