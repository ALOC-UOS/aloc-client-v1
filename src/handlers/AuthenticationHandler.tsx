import { useEffect } from 'react';
import ProfileModal from '@/components/service/TopBar/ProfileModal';
import useModal from '@/hooks/useModal';
import useUser from '@/hooks/useUser';
import useAuth from '@/hooks/useAuth';
import useUserCourses from '@/hooks/useUserCourses';

export const AuthenticationHandler = () => {
  const { user, setUser, loadUser } = useUser();
  const { loadUserCourses } = useUserCourses();
  const { isAuthenticated, refreshToken } = useAuth();
  const { isOpen: isProfileModalOpen, show: showProfileModal, hide: hideProfileModal } = useModal();

  useEffect(() => {
    const initUserStatus = async () => {
      // 인증 상태 확인
      if (!isAuthenticated && !(await refreshToken())) {
        setUser(null);
        return;
      }

      // 유저 정보 로드
      await loadUser();

      // 유저가 있고 백준 ID가 없는 경우 프로필 모달 표시
      if (user && !user.baekjoonId) {
        showProfileModal();
        return;
      }

      // 유저 정보가 있는 경우 유저 코스 로드
      if (user) {
        await loadUserCourses();
      }
    };

    initUserStatus();
  }, [isAuthenticated]);

  return <ProfileModal isOpen={isProfileModalOpen} onClose={hideProfileModal} />;
};
