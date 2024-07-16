import { useAtom } from 'jotai';

const useUserState = () => {
  const initUserAtomValue = { uesr: null };
  const [{ user }, setUser] = useAtom(initUserAtomValue);

  const setUserInfo = userInfo => {
    setUser({ user: userInfo });
  };

  const deleteUserInfo = () => {
    setUser({ user: null });
  };
  return { user, setUserInfo, deleteUserInfo };
};
export default useUserState;
