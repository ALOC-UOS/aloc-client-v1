import styled from 'styled-components';
import MyMessage from './MyMessage';
import ChatFooter from './ChatFooter';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserState from '../../../hooks/useUserState';
import { connectWebSocket } from '../utils/websocket';

const StudyChat = () => {
  const [data, setData] = useState([]);
  const [isNewMessageState, setIsNewMessageState] = useState(false);
  const ws = useRef(null);
  const bottomRef = useRef(null);
  const scrollRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const navigate = useNavigate();
  const { user } = useUserState();

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const isAtBottom = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    return scrollHeight - scrollTop <= clientHeight + 30;
  };

  const isAtScreen = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    return scrollHeight - scrollTop <= clientHeight + 200;
  };

  //scroll 이벤트 등록
  useEffect(() => {
    const handleScroll = () => {
      if (isAtBottom()) {
        setIsNewMessageState(false);
      }
    };
    const messageWrapper = scrollRef.current;
    if (messageWrapper) {
      messageWrapper.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (messageWrapper) {
        messageWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const lastMessageUserName = data[data.length - 1]?.props?.content?.username;
    if (lastMessageUserName === user?.username) {
      scrollToBottom();
      return;
    }
    if (isAtScreen()) {
      scrollToBottom();
      return;
    }
    if (!isAtBottom()) {
      setIsNewMessageState(true);
    }
  }, [data, user?.username]);

  useEffect(() => {
    if (user) {
      connectWebSocket({ ws, user, reconnectTimeoutRef, setData });
    }
    return () => {
      clearTimeout(reconnectTimeoutRef.current);
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [user]);

  const sendMessage = useCallback(
    content => {
      if (!user) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }
      if (ws && ws.current?.readyState === WebSocket.OPEN) {
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
              username: user.username,
              messageTime: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }),
            }}
          />,
        ]);
        scrollToBottom();
      } else {
        console.error('WebSocket is not open. ReadyState:', ws.current?.readyState);
      }
    },
    [user]
  );

  return (
    <ChatWrapper>
      <MessageWrapper ref={scrollRef}>
        {data.map(message => message)}

        <div ref={bottomRef} />
      </MessageWrapper>
      <div
        style={{
          position: 'absolute',
          bottom: 90,
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        {isNewMessageState && (
          <NewMessageButton
            onClick={() => {
              scrollToBottom();
              setIsNewMessageState(false);
            }}
          >
            새로운 채팅이 있어요.
          </NewMessageButton>
        )}
      </div>
      <ChatFooter addMyMessage={sendMessage} />
    </ChatWrapper>
  );
};
export default StudyChat;

const ChatWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  background: ${props => props.theme.foreground};
  border-radius: 24px;
  overflow: hidden;
`;

const MessageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-basis: 92%;
  flex-direction: column;
  gap: 25px;
  overflow: scroll;
  padding: 20px 20px 10px 20px;
  scrollbar-width: none;
`;

const NewMessageButton = styled.button`
  color: white;
  width: 300px;
  height: 30px;
  border: none;
  background: ${props => props.theme.contentText};
  opacity: 0.8;
  border-radius: 10px;
`;
