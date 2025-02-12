import React from 'react';
import { ModalContainer, Description } from './style';
import Button from '../../../components/Buttons';

const AlertModal = ({ isOpen, description, closeModal }) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <Description>{description}</Description>
      <Button color={'blue'} buttonType={'active'} size={'medium'} onClick={closeModal}>
        확인
      </Button>
    </ModalContainer>
  );
};

export default AlertModal;
