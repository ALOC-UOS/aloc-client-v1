import Number0 from '@/assets/icons/roman-number/0.svg';
import Number1 from '@/assets/icons/roman-number/1.svg';
import Number2 from '@/assets/icons/roman-number/2.svg';
import Number3 from '@/assets/icons/roman-number/3.svg';
import Number4 from '@/assets/icons/roman-number/4.svg';
import Number5 from '@/assets/icons/roman-number/5.svg';

const getNumberSource = (number: number) => {
  if (number === 1) return Number1;
  if (number === 2) return Number2;
  if (number === 3) return Number3;
  if (number === 4) return Number4;
  if (number === 5) return Number5;
  return Number0;
};

interface NumberProps {
  number: number;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  alt?: string;
}

const Number = ({ number, width, height, style, alt = '숫자' }: NumberProps) => {
  const src = getNumberSource(number);

  return <img src={src} alt={alt} width={width} height={height} style={style} />;
};

export default Number;
