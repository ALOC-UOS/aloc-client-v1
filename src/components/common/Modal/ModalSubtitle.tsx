import styled from '@emotion/styled';

interface ModalSubtitleProps {
  children: React.ReactNode;
}

const ModalSubtitle = ({ children }: ModalSubtitleProps) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
};

const StyledSubtitle = styled.p`
  color: var(--color-sub-text);
  font-size: 16px;
  text-align: center;
`;

export default ModalSubtitle;
