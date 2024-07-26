export const storeToken = ({ accessToken, refreshToken }) => {
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
  if (accessToken) localStorage.setItem('accessToken', accessToken);
};

export const deleteToken = () => {
  localStorage.removeItem('refreshToken');
  localStorage.setItem('accessToken');
};
