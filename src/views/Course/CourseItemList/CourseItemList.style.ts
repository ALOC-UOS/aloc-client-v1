import styled from '@emotion/styled';

const CourseItemList = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background-color: var(--color-foreground);

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const EmptyMessage = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-sub-text);
`;

export default { CourseItemList, EmptyMessage };
