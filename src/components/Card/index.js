import React, { useEffect, useState } from 'react';
import { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle } from './style';
import LocationIcon from '../../assets/location-icon.svg';
import CalendarIcon from '../../assets/calendar-icon.svg';
import CardContent from './CardContent';
import HistoryList from './HistoryList';
import ProblemList from './ProblemList';
import { API } from '../../api/axios';

const Card = () => {
  const [week, setWeek] = useState();
  const [schedule, setSchedule] = useState([]);
  const setSeminarData = schedule => {
    return [
      {
        contents: [
          {
            Icon: CalendarIcon,
            Text: schedule.date,
          },
          {
            Icon: LocationIcon,
            Text: schedule.location,
          },
        ],
      },
    ];
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get('/notion/study-schedule')
        .then(res => {
          return res.data.result;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
      const seminarData = setSeminarData(result);
      setSchedule(seminarData);
      setWeek(result.week);
    };
    fetchData();
  }, []);
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
          <CardTitle>정기 세미나 - {week}회차</CardTitle>
        </CardTop>
        {schedule.map((data, index) => {
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
