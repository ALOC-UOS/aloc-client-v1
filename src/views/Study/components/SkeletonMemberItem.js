import styled from 'styled-components';
const SkeletonMemberItem = () => {
  return (
    <MemberItemContainer>
      <div style={{ display: 'flex', lexDirection: 'row', gap: 10 }}>
        <MemberImage />
      </div>
      <RankContainer></RankContainer>
    </MemberItemContainer>
  );
};

export default SkeletonMemberItem;
const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme.foreground};
`;

const MemberImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: ${props => props.theme.foreground};
`;

const MemberItemContainer = styled.div`
  height: 100px;
  flex-basis: 30%;
  padding: 10px;
  border-radius: 50px;
  background: ${props => props.theme.background};
  @media screen and (max-width: 1750px) {
    flex-basis: 45%;
    min-width: 220px;
  }

  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
