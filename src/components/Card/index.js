import React from 'react';
import { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle } from './style';
import LocationIcon from '../../assets/location-icon.svg';
import CalendarIcon from '../../assets/calendar-icon.svg';
import CardContent from './CardContent';
import HistoryList from './HistoryList';
import ProblemList from './ProblemList';

const Card = () => {
  const SeminarData = [
    {
      contents: [
        {
          Icon: CalendarIcon,
          Text: '5월 6일 화요일, 오후 7시',
        },
        {
          Icon: LocationIcon,
          Text: '정보기술관 106호 / 107호',
        },
      ],
    },
  ];

  return (
    <CardContainer>
      <CardWrapper>
        <CardTop>
          <CardLabel> 우리의 흔적 </CardLabel>
          <CardTitle>히스토리</CardTitle>
        </CardTop>
        <HistoryList />
      </CardWrapper>
      <CardWrapper>
        <CardTop>
          <CardLabel> 예정된 일정 </CardLabel>
          <CardTitle>정기 세미나 - 9회차</CardTitle>
        </CardTop>
        {SeminarData.map((data, index) => {
          return (
            <CardContent key={index} subscription={data.subscription} contents={data.contents} />
          );
        })}
      </CardWrapper>
      <CardWrapper>
        <CardTop>
          <CardLabel> 지나간 문제</CardLabel>
          <CardTitle>문제 목록</CardTitle>
        </CardTop>
        <ProblemList />
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
