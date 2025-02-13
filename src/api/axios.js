import axios from 'axios';
import { checkTokenExp } from '../utils/checkTokenExp';
import { changeAccessToken } from '../auth/token';

const getAccessByRefresh = async (refreshToken, initLoginStatus) => {
  try {
    const response = await axios.post('/refresh', {
      refreshToken: refreshToken,
    });
    const newAccessToken = response.data.accessToken;
    changeAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    // refresh 만료 시 login 상태 초기화
    if (initLoginStatus) {
      initLoginStatus();
    }
    throw error;
  }
};

export const setupInterceptors = initLoginStatus => {
  serverAPI.interceptors.request.use(
    async function (config) {
      let accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (accessToken) {
        if (checkTokenExp(accessToken)) {
          // 토큰 만료된 경우
          try {
            accessToken = await getAccessByRefresh(refreshToken, initLoginStatus);
            config.headers.Authorization = `Bearer ${accessToken}`;
          } catch (error) {
            return Promise.reject(error);
          }
        } else {
          // access 유효한 경우
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      } else if (refreshToken) {
        // access 없고 refresh만 있는 경우
        try {
          accessToken = await getAccessByRefresh(refreshToken, initLoginStatus);
          config.headers.Authorization = `Bearer ${accessToken}`;
        } catch (error) {
          return Promise.reject(error);
        }
      } else {
        // 둘 다 없는 경우
        if (initLoginStatus) {
          initLoginStatus();
        }
      }
      return config;
    },
    error => Promise.reject(error)
  );
};

export const serverAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});
