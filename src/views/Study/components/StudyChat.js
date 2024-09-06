import styled from 'styled-components';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import ChatFooter from './ChatFooter';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudyChat = () => {
  const ws = useRef(null);
  const navigate = useNavigate();
  const reconnectTimeoutRef = useRef(null);
  const [user, setUser] = useState(null);
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.log('로그인이 필요합니다.');
        setUser(null);
        return;
      }

      const response = await axios.get('https://www.iflab.run/api2/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setUser(response.data.result);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      if (error.response && error.response.status === 401) {
        console.log('Token is invalid or expired');
        localStorage.removeItem('jwtToken');
      }
      setUser(null);
    }
  };
  const connectWebSocket = user => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      console.log('WebSocket already connected');
      return;
    }
    ws.current = new WebSocket('wss://www.iflab.run/ws/chat');
    ws.current.onopen = () => {
      console.log('WebSocket connected');
      clearTimeout(reconnectTimeoutRef.current);
      if (user) {
        const enterMessage = {
          type: 'ENTER',
          roomId: '1ad5fa90-0b20-462b-b58c-30d84cff4746',
          sender: user.name,
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
              githubId: receivedData.sender,
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
    fetchUserInfo();
  }, []);
  useEffect(() => {
    if (user) {
      connectWebSocket(user);
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
          roomId: '1ad5fa90-0b20-462b-b58c-30d84cff4746',
          sender: user.username,
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
    [user, navigate]
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
  background: ${props => props.theme.foreground};
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
