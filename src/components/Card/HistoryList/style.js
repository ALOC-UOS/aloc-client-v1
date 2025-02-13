import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HistoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 240px;
  overflow-x: hidden;
  overflow-y: scroll;
  // scroll 가리기
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

const CardWrapper = styled.div`
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

  ${props =>
    props.textColor === 'blue' &&
    css`
      color: var(--color-blue);
    `}
  ${props =>
    props.textColor === 'bronze' &&
    css`
      color: #b97c63;
    `}
  ${props =>
    props.textColor === 'silver' &&
    css`
      color: #abbac7;
    `}
  ${props =>
    props.textColor === 'gold' &&
    css`
      color: #ffb800;
    `}
  ${props =>
    props.textColor === 'platinum' &&
    css`
      color: #00c697;
    `}
`;
export { HistoryListContainer, CardWrapper, CardSubscription, CardContent, Icon, Text };
