import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileModal from '@/components/service/TopBar/ProfileModal';
import useModal from '@/hooks/useModal';
import useUser from '@/hooks/useUser';
import useAuth from '@/hooks/useAuth';
import useUserCourses from '@/hooks/useUserCourses';
import { pathname, PROTECTED_ROUTES } from '@/lib/constants/pathnames';

export const AuthenticationHandler = () => {
  const { user, setUser, loadUser } = useUser();
  const { loadUserCourses } = useUserCourses();
  const { isAuthenticated, refreshToken } = useAuth();
  const { isOpen: isProfileModalOpen, show: showProfileModal, hide: hideProfileModal } = useModal();
  const location = useLocation();
  const navigate = useNavigate();

  // 인증 상태 체크 및 유저 정보 로드
  useEffect(() => {
    const initUserStatus = async () => {
      // 인증 상태 확인
      if (!isAuthenticated && !(await refreshToken())) {
        setUser(null);
        // 인증이 필요한 라우트에서 유저가 없는 경우 메인으로 리다이렉션
        if (PROTECTED_ROUTES.includes(location.pathname)) {
          navigate(pathname.MAIN_PAGE, { replace: true });
        }
        return;
      }

      // 유저 정보 로드
      await loadUser();
    };

    initUserStatus();
    // 컴포넌트 마운트 시와 인증 상태가 변경될 때만 실행
    // 보호된 라우트로 이동할 때만 체크 추가
  }, [isAuthenticated, PROTECTED_ROUTES.includes(location.pathname) ? location.pathname : null]);

  // 유저 상태 감지하여 백준 ID 확인 및 유저 코스 로드
  useEffect(() => {
    const handleUserChange = async () => {
      // 유저가 없으면 무시
      if (!user) return;

      // 백준 ID가 없는 경우 프로필 모달 표시
      if (!user.baekjoonId) {
        showProfileModal();
        return;
      }

      // 유저 코스 로드
      await loadUserCourses();
    };

    handleUserChange();
  }, [user]);

  return <ProfileModal isOpen={isProfileModalOpen} onClose={hideProfileModal} />;
};
