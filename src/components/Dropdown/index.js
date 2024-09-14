import DropdownItem from './Item';
import DropDownMenu from './Menu';
import DropDownTrigger from './Trigger';

const Dropdown = ({ children }) => {
  return <div style={{ position: 'relative' }}>{children}</div>;
};

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropDownMenu;
Dropdown.Trigger = DropDownTrigger;

export default Dropdown;
