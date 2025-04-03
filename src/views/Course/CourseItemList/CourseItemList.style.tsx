import styled from 'styled-components';

PaginationContainer: styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
`,

PageButton: styled.button<{ $isActive: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.border};
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme, $isActive }) => $isActive ? 'white' : theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.background.secondary};
  }
`,