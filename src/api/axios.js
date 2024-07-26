import axios from 'axios';
import { checkTokenExp } from '../utils/checkTokenExp';
import { changeAccessToken } from '../auth/token';

export const serverAPI = axios.create({
  baseURL: 'https://www.iflab.run/api2',
  headers: { 'Content-type': 'application/json' },
});

const getAccessByRefresh = async (config, refreshToken, initLoginStatus) => {
  console.log('재발급입니다.');
  await axios
    .post('https://www.iflab.run/api2/refresh', {
      refreshToken: refreshToken,
    })
    //refresh로 access 재발급
    .then(response => {
      const newAccessToken = response.data.accessToken;
      console.log('재발급받았어요', newAccessToken);
      config.headers.Authorization = `Bearer ${newAccessToken}`;
      changeAccessToken(newAccessToken);
      return config;
    })
    .catch(() => {
      console.log('재발급실패입니다');
      //refresh 만료 시 login 상태 초기화
      if (initLoginStatus) {
        console.log('초기화때립니다');
        initLoginStatus();
      }
    });
};

export const setupInterceptors = initLoginStatus => {
  serverAPI.interceptors.request.use(
    function (config) {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (accessToken) {
        console.log('엑세스는 있어요');
        if (checkTokenExp(accessToken)) {
          //토큰 만료된 경우
          return getAccessByRefresh(config, refreshToken, initLoginStatus);
        } else {
          //access 유효한 경우
          console.log('access 유효합니다');
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        console.log(config.headers.Authorization);
        return config;
      }
      //access 없고 refresh만 있는 경우
      if (refreshToken) {
        return getAccessByRefresh(config, refreshToken, initLoginStatus);
      }
      //둘 다 없는 경우
      if (initLoginStatus) {
        initLoginStatus();
      }
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
