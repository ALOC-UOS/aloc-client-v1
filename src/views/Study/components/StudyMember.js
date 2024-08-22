import styled from 'styled-components';
import TopContainer from './TopContainer';
import MemberItem from './MemberItem';
import SkeletonMemberItem from './SkeletonMemberItem';

const StudyMember = () => {
  const current_member = 6;
  const total_member = 15;
  const renderDummy = () => {
    let temp = [];
    for (let i = 0; i < current_member; i += 1) {
      temp.push(
        <MemberItem
          member={{ githubId: 'jongbin26', username: '조종빈', studentId: 20, rank: 40 }}
        />
      );
    }
    for (let i = 0; i < total_member - current_member; i += 1) {
      temp.push(<SkeletonMemberItem />);
    }
    return temp.map(el => el);
  };
  return (
    <div style={{ display: 'flex', flexBasis: '50%', flexDirection: 'column' }}>
      <TopContainer current_member={current_member} total_member={total_member} />
      <div
        style={{
          display: 'flex',
          flexBasis: '95%',
          flexDirection: 'row',
          paddingRight: 20,
          overflow: 'scroll',
          WebkitScrollSnapType: 'none',
        }}
      >
        <MemberContainer>{renderDummy()}</MemberContainer>
      </div>
    </div>
  );
};

export default StudyMember;
const MemberContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 30px;
`;
