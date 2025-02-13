import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  width: calc(100% - 80px);
  @media (max-width: 480px) {
    width: calc(100% - 32px);
    flex-direction: column;
  }
`;

const CardWrapper = styled.div`
  min-width: 320px;
  border-radius: 16px;
  background-color: var(--color-foreground);
  padding: 24px 16px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #00000018;
  padding-bottom: 4px;
  margin-bottom: 16px;
`;

const CardLabel = styled.div`
  color: var(--color-sub-text);
  font-size: 12px;
  font-weight: bold;
`;

const CardTitle = styled.div`
  color: var(--color-title-text);
  font-size: 24px;
  font-weight: bold;
`;

export { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle };
