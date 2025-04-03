import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Shop from '@/views/Shop';
import UserPage from '@/views/User';
import CoursePage from '@/views/Course';
import ProfilePage from '@/views/Profile';
import GoogleAuthCallback from '@/views/GoogleAuthCallback';
import GlobalStyles from '@/styles/global';
import TopBar from '@/components/service/TopBar';
import useUser from '@/hooks/useUser';
import { useEffect } from 'react';
import ProfileModal from './components/service/TopBar/ProfileModal';
import useModal from './hooks/useModal';

function App() {
  const { user } = useUser();
  const { isOpen: isProfileModalOpen, show: showProfileModal, hide: hideProfileModal } = useModal();

  useEffect(() => {
    if (user && !user.baekjoonId) {
      showProfileModal();
    }
  }, [user]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <TopBar />
        <ProfileModal isOpen={isProfileModalOpen} onClose={hideProfileModal} />
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
