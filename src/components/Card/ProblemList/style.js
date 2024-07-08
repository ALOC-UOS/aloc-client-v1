import styled from 'styled-components';

const ProblemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 240px;
  overflow-x: hidden;
  overflow-y: scroll;
  gap: 4px;
  // scroll 가리기
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

const ProblemItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.foreground};
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;

const ProblemInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProblemName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${props => props.theme.titleText};
  font-size: 16px;
  font-weight: 500;
`;

const ProblemDifficulty = styled.img`
  width: 24px;
  height: 24px;
`;

export { ProblemListContainer, ProblemItem, ProblemInfoWrap, ProblemName, ProblemDifficulty };
