import { atom } from 'jotai';
const initLoginStatus = false;
const loginStatusAtom = atom(localStorage.getItem('isLoggedIn'));
export default loginStatusAtom;
