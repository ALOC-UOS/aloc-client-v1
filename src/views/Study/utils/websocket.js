import OtherMessage from '../components/OtherMessage';
export const enterChat = (ws, user, reconnectTimeoutRef) => {
  clearTimeout(reconnectTimeoutRef?.current);
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
    ws?.current.send(JSON.stringify(enterMessage));
  }
};

export const exitChat = (ws, user, reconnectTimeoutRef) => {
  clearTimeout(reconnectTimeoutRef?.current);
  if (user) {
    const leaveMessage = {
      type: 'LEAVE',
      sender: user.username,
      senderInfo: {
        githubId: user.githubId,
        tier: user.rank,
        studentId: user.studentId,
      },
      message: 'Leave the room',
    };
    ws?.current.send(JSON.stringify(leaveMessage));
  }
};

export const setMessage = (event, setData, user) => {
  const receivedData = JSON.parse(event.data);

  switch (receivedData.type) {
    case 'ENTER':
      setData(prev => [...prev, <p>{receivedData.sender}님이 입장했습니다</p>]);
      break;
    case 'LEAVE':
      setData(prev => [...prev, <p>{receivedData.sender}님이 퇴장했습니다</p>]);
      break;
    case 'TALK':
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
      break;
    default:
  }
};

export const connectWebSocket = ({ ws, user, reconnectTimeoutRef, setData }) => {
  if (ws && ws.current && ws.current.readyState === WebSocket.OPEN) {
    return;
  }
  if (!ws || !ws.current || ws.current.readyState !== WebSocket.OPEN) {
    ws.current = new WebSocket('wss://www.iflab.run/ws/chat');
    ws.current.onopen = () => enterChat(ws, user, reconnectTimeoutRef);
    ws.current.onmessage = event => setMessage(event, setData, user);
    ws.current.onclose = event => {
      console.log('웹소켓 연결이 끊겼습니다. 재연결 시도중!', event.reason);
      reconnectTimeoutRef.current = setTimeout(
        () => connectWebSocket({ ws, user, reconnectTimeoutRef, setData }),
        5000
      );
    };
    ws.current.onerror = error => {
      console.error('WebSocket error:', error);
    };
  }
};
