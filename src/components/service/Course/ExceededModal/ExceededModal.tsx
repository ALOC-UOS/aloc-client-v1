import React from 'react';
import { VStack } from '@/components/common/Stack';
import Modal from '@/components/common/Modal';
import Button from '@/components/common/Button';

interface ExceededModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExceededModal: React.FC<ExceededModalProps> = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>최대 코스 개수를 넘었어요</Modal.Title>
          <Modal.Subtitle>코스는 동시에 최대 3개까지 선택할 수 있어요</Modal.Subtitle>
        </VStack>
        <Button variant="primary" onClick={handleClose} fullWidth>
          확인
        </Button>
      </VStack>
    </Modal>
  );
};

export default ExceededModal;
