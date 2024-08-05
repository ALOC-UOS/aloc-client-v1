import S from './style';
import { useState } from 'react';

export const Message = () => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const render = ({ icon = '', children }) => {
    return (
      <S.MessageContainer isOpen={isOpen}>
        {icon && <S.LoadingIcon src={icon} />}
        {children}
      </S.MessageContainer>
    );
  };

  return { render, show, hide };
};

/*

      <S.MessageContainer>
        <S.Text>
          <S.Text blue={true}>1등</S.Text>으로 문제를 풀었어요!
        </S.Text>
      </S.MessageContainer>
      <S.MessageContainer>
        <S.CoinIcon src={CoinIcon} />
        <S.Text>1,090코인</S.Text>
      </S.MessageContainer>
*/
