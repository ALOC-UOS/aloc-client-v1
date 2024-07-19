import Cookies from 'js-cookie';
const storeToken = ({ accessToken, refreshToken }) => {
  console.log(accessToken);
  console.log(refreshToken);
  if (refreshToken) Cookies.set('refreshToken', refreshToken, { secure: true });
  if (accessToken) Cookies.set('accessToken', accessToken);
};
export default storeToken;
