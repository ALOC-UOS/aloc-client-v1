import styled from 'styled-components';
import Message from './Message';
import React from 'react';

const OtherMessage = ({ content }) => {
  return (
    <MessageConstainer>
      <MemberImage src={`https://avatars.githubusercontent.com/${content.githubId}`} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <div style={{ fontWeight: 500 }}>{content.username}</div>
        <Message type={'OtherChat'} content={content} />
      </div>
    </MessageConstainer>
  );
};
export default React.memo(OtherMessage);

const MessageConstainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
`;
const MemberImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 40px;
`;
