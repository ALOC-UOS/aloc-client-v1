import Cookies from 'js-cookie';
const storeToken = ({ accessToken, refreshToken }) => {
  if (refreshToken) Cookies.set('refreshToken', refreshToken);
  if (accessToken) Cookies.set('accessToken', refreshToken);
};
export default storeToken;
