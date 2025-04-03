import { useEffect } from 'react';
import ProfileModal from '@/components/service/TopBar/ProfileModal';
import useModal from '@/hooks/useModal';
import useUser from '@/hooks/useUser';

const ProfileModalHandler = () => {
  const { user } = useUser();
  const { isOpen: isProfileModalOpen, show: showProfileModal, hide: hideProfileModal } = useModal();

  useEffect(() => {
    if (user && !user.baekjoonId) {
      showProfileModal();
    }
  }, [user]);

  return <ProfileModal isOpen={isProfileModalOpen} onClose={hideProfileModal} />;
};

export default ProfileModalHandler;
