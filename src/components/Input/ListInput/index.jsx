import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { InputContainer, InputLabel } from './style';
import Button from '../../Buttons';
import ListInputBox from './ListInputBox';

const ListInput = ({ label, apiURL, listName, listData }) => {
  const [isOpenList, setOpenList] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');
  const [selectedItemName, setSelectedItemName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => {
        setSelectedItemName(listData.find(item => item.id === response.data).name);
      })
      .catch(error => {
        console.log(error);
      });
  }, [apiURL, listData]);

  const openList = id => {
    if (id === isOpenList) {
      setOpenList('');
      return;
    }
    setOpenList(id);
  };

  const selectItem = selectedItem => {
    setSelectedItemId(listData.find(item => item.name === selectedItem).id);
    setSelectedItemName(selectedItem);
    setOpenList('');
    setIsDisabled(false);
  };

  const clickSaveButton = () => {
    axios.post(apiURL, {
      id: selectedItemId,
      name: selectedItemName,
    });
    setIsDisabled(true);
    setSelectedItemId('');
  };

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <ListInputBox
        listName={listName}
        listData={listData}
        isOpenList={isOpenList}
        selectedItemId={selectedItemId}
        selectedItemName={selectedItemName}
        openList={openList}
        selectItem={selectItem}
      />
      <Button
        color={'blue'}
        buttonType={isDisabled ? 'disabled' : 'active'}
        size={'small'}
        onClick={clickSaveButton}
      >
        저장
      </Button>
    </InputContainer>
  );
};

export default ListInput;
