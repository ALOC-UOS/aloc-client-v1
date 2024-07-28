import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Problem from './views/Problem';
import Member from './views/Member';
import Shop from './views/Shop';
import Battle from './views/Battle';
import Setting from './views/Setting';
import Login from './views/Login';
import { setupInterceptors } from './api/axios';
import useLoginState from './hooks/useLoginState';
import useUserState from './hooks/useUserState';
import { serverAPI } from './api/axios';
import { useEffect } from 'react';

function App() {
  const { initLoginStatus, setLoginStatus } = useLoginState();
  const { setUserInfo, deleteUserInfo } = useUserState();

  useEffect(() => {
    setupInterceptors(initLoginStatus);
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    serverAPI
      .get('/user')
      .then(response => {
        const userInfo = response.data.result;
        setLoginStatus({ accessToken, refreshToken });
        setUserInfo(userInfo);
      })
      .catch(error => {
        initLoginStatus();
        deleteUserInfo();
      });
  }, []);

  const LIGHT_MODE = 'light';
  const theme = LIGHT_MODE;

  const themeObject = {
    light: {
      mode: 'light',
      background: '#e5e6ec',
      foreground: '#f0f1f5',
      titleText: '#3c414c',
      contentText: '#5c5e66',
      subText: '#a9adb9',
      primary: '#408cff',
      secondary: '#98bffa',
      white: '#ffffff',
      black: '#000000',
      boxShadow: '0 4px 24px 0 #cecece',
    },
    dark: {
      mode: 'dark',
      background: '#1d2128',
      foreground: '#2c3038',
      titleText: '#a0a4b3',
      contentText: '#b4b7c4',
      subText: '#5d616f',
      primary: '#408cff',
      secondary: '#98bffa',
      white: '#ffffff',
      black: '#000000',
      boxShadow: '0 4px 24px 0 #3c414c',
    },
  };
  return (
    <ThemeProvider theme={themeObject[theme]}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/member" element={<Member />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
