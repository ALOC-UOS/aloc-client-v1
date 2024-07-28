import { atom, useAtom } from 'jotai';
const initUserAtomValue = { uesr: null };
const userAtom = atom(initUserAtomValue);

const useUserState = () => {
  const [{ user }, setUser] = useAtom(userAtom);

  const setUserInfo = userInfo => {
    setUser({ user: userInfo });
  };

  const deleteUserInfo = () => {
    setUser({ user: null });
  };
  return { user, setUserInfo, deleteUserInfo };
};
export default useUserState;
