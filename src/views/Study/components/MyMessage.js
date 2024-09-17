import styled from 'styled-components';
import Message from './Message';
import React from 'react';
const MyMessage = ({ content }) => {
  return (
    <MessageConstainer>
      <Message type={'MyChat'} content={content} />
    </MessageConstainer>
  );
};
export default React.memo(MyMessage);
const MessageConstainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;
