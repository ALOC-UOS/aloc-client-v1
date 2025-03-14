import axios from 'axios';

const serverAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

serverAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터 설정
serverAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 에러(인증 실패)이고 재시도하지 않은 요청인 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 리프레시 토큰으로 새 액세스 토큰 요청
        // 쿠키에 저장된 리프레시 토큰은 자동으로 요청에 포함됨
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {});

        if (response.data && response.data.accessToken) {
          // 새 액세스 토큰 저장
          localStorage.setItem('accessToken', response.data.accessToken);

          // 새 토큰으로 원래 요청 재시도
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return serverAPI(originalRequest);
        }
      } catch (refreshError) {
        // 리프레시 토큰도 만료된 경우 로그아웃 처리
        localStorage.removeItem('accessToken');
        // 로그아웃 처리 로직 호출
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export { serverAPI };
