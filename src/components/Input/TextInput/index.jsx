import axios from 'axios';
import { useState } from 'react';
import { InputContainer, InputLabel, TextInputBoxWrap } from './style';
import Button from '../../Buttons';
import TextInputBox from './TextInputBox';

const TextInputWrap = ({ label, apiURL, inputList }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputTextArray, setInputTextArray] = useState(Array(inputList.length).fill(''));

  const clickSaveButton = () => {
    const JSONData = {};
    inputList.map((item, index) => {
      JSONData[item.id] = inputTextArray[index];
    });

    axios.post(apiURL, JSONData).catch((error) => {
      console.log(error);
    });
    setIsDisabled(true);
  };

  const checkAllInput = () => {
    for (let i = 0; i < inputTextArray.length; i++) {
      if (inputTextArray[i] === '') {
        setIsDisabled(true);
        return;
      }
    }
    setIsDisabled(false);
  };

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <TextInputBoxWrap>
        {inputList.map((item, index) => (
          <TextInputBox
            key={index}
            placeholder={item.placeholder}
            onChange={(e) => {
              inputTextArray[index] = e.target.value;
              setInputTextArray(inputTextArray);
              checkAllInput();
            }}
          />
        ))}
      </TextInputBoxWrap>
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

export default TextInputWrap;
