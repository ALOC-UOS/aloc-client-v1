interface LineProps {
  width?: string;
  color?: string;
}

const Line = ({ width = '100%', color = 'var(--color-black-10)' }: LineProps) => {
  return <hr style={{ width, borderTop: `1px solid ${color}` }} />;
};

export default Line;
