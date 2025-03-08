import { useState } from 'react';
import CoinIcon from '../../assets/icons/coin.svg';
import DefaultProfile from '../../assets/images/default-profile.svg';
import ChangeColor from '../../assets/items/change-color.svg';
import DecorationItemComponent from '../../components/Decorations/Item';
import useModal from '../../hooks/useModal';
import useLoginState from '../../hooks/useLoginState';
import useUserState from '../../hooks/useUserState';
import { serverAPI } from '../../api/axios';
import { PRICE, DECORATION_ITEMS, NORMAL_ITEMS } from '../../constants/Shop';
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
      .then((response) => {
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
          .then((response) => setUserInfo(response.data.result))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
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

  return (
    <ShopContainer>
      {buyModal.render()}
      {errorModal.render()}
      {changeColorSuccessModal.render()}
      {adminModal.render()}
      <TopBar />
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
              <Button onClick={adminModal.show}>구매</Button>
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
              <Button onClick={openBuyModal}>구매</Button>
            </ItemCard>
          ))}
        </ItemContainer>
      </ContentContainer>
    </ShopContainer>
  );
};

export default Shop;
