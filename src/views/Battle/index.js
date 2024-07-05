import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  BattleContainer,
  ContentContainer,
  ProfileWrapper,
  ProfileImageWrapper,
  ProfileImage,
  ProfileBlurImage,
  MemberName,
  MemberUserInfoWrapper,
  MemberUserInfoText,
  MemberUserInfoBar,
} from './style';

const Battle = () => {
  const [MemberData, setMemberData] = useState([]);
  useEffect(() => {
    loadMemberData();
  }, []);

  function loadMemberData() {
    let url = 'https://www.iflab.run/api/show/user';
    axios
      .get(url)
      .then(response => {
        setMemberData(response.data);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  }

  return (
    <BattleContainer>
      {MemberData && MemberData.length > 0 && (
        <ContentContainer>
          {MemberData.map((member, index) => (
            <ProfileWrapper>
              <ProfileImageWrapper>
                <ProfileBlurImage
                  src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`}
                />
                <ProfileImage
                  src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`}
                />
              </ProfileImageWrapper>
              <MemberName>{member.username}</MemberName>
              <MemberUserInfoWrapper>
                <MemberUserInfoText>{member.studentId}학번</MemberUserInfoText>
                <MemberUserInfoBar />
                <MemberUserInfoText>{member.joinedAt}</MemberUserInfoText>
              </MemberUserInfoWrapper>
            </ProfileWrapper>
          ))}
        </ContentContainer>
      )}
    </BattleContainer>
  );
};

export default Battle;
