import React from 'react';
import { SettingContainer } from './style';
import ListInputWrap from '../../components/Input/ListInput';
import TextInputWrap from '../../components/Input/TextInput';
import { algorithmList } from '../../datas/algorithm';
import { addMemberList } from '../../datas/addMember';
import { addColorList } from '../../datas/addColorList';

const Setting = () => {

  return (
    <SettingContainer>
      <ListInputWrap
        label={'알고리즘 변경'}
        apiURL={'algorithm'}
        listName={'algorithm'}
        listData={algorithmList}
      />
      <TextInputWrap
        label={'멤버 추가하기'}
        apiURL={'add/user'}
        inputList={addMemberList}
      />
      <TextInputWrap
        label={'색상 추가하기'}
        apiURL={'add/color'}
        inputList={addColorList}
      />
    </SettingContainer>
  );
};

export default Setting;
