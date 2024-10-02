import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import typo from '../../../assets/typo.svg';
import S from '../style';

const TopBarLeft = () => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate('/')}>
      <S.ImageWrapper>
        <S.LogoImage src={logo} />
      </S.ImageWrapper>
      <S.ImageWrapper>
        <S.TypoImage src={typo} />
      </S.ImageWrapper>
    </S.Container>
  );
};
export default TopBarLeft;
