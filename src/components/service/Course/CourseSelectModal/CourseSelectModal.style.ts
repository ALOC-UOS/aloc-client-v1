import styled from '@emotion/styled';

const CourseName = styled.p`
  color: var(--color-blue);
  font-size: 32px;
  font-weight: bold;
`;

const CourseInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  gap: 8px;
  width: 100%;
  border: 1px solid var(--color-black-10);
  border-radius: 16px;
`;

const CourseInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const CourseInfoName = styled(CourseInfoItem)`
  color: var(--color-sub-text);
  font-size: 12px;
  font-weight: 500;
`;

export default {
  CourseName,
  CourseInfoContainer,
  CourseInfoItem,
  CourseInfoName,
};
