import { ReactNode } from 'react';
import S from './Label.style';
import { LabelVariant } from './Label.style';

interface BaseLabelProps {
  variant: LabelVariant;
  children: ReactNode;
  className?: string;
}

interface IconLabelProps extends BaseLabelProps {
  type: 'icon';
  icon: string;
}

interface CircleLabelProps extends BaseLabelProps {
  type: 'circle';
}

type LabelProps = IconLabelProps | CircleLabelProps;

const Label = (props: LabelProps) => {
  const { variant, children, className } = props;

  return (
    <S.Container variant={variant} className={className}>
      {props.type === 'circle' && <S.Circle variant={variant} />}
      {props.type === 'icon' && (
        <S.IconWrapper>
          <img src={props.icon} alt="" aria-hidden={true} />
        </S.IconWrapper>
      )}
      {children}
    </S.Container>
  );
};

export default Label;
