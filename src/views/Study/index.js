import styled from 'styled-components';
import { useState } from 'react';
import StudyMember from './components/StudyMember';
import StudyChat from './components/StudyChat';
import Button from '../../components/Buttons';
import io from 'socket.io-client';

const Study = () => {
  const [isReadyToStudy, setIsReadyToStudy] = useState(true);
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

  const studyStartButtonProps = {
    color: 'gradationBlue',
    buttonType: !isReadyToStudy && 'disabled',
    size: 'big',
    onClick: () => console.log('click'),
  };

  return (
    <div style={{ display: 'flex', padding: 50, flexDirection: 'column', gap: 20 }}>
      <StudyContainer>
        <StudyMember />
        <StudyChat />
      </StudyContainer>
      <Button {...studyStartButtonProps}>참여하기</Button>
    </div>
  );
};
const StudyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 76vh;
  background: #fff;
  border-radius: 24px;
  padding: 20px;
`;
export default Study;
