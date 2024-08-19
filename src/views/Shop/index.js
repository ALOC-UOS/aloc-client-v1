import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import CoinIcon from '../../assets/coin-icon.svg';
import DefaultProfile from '../../assets/default-profile.svg';
import ChangeColor from '../../assets/change-color.svg';
import DecorationCharacter from '../../components/Decorations/Character';
import useModal from '../../hooks/useModal';
import useLoginState from '../../hooks/useLoginState';
import useUserState from '../../hooks/useUserState';
import { serverAPI } from '../../api/axios';
import { PRICE } from '../../constants/Shop';
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
  const [changeColorText, setChangeColorText] = useState('');
  const [errorText, setErrorText] = useState('');
  const { isLoggedIn } = useLoginState();
  const { user, setUserInfo } = useUserState();
  const changeColor = async () => {
    await serverAPI
      .put('/color/change')
      .then(response => {
        setChangeColorText(
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              flexDirection: 'column',
            }}
          >
            <div>
              <strong>변경된 색상: </strong>
              {response.data.result.colorName}
            </div>

            <div>
              <strong>남은 코인: </strong>
              {response.data.result.coin}
            </div>
          </div>
        );
        buyModal.hide();
        changeColorSuccessModal.show();
        serverAPI
          .get('/user')
          .then(response => setUserInfo(response.data.result))
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  };
  const openBuyModal = () => {
    if (!isLoggedIn) {
      setErrorText('로그인 후 이용해주세요.');
      errorModal.show();
      return;
    }
    if (user.coin <= PRICE.CHANGE_COLOR_ITEM) {
      setErrorText('코인이 부족합니다 🥲');
      errorModal.show();
      return;
    }
    buyModal.show();
  };
  const buyModal = useModal({
    description: '구매하면 원래 상태로 돌아갈 수 없어요!',
    cancelText: '취소',
    okText: '확인',
    closable: true,
    onOk: changeColor,
  });
  const changeColorSuccessModal = useModal({
    description: changeColorText,
    okText: '확인',
  });
  const errorModal = useModal({
    description: errorText,
    okText: '확인',
  });
  const adminModal = useModal({
    description: '구매 문의는 디스코드로 연락해주세요 😊',
  });
  const DecorationItems = [
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

  const NormalItems = [
    {
      name: '컬러 변경권',
      description: '문제를 풀었을 때 색깔이 변경됩니다.',
      price: PRICE.CHANGE_COLOR_ITEM,
    },
  ];

  return (
    <ShopContainer>
      {buyModal.render()}
      {errorModal.render()}
      {changeColorSuccessModal.render()}
      {adminModal.render()}
      <TopBar />
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
              <Button onClick={adminModal.show}>구매</Button>
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
      </ContentContainer>
    </ShopContainer>
  );
};

export default Shop;
