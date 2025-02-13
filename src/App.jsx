import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Problem from './views/Problem';
import Member from './views/Member';
import Shop from './views/Shop';
import Setting from './views/Setting';
import Login from './views/Login';
import { serverAPI, setupInterceptors } from './api/axios';
import useLoginState from './hooks/useLoginState';
import useUserState from './hooks/useUserState';
import { THEME_OBJECT } from './styles/theme';

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

  return (
    <ThemeProvider theme={THEME_OBJECT[theme]}>
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
