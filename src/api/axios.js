import axios from 'axios';
import { checkTokenExp } from '../utils/checkTokenExp';
import { changeAccessToken } from '../auth/token';

export const serverAPI = axios.create({
  baseURL: 'https://www.iflab.run/api2',
  headers: { 'Content-type': 'application/json' },
});

const getAccessByRefresh = async (config, refreshToken, initLoginStatus) => {
  try {
    const response = await axios.post('https://www.iflab.run/api2/refresh', {
      refreshToken: refreshToken,
    });
    const newAccessToken = response.data.accessToken;
    config.headers.Authorization = `Bearer ${newAccessToken}`;
    changeAccessToken(newAccessToken);
    return config;
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
      // async로 변경
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (accessToken) {
        if (checkTokenExp(accessToken)) {
          // 토큰 만료된 경우
          return await getAccessByRefresh(config, refreshToken, initLoginStatus); // await 추가
        } else {
          // access 유효한 경우
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      }
      // access 없고 refresh만 있는 경우
      if (refreshToken) {
        return await getAccessByRefresh(config, refreshToken, initLoginStatus); // await 추가
      }
      // 둘 다 없는 경우
      if (initLoginStatus) {
        initLoginStatus();
      }
      return config;
    },
    error => Promise.reject(error)
  );
};

// serverAPI.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     const refreshToken = localStorage.getItem('refreshToken');
//     const { initLoginStatus } = useLoginState();
//     if (error.response.status === '401') {
//       serverAPI
//         .post('/refresh', {
//           header: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         })
//         //refresh로 access 재발급
//         .then(response => {
//           const new_accessToken = response.data.accessToken;
//           changeAccessToken(new_accessToken);
//         })
//         .catch(() => {
//           //refresh 만료 시 login 상태 초기화
//           initLoginStatus();
//         });
//     }
//   }
// );
