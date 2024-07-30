import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import BlackScreen from '../components/BlackScreen';
import styled from 'styled-components';
const useModal = ({ title, description, cancelText, okText = '확인', onOk, closable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const [isPending, setIsPending] = useState(false);
  const render = ({ children }) => {
    const handleOkButtonClick = () => {
      if (cancelText === '' || isPending) {
        return;
      }
      setIsPending(true);
      onOk();
      hide();
    };
    if (!isOpen) return null;
    return (
      <ModalWrapper>
        <BlackScreen isOpen={isOpen} onClick={hide} />
        <Modal
          isOpen={isOpen}
          title={title}
          description={description}
          cancelText={cancelText}
          okText={okText}
          handleOkButtonClick={handleOkButtonClick}
          closable={closable}
          hide={hide}
        >
          {children}
        </Modal>
      </ModalWrapper>
    );
  };

  return { render, show, hide, setIsPending };
};
const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default useModal;
