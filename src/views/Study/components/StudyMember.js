import styled from 'styled-components';
import TopContainer from './TopContainer';
import MemberItem from './MemberItem';

const StudyMember = () => {
  const renderDummy = () => {
    let temp = [];
    for (let i = 0; i < 4; i += 1) {
      temp.push(
        <MemberItem
          member={{ githubId: 'jongbin26', username: '조종빈', studentId: 20, rank: 40 }}
        />
      );
    }
    return temp.map(el => el);
  };
  return (
    <div style={{ display: 'flex', flexBasis: '50%', flexDirection: 'column' }}>
      <TopContainer />
      <div style={{ display: 'flex', flexBasis: '95%', flexDirection: 'row', paddingRight: 20 }}>
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
