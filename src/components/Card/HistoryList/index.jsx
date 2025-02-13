import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HistoryListContainer,
  CardWrapper,
  CardSubscription,
  CardContent,
  Icon,
  Text,
} from './style';
import AllSolveIcon from '../../../assets/icons/all-solve.svg';
import ChangeRankIcon from '../../../assets/icons/change-rank.svg';
import PlusMemberIcon from '../../../assets/icons/member.plus.svg';

const HistoryList = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    loadHistoryData();
  }, []);

  const loadHistoryData = () => {
    axios
      .get('/history')
      .then(response => {
        setHistoryData(response.data.result);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  };

  const getRank = rank => {
    const tier = parseInt(rank / 10);
    const level = rank % 10;
    const rankText = ['I', 'II', 'III', 'IV', 'V'];

    switch (tier) {
      case 1:
        return `브론즈 ${rankText[level - 1]}`;
      case 2:
        return `실버 ${rankText[level - 1]}`;
      case 3:
        return `골드 ${rankText[level - 1]}`;
      case 4:
        return `플래티넘 ${rankText[level - 1]}`;
      default:
        return 'Unranked';
    }
  };

  const getTier = rank => {
    const tier = parseInt(rank / 10);

    switch (tier) {
      case 1:
        return 'bronze';
      case 2:
        return 'silver';
      case 3:
        return 'gold';
      case 4:
        return 'platinum';
      default:
        return 'Unranked';
    }
  };
  return (
    <HistoryListContainer>
      {historyData.map((data, index) => {
        return (
          <CardWrapper key={index}>
            <CardSubscription>{data.date}</CardSubscription>
            {data.contents.map((content, index) => {
              return (
                <CardContent key={index}>
                  <Icon
                    src={
                      content.icon === 'plusMember'
                        ? PlusMemberIcon
                        : content.icon === 'changeRank'
                          ? ChangeRankIcon
                          : AllSolveIcon
                    }
                  />
                  {content.icon === 'plusMember' ? (
                    <Text>
                      <Text textColor={'blue'}>{content.name}</Text>님이 &nbsp;
                      <Text textColor={'blue'}>모임</Text>에 합류했어요!
                    </Text>
                  ) : content.icon === 'changeRank' ? (
                    <Text>
                      <Text textColor={'blue'}>{content.name}</Text>님이 &nbsp;
                      <Text textColor={content.rank && getTier(content.rank)}>
                        {getRank(content.rank)}
                      </Text>
                      을 달성했어요!
                    </Text>
                  ) : (
                    <Text>
                      <Text>{content.Text}</Text>
                    </Text>
                  )}
                </CardContent>
              );
            })}
          </CardWrapper>
        );
      })}
    </HistoryListContainer>
  );
};

export default HistoryList;
