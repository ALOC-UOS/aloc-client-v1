import styled from 'styled-components';

const DropDownTrigger = ({ children, onClick }) => {
  return (
    <DropDownTriggerContainer type="button" onClick={onClick}>
      {children}
    </DropDownTriggerContainer>
  );
};

export default DropDownTrigger;

const DropDownTriggerContainer = styled.button`
  position: relative;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;

  border: none;
  border-radius: 24px;
  outline: none;
  background-color: ${props => props.theme.white};
  padding: 0px 16px;

  font-size: 14px;
  color: ${props => props.theme.primary};
`;
