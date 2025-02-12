import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ModalContainer, Description } from './style';
import Toast from '../../Toast';
import Button from '../../Buttons';
import TextInputBox from '../../Input/TextInput/TextInputBox';
import errorIcon from '../../../assets/error-icon.svg';

const buyList = [
  {
    id: 'name',
    placeholder: '이름',
  },
  {
    id: 'password',
    placeholder: '비밀번호',
  },
];

const BuyModal = ({ isOpen, description, closeModal }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputTextArray, setInputTextArray] = useState(Array(buyList.length).fill(''));
  const [toastText, setToastText] = useState('');
  const [isBookmarkToast, setIsBookmarkToast] = useState(false);

  function accpetModal() {
    const url = `${import.meta.env.VITE_API_BASE_URL}/buy/item`;

    const JSONData = {};
    buyList.map((item, index) => {
      JSONData[item.id] = inputTextArray[index];
    });
    JSONData['item'] = 'changeProfileColor';

    axios
      .post(url, JSONData)
      .then(response => {
        const message =
          'colorCode: ' + response.data.color_code + '\n' + '남은 Coin: ' + response.data.coin;
        alert(message);
      })
      .catch(error => {
        if (error.response.status === 404) {
          setToastText('해당하는 정보가 없습니다.');
        } else if (error.response.status === 400) {
          setToastText('비밀번호가 옳지 않습니다.');
        }
        setIsBookmarkToast(true);
        setTimeout(() => {
          setIsBookmarkToast(false);
        }, 2000);
      });
    setIsDisabled(true);
  }

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
    <>
      <ModalContainer isOpen={isOpen}>
        <Description>{description}</Description>
        <TextInputBoxWrap>
          {buyList.map((item, index) => (
            <TextInputBox
              key={index}
              placeholder={item.placeholder}
              onChange={e => {
                inputTextArray[index] = e.target.value;
                setInputTextArray(inputTextArray);
                checkAllInput();
              }}
            />
          ))}
        </TextInputBoxWrap>
        <ButtonWrap>
          <Button
            color={'blue'}
            buttonType={isDisabled ? 'disabled' : 'active'}
            size={'medium'}
            onClick={accpetModal}
          >
            확인
          </Button>
          <Button buttonType={'active'} size={'medium'} onClick={closeModal}>
            취소
          </Button>
        </ButtonWrap>
      </ModalContainer>
      <Toast icon={errorIcon} text={toastText} toastState={isBookmarkToast} />
    </>
  );
};

export default BuyModal;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  gap: 12px;
`;

const TextInputBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
