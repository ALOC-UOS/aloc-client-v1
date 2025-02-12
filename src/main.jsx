import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 이 파일이 없으면 삭제 가능

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
