import styled from 'styled-components';

const ProblemItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 48px;
  background-color: ${props => props.theme.white};
`;

const ProblemTier = styled.img`
  width: 24px;
  height: 24px;
`;

const ProblemName = styled.p`
  color: ${props => props.theme.titleText};
  font-size: 20px;
  font-weight: 500;
`;

const SolvingCount = styled.p`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 500;
  margin-left: 4px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.03s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;

export default { ProblemItem, ProblemTier, ProblemName, SolvingCount, Image };
