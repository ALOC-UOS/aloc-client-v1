import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import axios from 'axios';

import './index.css'; // 이 파일이 없으면 삭제 가능

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
