import React from 'react';
import TopBar from '../../components/TopBar';
import BlackScreen from '../../components/BlackScreen';
import AlertModal from '../../components/Modal/AlertModal';
import BuyModal from '../../components/Modal/BuyModal';
import CoinIcon from '../../assets/coin-icon.svg';
import DefaultProfile from '../../assets/default-profile.svg';
import ChangeColor from '../../assets/change-color.svg';
import DecorationCharacter from '../../components/Decorations/Character';
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
  const DecorationItems = [
    {
      name: '초록 거북이',
      description: '귀여운 거북이가 엉금엉금 기어오릅니다.',
      price: '1,000',
      type: 'GreenTurtle',
    },
    {
      name: '분홍 거북이',
      description: '귀여운 거북이가 엉금엉금 기어오릅니다.',
      price: '1,000',
      type: 'PinkTurtle',
    },
    {
      name: '파랑 파도',
      description: '바다로 떠나고 싶어지네요.',
      price: '1,500',
      type: 'Wave',
    },
  ];

  const NormalItems = [
    {
      name: '컬러 변경권',
      description: '문제를 풀었을 때 색깔이 변경됩니다.',
      price: '100',
    },
  ];

  const [isOpenedModal, setIsOpenedModal] = React.useState(false);
  const [isOpenedBuyModal, setIsOpenedBuyModal] = React.useState(false);

  function openModal() {
    setIsOpenedModal(true);
  }

  function openBuyModal() {
    setIsOpenedBuyModal(true);
  }

  function closeModal() {
    setIsOpenedModal(false);
  }

  function closeBuyModal() {
    setIsOpenedBuyModal(false);
  }

  function acceptModal() {
    setIsOpenedBuyModal(false);
  }

  return (
    <ShopContainer>
      <TopBar />
      <BlackScreen isOpen={isOpenedModal || isOpenedBuyModal} />
      <ContentContainer>
        <ItemContainer>
          {DecorationItems.map((item, index) => (
            <ItemCard key={index}>
              <ItemImgWrapper>
                <DecorationCharacter type={item.type} size={'small'} />
                <ItemImg src={DefaultProfile} />
              </ItemImgWrapper>
              <ItemInfo>
                <InfoWrapper>
                  <ItemName>{item.name}</ItemName>
                  <InfoDescription>{item.description}</InfoDescription>
                </InfoWrapper>
                <ItemPrice>
                  <img src={CoinIcon} />
                  {item.price}
                </ItemPrice>
              </ItemInfo>
              <Button onClick={openModal}>구매</Button>
            </ItemCard>
          ))}
          {NormalItems.map((item, index) => (
            <ItemCard key={index}>
              <ItemImgWrapper>
                <ItemImg src={ChangeColor} />
              </ItemImgWrapper>
              <ItemInfo>
                <InfoWrapper>
                  <ItemName>{item.name}</ItemName>
                  <InfoDescription>{item.description}</InfoDescription>
                </InfoWrapper>
                <ItemPrice>
                  <img src={CoinIcon} />
                  {item.price}
                </ItemPrice>
              </ItemInfo>
              <Button onClick={openBuyModal}>구매</Button>
            </ItemCard>
          ))}
        </ItemContainer>
        <AlertModal
          isOpen={isOpenedModal}
          description={'구매 문의는 디스코드로 연락해주세요 😊'}
          closeModal={closeModal}
        />
        <BuyModal
          isOpen={isOpenedBuyModal}
          description={'구매를 진행하려면 정보를 입력해주세요.'}
          closeModal={closeBuyModal}
        />
      </ContentContainer>
    </ShopContainer>
  );
};

export default Shop;
