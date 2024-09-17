import styled, { css } from 'styled-components';

const Message = ({ type, content }) => {
  return (
    <MessageContainer type={type}>
      <MessageText type={type}>{content.message}</MessageText>
      <MessageTime type={type}>{content.messageTime}</MessageTime>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  background: ${props => (props.type === 'MyChat' ? props.theme.primary : props.theme.white)};
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  border-radius: 20px;
  gap: 30px;
  align-items: center;
`;
const MessageText = styled.div`
  letter-spacing: -0.4px;
  color: #000;
  ${props =>
    props.type === 'MyChat' &&
    css`
      color: #fff;
    `}
`;
const MessageTime = styled.div`
  font-weight: 600;
  letter-spacing: -0.4px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  ${props =>
    props.type === 'MyChat' &&
    css`
      color: rgba(255, 255, 255, 0.65);
    `}
`;
