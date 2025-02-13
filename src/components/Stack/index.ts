/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface StackProps {
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
}

export const VStack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap || 0}px;
`;

export const HStack = styled.div<StackProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap || 0}px;
`;
