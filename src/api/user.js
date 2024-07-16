import storeToken from '../utils/auth/storeToken';
import axios from 'axios';
export default class UserServise {
  static getRefreshToken = () => {};
  static onRegister = (accessToken, refreshToken, setUserInfo) => {
    storeToken({ accessToken, refreshToken });
    UserServise.updateUserInfo(setUserInfo);
  };
  static updateUserInfo = async setUserInfo => {
    const userInfo = await axios.get('https://www.iflab.run/api2/users');
    if (!userInfo) return;
    setUserInfo(userInfo);
  };
}
