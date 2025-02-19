import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Problem from '@/views/Problem';
import Member from '@/views/Member';
import Shop from '@/views/Shop';
import Login from '@/views/Login';
import { serverAPI, setupInterceptors } from '@/api/axios';
import useLoginState from '@/hooks/useLoginState';
import useUserState from '@/hooks/useUserState';
import GlobalStyles from '@/styles/global';

function App() {
  const { initLoginStatus } = useLoginState();
  const { setUserInfo, deleteUserInfo } = useUserState();

  useEffect(() => {
    setupInterceptors(initLoginStatus);
    serverAPI
      .get('/user')
      .then((response) => {
        const userInfo = response.data.result;
        localStorage.setItem('isLoggedIn', 'true');
        setUserInfo(userInfo);
      })
      .catch((error) => {
        console.error(error);
        initLoginStatus();
        deleteUserInfo();
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/member" element={<Member />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
