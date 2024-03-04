import styled, { css } from 'styled-components';

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`

const CardSubscription = styled.div`
  color: ${(props) => props.theme.subText};
  font-size: 12px;
  font-weight: 500;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
`

const Text = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.contentText};
  font-size: 16px;
  font-weight: 500;

  ${(props) => props.textColor === 'blue' && css`
    color: ${props.theme.primary};
  `}
  ${(props) => props.textColor === 'gold' && css`
    color: #FFB800;
  `}
  ${(props) => props.textColor === 'silver' && css`
    color: #BCBFC7;
  `}
`
export { CardContentWrapper, CardSubscription, CardContent, Icon, Text };
