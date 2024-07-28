import { atom, useAtom } from 'jotai';
import { storeToken, deleteToken } from '../auth/token';
import useUserState from './useUserState';

export const loginStatusAtom = atom(localStorage.getItem('isLoggedIn'));

const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(loginStatusAtom);
  const { user, deleteUserInfo } = useUserState();

  const setLoginStatus = ({ accessToken, refreshToken }) => {
    storeToken({ accessToken, refreshToken });
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const initLoginStatus = () => {
    deleteToken();
    localStorage.removeItem('isLoggedIn');
    user && deleteUserInfo();
    setIsLoggedIn(false);
  };

  return { isLoggedIn, setLoginStatus, initLoginStatus };
};
export default useLoginState;
