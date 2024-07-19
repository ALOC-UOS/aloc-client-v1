import { API_BASE_URL } from '../views/Home';
import storeToken from '../utils/auth/storeToken';
import axios from 'axios';
export default class UserService {
  static getRefreshToken = () => {};
  static onRegister = (accessToken, refreshToken, setUserInfo) => {
    storeToken({ accessToken, refreshToken });
    UserService.updateUserInfo(setUserInfo);
  };
  static updateUserInfo = async setUserInfo => {
    const userInfo = await axios.get(`${API_BASE_URL}/users`);
    if (!userInfo) return;
    setUserInfo(userInfo);
  };
}
