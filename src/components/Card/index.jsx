import { useEffect, useState } from 'react';
import { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle } from './style';
import LocationIcon from '../../assets/icons/location.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import CardContent from './CardContent';
import HistoryList from './HistoryList';
import { API } from '../../api/axios';

const Card = () => {
  const [week, setWeek] = useState();
  const [schedule, setSchedule] = useState([]);
  const setSeminarData = (schedule) => {
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
      try {
        const res = await API.get('/notion/study-schedule');
        const result = res.data.result;
        const seminarData = setSeminarData(result);
        setSchedule(seminarData);
        setWeek(result.week);
      } catch (error) {
        console.error('Notion으로부터 데이터를 불러오는데 실패했습니다.', error);
      }
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
    </CardContainer>
  );
};

export default Card;
