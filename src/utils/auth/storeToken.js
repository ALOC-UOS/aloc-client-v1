const storeToken = ({ accessToken, refreshToken }) => {
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
  if (accessToken) localStorage.setItem('accessToken', accessToken);
};
export default storeToken;
