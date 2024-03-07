import React from 'react';
import { InputBox, InputList, InputItem, SelectedText, ArrowIcon } from './style';
import InputArrowIcon from '../../../../assets/input-arrow-icon.svg';

const ListInputBox = ({
  listName,
  listData,
  isOpenList,
  selectedItemId,
  selectedItemName,
  openList,
  selectItem
}) => {
  return (
    <InputBox onClick={() => openList(listName)}>
      <SelectedText>{selectedItemName}</SelectedText>
      <ArrowIcon src={InputArrowIcon} selected={isOpenList === listName} />
      <InputList
        isOpen={isOpenList === listName}
        ItemNumber={listData.length}
      >
        {listData.map((ListItem) => (
          <InputItem
            key={ListItem.list_id}
            onClick={() => selectItem(ListItem.name)}
            selected={ListItem.name === selectedItemName}
          >
            {ListItem.name}
          </InputItem>
        ))}
      </InputList>
    </InputBox>
  );
}

export default ListInputBox;
