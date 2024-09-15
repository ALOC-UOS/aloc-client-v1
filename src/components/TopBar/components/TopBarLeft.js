import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import typo from '../../../assets/typo.svg';
const TopBarLeft = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/')}>
      <ImageWrapper>
        <LogoImage src={logo} />
      </ImageWrapper>
      <ImageWrapper>
        <TypoImage src={typo} />
      </ImageWrapper>
    </Container>
  );
};
export default TopBarLeft;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;
const TypoImage = styled.img`
  width: 55px;
  height: 32px;
`;
