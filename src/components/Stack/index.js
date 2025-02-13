import styled from '@emotion/styled';

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || 0}px;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || 0}px;
`;
