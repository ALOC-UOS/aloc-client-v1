import styled from '@emotion/styled';

const CourseItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  border-radius: 16px;
  overflow: hidden;
  height: min-content;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

const CourseTypeLabel = styled.div`
  color: var(--color-blue);
  font-size: 12px;
  padding: 4px 6px;
  border: 1px solid var(--color-blue);
  border-radius: 24px;
`;

const CourseName = styled.p`
  color: var(--color-content-text);
  font-size: 24px;
  font-weight: 500;
`;

const CourseInfo = styled.p`
  color: var(--color-sub-text);
  font-size: 12px;
  font-weight: bold;
`;

export default { CourseItemContainer, CourseTypeLabel, CourseName, CourseInfo };
