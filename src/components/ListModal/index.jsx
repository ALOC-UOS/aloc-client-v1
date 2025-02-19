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
import ProblemIcon from '../../assets/icons/problem.svg';
import CloseIcon from '../../assets/icons/close.svg';
import Bronze from '../../assets/icons/tier/bronze.small.svg';
import Silver from '../../assets/icons/tier/silver.small.svg';
import Gold from '../../assets/icons/tier/gold.small.svg';
import Platinum from '../../assets/icons/tier/platinum.small.svg';
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
            <Icon src={ProblemIcon} /> {problemListData.length}개
          </IconWrapper>
        </Wrapper>
        <CloseButton src={CloseIcon} onClick={closeModal} />
      </ListModalTopBar>
      <Divider />
      <ProblemList>
        {problemListData.map((problem) => (
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
