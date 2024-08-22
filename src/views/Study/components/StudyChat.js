import { useTheme } from 'styled-components';
const StudyChat = () => {
  const theme = useTheme();
  return <div style={{ flexBasis: '50%', background: theme.foreground, borderRadius: 24 }}></div>;
};
export default StudyChat;
