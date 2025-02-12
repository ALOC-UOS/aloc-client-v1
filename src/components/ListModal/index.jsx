import React from 'react';
import {
  ListModalContainer,
  ListModalTopBar,
  ModalTitle,
  Wrapper,
  IconWrapper,
  Icon,
  CloseButton,
  Divider,
  ProblemList,
  ProblemItem,
  ProblemDifficulty,
  ProblemName,
  Reloader,
} from './style';
import problemIcon from '../../assets/problem-icon.svg';
import closeButton from '../../assets/close-button.svg';
import Bronze from '../../assets/bronze-small.png';
import Silver from '../../assets/silver-small.png';
import Gold from '../../assets/gold-small.png';
import Platinum from '../../assets/platinum-small.png';
import useLoginState from '../../hooks/useLoginState';

const ListModal = ({
  isOpen,
  modalTitle,
  memberListData,
  problemListData,
  closeModal,
  checkSolvedProblem,
}) => {
  const { isLoggedIn } = useLoginState();

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
        {problemListData.map(problem => (
          <ProblemItem
            href={`https://www.acmicpc.net/problem/${problem.problemId}`}
            target="_blank"
          >
            <ProblemDifficulty
              src={
                problem.problemDifficulty < 6
                  ? Bronze
                  : problem.problemDifficulty < 11
                    ? Silver
                    : problem.problemDifficulty < 16
                      ? Gold
                      : Platinum
              }
            />
            <ProblemName>
              {problem.problemId}. {problem.problemTitle}
            </ProblemName>
          </ProblemItem>
        ))}
      </ProblemList>
      {isLoggedIn && (
        <Reloader onClick={checkSolvedProblem}>해결한 문제가 반영이 안됐나요?</Reloader>
      )}
    </>
  );

  return (
    <ListModalContainer isOpen={isOpen}>
      {problemListData ? renderProblem() : null}
    </ListModalContainer>
  );
};

export default ListModal;
