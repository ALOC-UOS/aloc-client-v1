import styled from '@emotion/styled';

const CourseItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: 16px;
  overflow: hidden;
  height: min-content;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
  position: relative;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

const CourseType = styled.p`
  color: var(--color-blue);
  font-size: 12px;
`;

const CourseName = styled.p`
  color: var(--color-title-text);
  font-size: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-foreground);
  padding: 8px;
  border-radius: 8px;
  gap: 4px;
  width: 100%;
`;

const CourseLabel = styled.p`
  color: var(--color-sub-text);
  font-size: 12px;
  font-weight: 500;
`;

const CourseInfo = styled.p`
  color: var(--color-content-text);
  font-size: 16px;
  font-weight: 500;
`;

const StateLabel = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export default {
  CourseItemContainer,
  CourseType,
  CourseName,
  InfoContainer,
  CourseLabel,
  CourseInfo,
  StateLabel,
};
