import React, { useEffect, useRef, useState } from 'react';
import { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle, StudyButton } from './style';
import LocationIcon from '../../assets/location-icon.svg';
import CalendarIcon from '../../assets/calendar-icon.svg';
import CardContent from './CardContent';
import HistoryList from './HistoryList';
import useUserState from '../../hooks/useUserState';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import { API } from '../../api/axios';

const Card = () => {
  const [week, setWeek] = useState();
  const [schedule, setSchedule] = useState([]);
  const createModalInputRef = useRef();
  const { user } = useUserState();
  const navigate = useNavigate();
  const noStudyModal = useModal({
    description: '지금 스터디가 진행되고 있지 않아요!',
    onOk: () => console.log('hello'),
  });
  const createRoomModal = useModal({
    closable: true,
    onOk: () => {
      //스터디룸 생성 API
      navigate('/study');
    },
  });
  const handleClickStudyButton = () => {
    if (user?.authority === 'ROLE_USER') {
      //스터디 중일 때
      // navigate('/study');
      //스터디가 없을 때
      noStudyModal.show();
    }
  };
  const handleClickCreateRoomButton = () => {
    createRoomModal.show();
  };
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
      {noStudyModal.render()}
      {createRoomModal.render({
        children: <Input type="number" ref={createModalInputRef} placeholder={'참여 인원'} />,
      })}
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {user?.authority === 'ROLE_USER' && (
            <StudyButton onClick={handleClickCreateRoomButton}>방 만들기</StudyButton>
          )}
          {user && <StudyButton onClick={handleClickStudyButton}>스터디 참여하기</StudyButton>}
        </div>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
