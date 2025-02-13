import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import axios from 'axios';

import './index.css'; // 이 파일이 없으면 삭제 가능

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
