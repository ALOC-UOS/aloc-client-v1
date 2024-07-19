import { atom } from 'jotai';
const loginStatusAtom = atom(localStorage.getItem('isLoggedIn'));
export default loginStatusAtom;
