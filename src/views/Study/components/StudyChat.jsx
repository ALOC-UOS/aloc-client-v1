import styled from '@emotion/styled';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import ChatFooter from './ChatFooter';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserState from '../../../hooks/useUserState';
import { serverAPI } from '../../../api/axios';

const StudyChat = () => {
  const ws = useRef(null);
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('686a086e-ab25-4017-84f8-eab9b8a9de31');
  const reconnectTimeoutRef = useRef(null);
  const { user } = useUserState();

  // const getRommId = async () => {
  //   const data = await serverAPI
  //     .get('/chat')
  //     .then(response => {
  //       return response.data[0].roomId;
  //     })
  //     .catch(error => console.log(error));
  //   setRoomId(data);
  // };
  // useEffect(() => {
  //   getRommId();
  // }, []);

  const connectWebSocket = (ws, user) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      return;
    }
    ws.current = new WebSocket('wss://api.aloc.kr/ws/chat');
    ws.current.onopen = () => {
      clearTimeout(reconnectTimeoutRef.current);
      if (user) {
        const enterMessage = {
          type: 'ENTER',
          sender: user.username,
          senderInfo: {
            githubId: user.githubId,
            tier: user.rank,
            studentId: user.studentId,
          },
          message: 'Entered the room',
        };
        ws.current.send(JSON.stringify(enterMessage));
      }
    };
    ws.current.onmessage = event => {
      const receivedData = JSON.parse(event.data);
      if (receivedData.sender !== user.username) {
        setData(prev => [
          ...prev,
          <OtherMessage
            key={Date.now()}
            content={{
              githubId: receivedData.senderGithub,
              username: receivedData.sender,
              message: receivedData.message,
              messageTime: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }),
            }}
          />,
        ]);
      }
    };
    ws.current.onclose = event => {
      console.log('WebSocket disconnected. Attempting to reconnect...', event.reason);
      reconnectTimeoutRef.current = setTimeout(() => connectWebSocket(user), 5000);
    };
    ws.current.onerror = error => {
      console.error('WebSocket error:', error);
    };
  };
  useEffect(() => {
    if (user) {
      connectWebSocket(ws, user);
    }
    return () => {
      clearTimeout(reconnectTimeoutRef.current);
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [user]);

  const [data, setData] = useState([
    <OtherMessage
      key="initial"
      content={{
        githubId: 'jongbin26',
        username: '조종빈',
        message: '채팅방에 들어오면 텍스트를 입력하세요',
        messageTime: '14:30',
      }}
    />,
  ]);

  const sendMessage = useCallback(
    content => {
      if (!user) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        const chatMessage = {
          type: 'TALK',
          sender: user.username,
          senderInfo: {
            githubId: user.githubId,
            tier: user.rank,
            studentId: user.studentId,
          },
          message: content.message,
        };
        ws.current.send(JSON.stringify(chatMessage));
        setData(prev => [
          ...prev,
          <MyMessage
            key={Date.now()}
            content={{
              ...content,
              messageTime: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }),
            }}
          />,
        ]);
      } else {
        console.error('WebSocket is not open. ReadyState:', ws.current?.readyState);
      }
    },
    [user]
  );

  return (
    <ChatWrapper>
      <MessageWrapper>{data.map(message => message)}</MessageWrapper>
      <ChatFooter addMyMessage={sendMessage} />
    </ChatWrapper>
  );
};
export default StudyChat;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  background: var(--color-foreground);
  border-radius: 24px;
  overflow: hidden;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-basis: 92%;
  flex-direction: column;
  gap: 25px;
  overflow: scroll;
  padding: 20px 20px 10px 20px;
  scrollbar-width: none;
`;
