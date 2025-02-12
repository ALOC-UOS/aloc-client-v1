import React from 'react';
import { SettingContainer } from './style';
import ListInputWrap from '../../components/Input/ListInput';
import TextInputWrap from '../../components/Input/TextInput';

const algorithmList = [
  {
    id: 124,
    name: '수학',
  },
  {
    id: 102,
    name: '구현',
  },
  {
    id: 25,
    name: '다이나믹 프로그래밍(DP)',
  },
  {
    id: 175,
    name: '자료 구조',
  },
  {
    id: 7,
    name: '그래프 이론',
  },
  {
    id: 33,
    name: '그리디 알고리즘',
  },
  {
    id: 158,
    name: '문자열',
  },
  {
    id: 125,
    name: '브루트포스 알고리즘',
  },
  {
    id: 11,
    name: '그래프 탐색',
  },
  {
    id: 97,
    name: '정렬',
  },
  {
    id: 100,
    name: '기하학',
  },
  {
    id: 95,
    name: '정수론',
  },
  {
    id: 120,
    name: '트리',
  },
  {
    id: 109,
    name: '애드 혹',
  },
  {
    id: 65,
    name: '세그먼트 트리',
  },
  {
    id: 12,
    name: '이분 탐색',
  },
  {
    id: 121,
    name: '사칙연산',
  },
  {
    id: 141,
    name: '시뮬레이션',
  },
  {
    id: 126,
    name: '너비 우선 탐색',
  },
  {
    id: 127,
    name: '깊이 우선 탐색',
  },
];

const problemTierList = [
  {
    tier_id: 1,
    tier_name: '브론즈',
  },
  {
    tier_id: 2,
    tier_name: '실버',
  },
  {
    tier_id: 3,
    tier_name: '골드',
  },
  {
    tier_id: 4,
    tier_name: '플래티넘',
  },
];

const memberAddList = [
  {
    id: 'name',
    placeholder: 'Name',
  },
  {
    id: 'studentId',
    placeholder: 'Student ID',
  },
  {
    id: 'githubId',
    placeholder: 'Github ID',
  },
  {
    id: 'baekjoonId',
    placeholder: 'Baekjoon ID',
  },
];

const colorAddList = [
  {
    id: 'id',
    placeholder: 'Name',
  },
  {
    id: 'color1',
    placeholder: 'Color1',
  },
  {
    id: 'color2',
    placeholder: 'Color2',
  },
  {
    id: 'color3',
    placeholder: 'Color3',
  },
  {
    id: 'color4',
    placeholder: 'Color4',
  },
  {
    id: 'color5',
    placeholder: 'Color5',
  },
  {
    id: 'degree',
    placeholder: 'Degree',
  },
  {
    id: 'category',
    placeholder: 'Category',
  },
];

const Setting = () => {
  return (
    <SettingContainer>
      <ListInputWrap
        label={'알고리즘 변경'}
        apiURL={'algorithm'}
        listName={'algorithm'}
        listData={algorithmList}
      />
      <TextInputWrap label={'멤버 추가하기'} apiURL={'add/user'} inputList={memberAddList} />
      <TextInputWrap label={'색상 추가하기'} apiURL={'add/color'} inputList={colorAddList} />
    </SettingContainer>
  );
};

export default Setting;
