import axios from 'axios';
import { checkTokenExp } from '../utils/checkTokenExp';
import { changeAccessToken } from '../auth/token';

const getAccessByRefresh = async (refreshToken, initLoginStatus) => {
  try {
    console.log('다시 받아 엑세스');
    const response = await axios.post('https://www.iflab.run/api2/refresh', {
      refreshToken: refreshToken,
    });
    const newAccessToken = response.data.accessToken;
    console.log(newAccessToken, '새로 받음');
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
          console.log('유효해 액세스토큰', accessToken);
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
      console.log('보내기 직전 액세스토큰: ', config.headers.Authorization);
      return config;
    },
    error => Promise.reject(error)
  );

  // serverAPI.interceptors.response.use(
  //   response => response,
  //   async error => {
  //     const originalRequest = error.config;
  //     const refreshToken = localStorage.getItem('refreshToken');
  //     if (error.response && error.response.status === 401 && !originalRequest._retry) {
  //       originalRequest._retry = true;
  //       if (refreshToken) {
  //         try {
  //           const newAccessToken = await getAccessByRefresh(refreshToken, initLoginStatus);
  //           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
  //           return serverAPI(originalRequest);
  //         } catch (refreshError) {
  //           if (initLoginStatus) {
  //             initLoginStatus();
  //           }
  //           return Promise.reject(refreshError);
  //         }
  //       } else {
  //         if (initLoginStatus) {
  //           initLoginStatus();
  //         }
  //       }
  //     }
  //     return Promise.reject(error);
  //   }
  // );
};
export const serverAPI = axios.create({
  baseURL: 'https://www.iflab.run/api2',
  headers: { 'Content-type': 'application/json' },
});
