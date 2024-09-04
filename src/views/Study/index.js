import styled from 'styled-components';
import { useState, useEffect } from 'react';
import StudyMember from './components/StudyMember';
import StudyChat from './components/StudyChat';
import Button from '../../components/Buttons';
import io from 'socket.io-client';

const Study = () => {
  const [isReadyToStudy, setIsReadyToStudy] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000', {
      path: '/ws/chat',
      transports: ['websocket'],
    });

    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('서버에 연결됨');
    });

    newSocket.on('send_message', data => {
      console.log('메시지 수신:', data);
      setMessages(prevMessages => [...prevMessages, data]);
    });

    return () => {
      newSocket.off('connect');
      newSocket.off('send_message');
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '' && socket) {
      const newMessage = {
        text: inputMessage,
        sender: '나', // 또는 사용자의 이름
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit('send_message', newMessage);
      setInputMessage('');
    }
  };

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
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
          placeholder="메시지 입력"
        />
        <button onClick={sendMessage}>전송</button>
      </div>
      <div>
        <h3>메시지 목록:</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              {msg.sender}: {msg.text} ({msg.timestamp})
            </li>
          ))}
        </ul>
      </div>
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
