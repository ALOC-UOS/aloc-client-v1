import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import downArrowBtn from '../assets/down-arrow-btn.svg';

const useDropdown = ({ itemList, defaultIdx, onClickItem }) => {
  const [isOpen, setIsDOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(itemList[defaultIdx]);
  const open = () => setIsDropdownOpen(true);
  const close = () => setIsDropdownOpen(false);
  const render = () => {
    const handleClickItem = item => {
      setSelectedItem(item);
      setIsDropdownOpen(false);
      onClickItem(item);
    };
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
            <Dropdown.Item key={item} onClick={() => handleClickItem(item)}>
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
