import styled from '@emotion/styled';

const NameText = styled.span`
  color: var(--color-white);
  font-size: 48px;
  font-weight: bold;
`;

const CoinText = styled.span`
  color: var(--color-yellow);
  font-size: 28px;
  font-weight: 500;
`;

const CardContainer = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: var(--color-white-10);
`;

export default { NameText, CoinText, CardContainer };
