import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Shop from '@/views/Shop';
import UserPage from '@/views/User';
import CoursePage from '@/views/Course';
import ProfilePage from '@/views/Profile';
import GoogleAuthCallback from '@/views/GoogleAuthCallback';
import GlobalStyles from '@/styles/global';
import TopBar from '@/components/service/TopBar';
import { Analytics } from '@vercel/analytics/react';
import { AuthenticationHandler } from '@/handlers/AuthenticationHandler';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { pathname } from '@/constants/pathnames';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <GlobalStyles />
      <Toaster
        richColors
        position="top-center"
        className="my-custom-toast"
        toastOptions={{ style: { borderRadius: '40px' } }}
      />
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
      <Analytics />
      <AuthenticationHandler />
      <SpeedInsights />
    </>
  );
}

export default App;
