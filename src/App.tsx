import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Shop from '@/views/Shop';
import UserPage from '@/views/User';
import CoursePage from '@/views/Course';
import ProfilePage from '@/views/Profile';
import GoogleAuthCallback from '@/views/GoogleAuthCallback';
import GlobalStyles from '@/styles/global';
import TopBar from '@/components/service/TopBar';
import ProfileModalHandler from '@/handlers/ProfileModalHandler';
import { pathname } from '@/constants/pathnames';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path={pathname.MAIN_PAGE} element={<Main />} />
          <Route path={pathname.USERS_PAGE} element={<UserPage />} />
          <Route path={pathname.COURSE_PAGE} element={<CoursePage />} />
          <Route path={pathname.SHOP_PAGE} element={<Shop />} />
          <Route path={pathname.GOOGLE_AUTH_CALLBACK} element={<GoogleAuthCallback />} />
          <Route path={pathname.PROFILE_PAGE} element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <ProfileModalHandler />
    </>
  );
}

export default App;
