interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return (
    <p
      style={{
        color: 'var(--color-title-text)',
        fontSize: '32px',
        fontWeight: 'bold',
        flexShrink: 0,
      }}
    >
      {title}
    </p>
  );
};

export default HeaderTitle;
