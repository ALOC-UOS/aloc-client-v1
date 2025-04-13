import styled from '@emotion/styled';

const UserCourseItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background-color: var(--color-white);
  padding: 12px;
  border-radius: 16px;
  min-width: 280px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

const CourseNameText = styled.p`
  color: var(--color-title-text);
  font-size: 16px;
  font-weight: 500;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background-color: var(--color-blue-25);
  border-radius: 16px;
  color: var(--color-blue);
  font-size: 12px;
  font-weight: 500;
`;

export default { UserCourseItem, CourseNameText, Badge };
