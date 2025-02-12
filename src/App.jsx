import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Problem from './views/Problem';
import Member from './views/Member';
import Shop from './views/Shop';
import Setting from './views/Setting';
import Login from './views/Login';
import { setupInterceptors } from './api/axios';
import useLoginState from './hooks/useLoginState';
import useUserState from './hooks/useUserState';
import { serverAPI } from './api/axios';
import { useEffect } from 'react';

function App() {
  const { initLoginStatus } = useLoginState();
  const { setUserInfo, deleteUserInfo } = useUserState();

  useEffect(() => {
    setupInterceptors(initLoginStatus);
    serverAPI
      .get('/user')
      .then(response => {
        const userInfo = response.data.result;
        localStorage.setItem('isLoggedIn', true);
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
      yellow: '#ffb800',
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
      yellow: '#ffb800',
      boxShadow: '0 4px 24px 0 #3c414c',
    },
  };
  return (
    <ThemeProvider theme={themeObject[theme]}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/member" element={<Member />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
