import styled from '@emotion/styled';

interface ModalTitleProps {
  children: React.ReactNode;
}

const ModalTitle = ({ children }: ModalTitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.p`
  color: var(--color-title-text);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export default ModalTitle;
