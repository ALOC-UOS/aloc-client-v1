import DropdownItem from './Item';
import DropDownMenu from './Menu';
import DropDownTrigger from './Trigger';
import styled from 'styled-components';

const Dropdown = ({ children }) => {
  return <DropDownContainer>{children}</DropDownContainer>;
};

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropDownMenu;
Dropdown.Trigger = DropDownTrigger;

export default Dropdown;

const DropDownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 24px;
  background-color: ${props => props.theme.foreground};
  border-radius: 48px;
`;
