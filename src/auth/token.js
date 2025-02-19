export const storeToken = ({ accessToken, refreshToken }) => {
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
  if (accessToken) localStorage.setItem('accessToken', accessToken);
};

export const deleteToken = () => {
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('accessToken');
};

export const changeAccessToken = (newAccessToken) => {
  localStorage.removeItem('accessToken');
  localStorage.setItem('accessToken', newAccessToken);
};
