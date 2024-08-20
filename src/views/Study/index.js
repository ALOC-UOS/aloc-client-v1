import { useState } from 'react';
import io from 'socket.io-client';
const Study = () => {
  const [data, setData] = useState('');
  const socket = io.connect('ws://www.iflab.run:8080/ws/chat');
  console.log(!socket.connected);
  socket.on('connection', socket => {
    socket.on('send_message', data => {
      console.log(data);
      setData(data);
      socket.broadcast.emit('receive_message', data);
    });
  });
  return <div>{data}</div>;
};
export default Study;
