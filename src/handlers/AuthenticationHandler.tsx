import { useEffect } from 'react';
import ProfileModal from '@/components/service/TopBar/ProfileModal';
import useModal from '@/hooks/useModal';
import useUser from '@/hooks/useUser';
import useAuth from '@/hooks/useAuth';

export const AuthenticationHandler = () => {
  const { user, setUser, loadUser, isLoading } = useUser();
  const { isAuthenticated, refreshToken } = useAuth();
  const { isOpen: isProfileModalOpen, show: showProfileModal, hide: hideProfileModal } = useModal();

  useEffect(() => {
    if (!isLoading && !user?.baekjoonId) {
      showProfileModal();
    }
  }, [isLoading, user?.baekjoonId]);

  useEffect(() => {
    const initLoginStatus = async () => {
      if (!isAuthenticated && !(await refreshToken())) {
        setUser(null);
        return;
      }
      await loadUser();
    };

    initLoginStatus();
  }, [isAuthenticated]);

  return <ProfileModal isOpen={isProfileModalOpen} onClose={hideProfileModal} />;
};
