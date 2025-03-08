import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Member from '@/views/Member';
import Shop from '@/views/Shop';
import { serverAPI, setupInterceptors } from '@/api/axios';
import useLoginState from '@/hooks/useLoginState';
import useUserState from '@/hooks/useUserState';
import GlobalStyles from '@/styles/global';
import TopBar from '@/components/service/TopBar';

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
        <TopBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/member" element={<Member />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
