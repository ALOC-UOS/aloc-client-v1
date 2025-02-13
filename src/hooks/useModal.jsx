import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import { BlackOverlay } from '../components/BlackOverlay';
import styled from '@emotion/styled';
const useModal = ({
  title,
  description,
  cancelText,
  okText = '확인',
  onOk = () => {},
  closable,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => {
    setIsOpen(false);
    setIsPending(false);
  };
  const [isPending, setIsPending] = useState(false);
  const render = ({ children = null } = {}) => {
    const handleOkButtonClick = () => {
      if (cancelText === '' || isPending) {
        return;
      }
      setIsPending(true);
      //onOk return 값을 false로 넘기면 모달 hide X
      if (onOk() === false) {
        setIsPending(false);
        return;
      }
      hide();
    };
    // if (!isOpen) return null;
    return (
      <ModalWrapper isOpen={isOpen}>
        <BlackOverlay isOpen={isOpen} onClick={hide} />
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
  z-index: 200;
  ${props => !props.isOpen && 'opacity:0;pointer-events: none;'}
`;
export default useModal;
