import styled from '@emotion/styled';

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
  background-color: var(--color-white);
  padding: 0px 16px;

  font-size: 14px;
  color: var(--color-blue);
  cursor: pointer;
`;
