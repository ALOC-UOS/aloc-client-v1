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

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <TopBar />
        <ProfileModalHandler />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/finish-google-sso" element={<GoogleAuthCallback />} />
          <Route path="/profile/me" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
