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
  PurchaseButton,
} from './ItemList.style';
import { toast } from 'sonner';
import GoogleLoginModal from '@/components/common/GoogleLogin/GoogleLoginModal';
import useModal from '@/hooks/useModal';
import useAuth from '@/hooks/useAuth';
import Modal from '@/components/common/Modal';
import { HStack, VStack } from '@/components/common/Stack';
import Button from '@/components/common/Button';
import useUser from '@/hooks/useUser';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => Promise<void>;
  isLoading: boolean;
}

const PurchaseModal = ({ isOpen, onClose, onPurchase, isLoading }: PurchaseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>배경색을 구매하시겠어요?</Modal.Title>
          <Modal.Subtitle>구매한 배경색은 프로필에서 사용할 수 있어요.</Modal.Subtitle>
        </VStack>
        <HStack gap={8} style={{ width: '100%' }}>
          <Button variant="secondary" fullWidth onClick={onClose}>
            닫기
          </Button>
          <Button variant="primary" fullWidth onClick={onPurchase} isLoading={isLoading}>
            구매하기
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};

const ItemList = () => {
  const { isLoading, updateProfileBackgroundColor } = useProfileBackgroundColor();
  const { isOpen: isLoginModalOpen, show: showLoginModal, hide: hideLoginModal } = useModal();
  const {
    isOpen: isPurchaseModalOpen,
    show: showPurchaseModal,
    hide: hidePurchaseModal,
  } = useModal();
  const { isAuthenticated } = useAuth();
  const { user } = useUser();

  const handlePurchaseClick = () => {
    if (!isAuthenticated) {
      showLoginModal();
      return;
    }

    const itemPrice = NORMAL_ITEMS[0].price;
    const userCoin = user?.coin ?? 0;
    if (userCoin < itemPrice) {
      toast.error('코인이 부족합니다 🪙');
      return;
    }

    showPurchaseModal();
  };

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
      hidePurchaseModal();
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
          <PurchaseButton
            onClick={handlePurchaseClick}
            style={{
              opacity: isLoading ? 0.5 : 1,
              pointerEvents: isLoading ? 'none' : 'auto',
            }}
            disabled={isLoading || (user?.coin ?? 0) < item.price}
          >
            {isLoading ? '구매 중...' : '구매'}
          </PurchaseButton>
        </ItemCard>
      ))}
      <GoogleLoginModal isOpen={isLoginModalOpen} onClose={hideLoginModal} />
      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={hidePurchaseModal}
        onPurchase={handlePurchase}
        isLoading={isLoading}
      />
    </ItemContainer>
  );
};

export default ItemList;
