import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CardSubscription = styled.div`
  color: var(--color-sub-text);
  font-size: 12px;
  font-weight: 500;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--color-content-text);
  font-size: 16px;
  font-weight: 500;
`;
export { CardContentWrapper, CardSubscription, CardContent, Icon, Text };
