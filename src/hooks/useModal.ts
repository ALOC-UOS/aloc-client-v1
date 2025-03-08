import { useState, useCallback } from 'react';

interface UseModalReturn {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

const useModal = (initialState: boolean = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const show = useCallback(() => {
    setIsOpen(true);
  }, []);

  const hide = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    show,
    hide,
    toggle,
  };
};

export default useModal;
