import styled from 'styled-components';
import { useTheme } from 'styled-components';
import memberIcon from '../../../assets/member-icon.svg';

const TopContainer = () => {
  const theme = useTheme();
  const current_member = 6;
  const total_member = 12;
  return (
    <Container>
      <Icon src={memberIcon} />
      <TextContainer>
        <p style={{ color: '#5C5E66', fontSize: 24, fontWeight: 700 }}>참여 인원</p>
        <Count>
          <p style={{ color: theme.primary }}>{current_member}</p>
          <p style={{ color: theme.contentText }}>{'/' + total_member}</p>
        </Count>
      </TextContainer>
    </Container>
  );
};
export default TopContainer;

const Container = styled.div`
  display: flex;
  flex-basis: 5%;
  align-items: flex-end;
  gap: 8px;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Count = styled.span`
  display: flex;
  align-items: flex-end;
  font-weight: 700;
  gap: 1px;
`;
