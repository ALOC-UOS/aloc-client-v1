import styled from 'styled-components';

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  height: 100vh;
  align-items: center;
`;

/*
const ButtonWrap = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  transform: translateX(-50%);
`
*/

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-width: 240px;
  max-wdith: 400px;
  width: 100%;
  height: 40px;

  border: ${props => (props.theme.mode === 'light' ? '1px solid #f0f1f5' : '1px solid #2c3038')};
  outline: none;
  color: ${props => props.theme.contentText};
  font-size: 14px;
  letter-spacing: -1px;

  background-color: ${props => props.theme.foreground};
  padding: 4px 4px 4px 8px;
  border-radius: 8px;
  cursor: pointer;

  opacity: ${props => (props.disabled ? '0.5' : '1')};

  &:hover {
    border: ${props => (props.disabled ? '1px solid #00000000' : '1px solid #00000040')};
  }
`;

const InputList = styled.div`
  z-index: 400;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  right: 0;
  width: 100%;

  border-radius: 8px;
  overflow: auto;

  opacity: ${props => (props.isOpen ? '1' : '0')};
  outline: ${props => (props.isOpen ? '1px solid #D8D9DD' : '1px solid #D8D9DD00')};
  height: ${props =>
    props.ItemNumber <= 8 && props.isOpen
      ? `${props.ItemNumber * 37}px`
      : props.ItemNumber && props.isOpen
        ? '296px'
        : '0px'};
`;

const InputItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px 8px 8px;
  background-color: ${props => props.theme.foreground};

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
  }

  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.contentText};
  font-size: 14px;

  ${props =>
    props.selected &&
    `
    cursor: default;
    pointer-events: none;
    color: ${props.theme.subText}
  `}
`;

const SelectedText = styled.div`
  color: ${props => props.theme.contentText};
  font-size: 14px;
  user-select: none;
`;

const ArrowIcon = styled.img`
  position: absolute;
  right: 8px;

  width: 16px;
  height: 16px;
  transform: ${props => (props.selected ? 'rotateX(180deg)' : 'rotateX(0deg)')};
`;

export { SettingContainer, InputBox, InputList, InputItem, SelectedText, ArrowIcon };
