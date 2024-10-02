import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import typo from '../../../assets/typo.svg';
import { HStack } from '../../../styles/Stack.styles';

const TopBarLeft = () => {
  const navigate = useNavigate();
  return (
    <HStack style={{ gap: 10, cursor: 'pointer' }} onClick={() => navigate('/')}>
      <img src={logo} alt="logo" width="32" height="32" />
      <img src={typo} alt="typo" width="55" height="32" />
    </HStack>
  );
};
export default TopBarLeft;
