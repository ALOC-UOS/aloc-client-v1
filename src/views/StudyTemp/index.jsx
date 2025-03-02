import TopBar from '@/components/TopBar';
import S from './style';
import LogoDark from '../../assets/images/logo.season2.dark.png'

const Study = () => {
  return (
    <S.StudyContainer>
      <TopBar />
      <S.EmptyContainer>
        <img src={LogoDark} alt="empty-problem" width={64} height={64} />
        <S.EmptyTitle>페이지 준비 중이에요!</S.EmptyTitle>
      </S.EmptyContainer>
    </S.StudyContainer>
  );
};

export default Study;
