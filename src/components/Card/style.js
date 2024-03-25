import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
  width: calc(100% - 80px);
  @media (max-width: 480px) {
    width: calc(100% - 32px);
    flex-direction: column;
  }
`

const CardWrapper = styled.div`
  min-width: 320px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.foreground};
  padding: 24px 16px;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #00000018;
  padding-bottom: 4px;
  margin-bottom: 16px;
`

const CardLabel = styled.div`
  color: ${(props) => props.theme.subText};
  font-size: 12px;
  font-weight: bold;
`

const CardTitle = styled.div`
  color: ${(props) => props.theme.titleText};
  font-size: 24px;
  font-weight: bold;
`

export { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle };
