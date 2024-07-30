import { useState } from 'react';
import ModalWrapper from '../components/Modal/Modal';
import BlackScreen from '../components/BlackScreen';

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
      <>
        <BlackScreen isOpen={isOpen} onClick={hide} />
        <ModalWrapper
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
        </ModalWrapper>
      </>
    );
  };

  return { render, show, hide, setIsPending };
};

export default useModal;
