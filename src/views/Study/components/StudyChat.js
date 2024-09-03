import styled from 'styled-components';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import ChatFooter from './ChatFooter';
import { useState, useCallback } from 'react';
const StudyChat = () => {
  const [data, setData] = useState([
    <OtherMessage
      content={{
        githubId: 'jongbin26',
        username: '조종빈',
        message: '채팅방에 들어오면 텍스트를 입력하세요',
        messageTime: '14:30',
      }}
    />,
  ]);

  const addMyMessage = useCallback(content => {
    setData(prev => [...prev, <MyMessage content={content} />]);
  }, []);

  return (
    <ChatWrapper>
      <MessageWrapper>{data.map(message => message)}</MessageWrapper>
      <ChatFooter addMyMessage={addMyMessage} />
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
