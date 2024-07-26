import { atom, useAtom } from 'jotai';
import { storeToken, deleteToken } from '../auth/token';

export const loginStatusAtom = atom(localStorage.getItem('isLoggedIn'));

const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(loginStatusAtom);

  const setLoginStatus = ({ accessToken, refreshToken }) => {
    storeToken({ accessToken, refreshToken });
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const initLoginStatus = () => {
    deleteToken();
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, setLoginStatus, initLoginStatus };
};
export default useLoginState;
