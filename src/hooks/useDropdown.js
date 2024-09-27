import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import downArrowBtn from '../assets/down-arrow-btn.svg';

const useDropdown = ({ itemList, defaultIdx }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(itemList[defaultIdx]);
  const open = () => setIsDropdownOpen(true);
  const close = () => setIsDropdownOpen(false);
  const render = () => {
    return (
      <Dropdown>
        <Dropdown.Trigger
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <div>{selectedItem}</div>
          <img
            alt="Down Arrow"
            src={downArrowBtn}
            style={{
              transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu isOpen={isDropdownOpen}>
          {itemList.map(item => (
            <Dropdown.Item
              key={item}
              onClick={() => {
                setSelectedItem(item);
                setIsDropdownOpen(false);
              }}
            >
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return { open, close, render };
};

export default useDropdown;
