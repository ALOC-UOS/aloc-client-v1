import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import ArrowDownFillGray from '../assets/icons/arrow.down.fill.gray.svg';

const useDropdown = ({ itemList, defaultIdx, onClickItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(itemList[defaultIdx]);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const render = () => {
    const handleClickItem = (item) => {
      setSelectedItem(item);
      close();
      onClickItem(item);
    };
    return (
      <Dropdown>
        <Dropdown.Trigger
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div>{selectedItem}</div>
          <img
            alt="Down Arrow"
            src={ArrowDownFillGray}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu isOpen={isOpen}>
          {itemList.map((item) => (
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
