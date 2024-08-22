import styled, { useTheme } from 'styled-components';
import { useState } from 'react';
import TopContainer from './components/TopContainer';
import MemberItem from './components/MemberItem';
import io from 'socket.io-client';

const Study = () => {
  const [isReadyToStudy, setIsReadyToStudy] = useState(false);
  const theme = useTheme();
  const TOTAL_MEMBER = 12;
  const NOW_MEMVER = 6;
  // const [data, setData] = useState('');
  // const socket = io.connect('ws://www.iflab.run:8080/ws/chat');
  // console.log(!socket.connected);
  // socket.on('connection', socket => {
  //   socket.on('send_message', data => {
  //     console.log(data);
  //     setData(data);
  //     socket.broadcast.emit('receive_message', data);
  //   });
  // });

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
    <div style={{ padding: 50 }}>
      <StudyContainer>
        <div style={{ display: 'flex', flexBasis: '50%', flexDirection: 'column' }}>
          <TopContainer total_member={TOTAL_MEMBER} current_member={NOW_MEMVER} />
          <div
            style={{ display: 'flex', flexBasis: '95%', flexDirection: 'row', paddingRight: 20 }}
          >
            <MemberContainer>{renderDummy()}</MemberContainer>
          </div>
        </div>
        <div style={{ flexBasis: '50%', background: theme.foreground, borderRadius: 24 }}></div>
      </StudyContainer>
    </div>
  );
};

const MemberContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 30px;
`;
const StudyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  background: #fff;
  border-radius: 24px;
  padding: 20px;
`;

export default Study;
