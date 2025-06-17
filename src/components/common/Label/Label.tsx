import { ReactNode } from 'react';
import S from './Label.style';
import { LabelVariant } from './Label.style';

interface LabelProps {
  variant: LabelVariant;
  icon?: string;
  children: ReactNode;
  className?: string;
  showCircle?: boolean;
}

const Label = ({ variant, icon, children, className, showCircle = false }: LabelProps) => {
  return (
    <S.Container variant={variant} className={className}>
      {showCircle && <S.Circle variant={variant} />}
      {icon && (
        <S.IconWrapper>
          <img src={icon} alt="" />
        </S.IconWrapper>
      )}
      {children}
    </S.Container>
  );
};

export default Label;
