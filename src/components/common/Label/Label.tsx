import S from './Label.style';
import { useState } from 'react';
const Label = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <S.LabelContainer isActive={isActive}>
      <S.Circle isActive={isActive} />
      <S.LabelText isActive={isActive}>0일 째</S.LabelText>
    </S.LabelContainer>
  );
};

export default Label;
