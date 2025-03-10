import S from './Label.style';

interface LabelProps {
  text: string;
  isActive?: boolean;
}

const Label = ({ text, isActive = false }: LabelProps) => {
  return (
    <S.LabelContainer isActive={isActive}>
      <S.Circle isActive={isActive} />
      <S.LabelText isActive={isActive}>{text}</S.LabelText>
    </S.LabelContainer>
  );
};

export default Label;
