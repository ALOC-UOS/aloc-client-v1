import React from 'react';
import { HStack, VStack } from '@/components/common/Stack';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';

interface ItemBuyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ItemBuyModal: React.FC<ItemBuyModalProps> = ({ isOpen, onClose }) => {
  const COIN_COUNT = 240;

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleBuy = () => {
    onClose();
    // 구매 로직 추가
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>아이템을 구매하시겠어요?</Modal.Title>
          <Modal.Subtitle>보유중인 코인: {COIN_COUNT}개</Modal.Subtitle>
        </VStack>
        <HStack gap={8}>
          <Button variant="secondary" onClick={handleClose} fullWidth>
            닫기
          </Button>
          <Button variant="primary" onClick={handleBuy} fullWidth>
            구매하기
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default ItemBuyModal;
