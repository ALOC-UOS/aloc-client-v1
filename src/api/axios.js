import axios from 'axios';
import { checkTokenExp } from '../utils/checkTokenExp';
import useLoginState from '../hooks/useLoginState';

const serverAPI = axios.create({
  baseURL: 'https://www.iflab.run/api2/',
  headers: { 'Content-type': 'application/json' },
});

serverAPI.interceptors.request.use(
  function (config) {
    const { setLoginStatus, initLoginStatus } = useLoginState();
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken) {
      if (checkTokenExp(accessToken)) {
        //토큰 만료된 경우
        serverAPI
          .post('/refresh', {
            header: {
              Authorization: `Bearer ${refreshToken}`,
            },
          })
          //refresh로 access 재발급
          .then(response => {
            const new_accessToken = response.data.accessToken;
            localStorage.removeItem('accessToken');
            localStorage.setItem('accessToken', new_accessToken);
            config.headers.Authorization = `${new_accessToken}`;
          })
          .catch(() => {
            //refresh 만료 시 login 상태 초기화
            initLoginStatus();
          });
      } else {
        //access 유효한 경우
        config.headers.Authorization = `${accessToken}`;
      }
      return config;
    }
    //login 상태 초기화
    initLoginStatus();
  },
  error => Promise.reject(error)
);

serverAPI.interceptors.response.use(async response => {
  //401에러 터졌을 때 - refresh로 access 재발급 해보고 안되면
});
