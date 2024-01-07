import React from 'react';
import { ListModalContainer, ListModalTopBar, ModalTitle, Wrapper, IconWrapper, Icon, CloseButton, Divider, MemberList, MemberItem, ProfileImage, MemberWrapper, MemberName, MemberBaekjoonId, ProblemList, ProblemItem, ProblemDifficulty, ProblemName, Reloader } from './style';
import memberIcon from '../../assets/member-icon.svg';
import problemIcon from '../../assets/problem-icon.svg';
import closeButton from '../../assets/close-button.svg';
import Bronze from '../../assets/bronze-small.svg';
import Silver from '../../assets/silver-small.svg';
import Gold from '../../assets/gold-small.svg';
import Platinum from '../../assets/platinum-small.svg';

const ListModal = ({ isOpen, modalTitle, memberListData, problemListData, closeModal, checkSolvedProblem }) => {

  const renderMember = () => (
    <>
      <ListModalTopBar>
        <Wrapper>
          <ModalTitle>{modalTitle}</ModalTitle>
          <IconWrapper>
            <Icon src={memberIcon} /> {memberListData.length}명
          </IconWrapper>
        </Wrapper>
        <CloseButton src={closeButton} onClick={closeModal} />
      </ListModalTopBar>
      <Divider />
      <MemberList>
        {memberListData.map((member) => (
          <MemberItem>
            <ProfileImage src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`} />
            <MemberWrapper>
              <MemberName>{member.username}</MemberName>
              <MemberBaekjoonId>{member.baekjoonId}</MemberBaekjoonId>
            </MemberWrapper>
          </MemberItem>
        ))}
      </MemberList>
    </>
  );

  const renderProblem = () => (
    <>
      <ListModalTopBar>
        <Wrapper>
          <ModalTitle>{modalTitle}</ModalTitle>
          <IconWrapper>
            <Icon src={problemIcon} /> {problemListData.length}개
          </IconWrapper>
        </Wrapper>
        <CloseButton src={closeButton} onClick={closeModal} />
      </ListModalTopBar>
      <Divider />
      <ProblemList>
        {problemListData.map((problem) => (
          <ProblemItem href={`https://www.acmicpc.net/problem/${problem.id}`} target="_blank">
            <ProblemDifficulty src={problem.difficulty < 6 ? Bronze : problem.difficulty < 11 ? Silver : problem.difficulty < 16 ? Gold : Platinum} />
            <ProblemName>{problem.id}. {problem.title}</ProblemName>
          </ProblemItem>
        ))}
      </ProblemList>
      <Reloader onClick={checkSolvedProblem}>해결한 문제가 반영이 안됐나요?</Reloader>
    </>
  );

  return (
    <ListModalContainer isOpen={isOpen}>
      {memberListData ? renderMember() : null}
      {problemListData ? renderProblem() : null}
    </ListModalContainer>
  )
}

export default ListModal
