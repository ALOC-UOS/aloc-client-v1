import styled from 'styled-components';
import Button from '../../../components/Buttons';
import React, { useRef } from 'react';
import { useCallback } from 'react';

const ChatFooter = ({ addMyMessage }) => {
  const inputRef = useRef();
  const sendMessage = useCallback(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // 시각 두 자리로
    const minutes = now.getMinutes().toString().padStart(2, '0'); // 분 두 자리로
    addMyMessage({ message: inputRef.current.value, messageTime: `${hours}:${minutes}` });
    inputRef.current.value = '';
  }, [addMyMessage]);
  return (
    <Container>
      <ChatInputContainer
        onClick={() => inputRef.current.focus()}
        onSubmit={e => e.preventDefault()}
      >
        <ChatInput placeholder="내용을 입력하세요" ref={inputRef} />
        <Button color={'blue'} size={'small'} onClick={sendMessage}>
          전송
        </Button>
      </ChatInputContainer>
    </Container>
  );
};
export default React.memo(ChatFooter);

const ChatInputContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${props => props.theme.background};
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid #a9adb9;
  outline: none;
  letter-spacing: -0.4px;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    border: 1px solid ${props => props.theme.titleText};
  }
`;

const Container = styled.div`
  display: flex;
  flex-basis: 8%;
  justify-content: center;
  background: ${props => props.theme.background};
  padding: 10px;
`;
const ChatInput = styled.input`
  background: ${props => props.theme.background};
  outline: none;
  letter-spacing: -0.4px;
  font-size: 14px;
  border: none;
  width: 88%;
`;
