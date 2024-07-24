import { useState } from 'react';
import Modal from '../components/Modal/Modal';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const [isPending, setIsPending] = useState(false);
  const render = ({
    children,
    title,
    description,
    cancelText,
    okText = '확인',
    onOk,
    closable,
  }) => {
    const handleOkButtonClick = () => {
      if (cancelText === '' || isPending) {
        return;
      }
      setIsPending(true);
      onOk();
    };
    if (!isOpen) return null;
    return (
      <Modal
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
    );
  };

  return { isOpen, show, hide, render, setIsPending };
};
