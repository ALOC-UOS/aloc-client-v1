import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Shop from '@/views/Shop';
import UserPage from '@/views/User';
import CoursePage from '@/views/Course';
import GoogleAuthCallback from '@/views/GoogleAuthCallback';
import GlobalStyles from '@/styles/global';
import TopBar from '@/components/service/TopBar';
import useUser from '@/hooks/useUser';
import { useEffect } from 'react';

function App() {
  const { checkLoginStatus } = useUser();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/finish-google-sso" element={<GoogleAuthCallback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
