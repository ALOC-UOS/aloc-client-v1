import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 8px;
`;

const InputLabel = styled.div`
  color: ${props => props.theme.subText};
  font-size: 12px;
  letter-spacing: -1px;
  user-select: none;
`;
export { InputContainer, InputLabel };
