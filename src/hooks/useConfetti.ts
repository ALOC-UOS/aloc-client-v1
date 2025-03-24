import { atom, useAtom } from 'jotai';

const confettiAtom = atom(false);

const useConfetti = () => {
  const [isActive, setIsActive] = useAtom(confettiAtom);

  const show = () => {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 5000);
  };

  return { isActive, show };
};

export default useConfetti;
