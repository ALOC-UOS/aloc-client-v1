import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { InputContainer, InputLabel, TextInputBoxWrap } from './style';
import Button from '../../../components/Buttons';
import TextInputBox from './TextInputBox';

const TextInputWrap = ({ label, apiURL, inputList }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputTextArray, setInputTextArray] = useState(Array(inputList.length).fill(''));

  const clickSaveButton = () => {
    const url = 'https://www.iflab.run/api/' + apiURL;

    const JSONData = {};
    inputList.map((item, index) => {
      JSONData[item.id] = inputTextArray[index];
    });

    axios.post(url, JSONData).
      catch((error) => {
        console.log(error);
      })
    setIsDisabled(true);
  }

  const checkAllInput = () => {
    for(let i = 0; i < inputTextArray.length; i++) {
      if(inputTextArray[i] === '') {
        setIsDisabled(true);
        return;
      }
    }
    setIsDisabled(false);
  }

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
        color={"blue"}
        type={isDisabled ? "disabled" : "active"}
        size={"small"}
        onClick={clickSaveButton}
      >
        저장
      </Button>
    </InputContainer>
  )
}

export default TextInputWrap;
