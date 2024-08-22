import styled from 'styled-components';
import Bronze from '../../../assets/bronze-small.svg';
import Silver from '../../../assets/silver-small.svg';
import Gold from '../../../assets/gold-small.svg';
import Platinum from '../../../assets/platinum-small.svg';
import Number1 from '../../../assets/number-1.svg';
import Number2 from '../../../assets/number-2.svg';
import Number3 from '../../../assets/number-3.svg';
import Number4 from '../../../assets/number-4.svg';
import Number5 from '../../../assets/number-5.svg';

const MemberItem = ({ member }) => {
  return (
    <MemberItemContainer>
      <div style={{ display: 'flex', lexDirection: 'row', gap: 10 }}>
        <MemberImage src={`https://avatars.githubusercontent.com/${member.githubId}`} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ color: '#98BFFA', fontWeight: 500 }}>{member.studentId}학번</p>
          <p style={{ color: '#ffffff', fontSize: 20, fontWeight: 500 }}>{member.username}</p>
        </div>
      </div>
      <RankContainer>
        <MemberRank
          src={
            parseInt(member.rank / 10) === 1
              ? Bronze
              : parseInt(member.rank / 10) === 2
                ? Silver
                : parseInt(member.rank / 10) === 3
                  ? Gold
                  : Platinum
          }
        />
        <MemberNumber
          src={
            member.rank % 10 === 1
              ? Number1
              : member.rank % 10 === 2
                ? Number2
                : member.rank % 10 === 3
                  ? Number3
                  : member.rank % 10 === 4
                    ? Number4
                    : Number5
          }
        />
      </RankContainer>
    </MemberItemContainer>
  );
};

export default MemberItem;
const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme.titleText};
`;
const MemberRank = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: 0.6;
`;
const MemberNumber = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
`;

const MemberImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const MemberItemContainer = styled.div`
  height: 100px;
  flex-basis: 30%;
  padding: 10px;
  border-radius: 50px;
  background: ${props => props.theme.primary};
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
