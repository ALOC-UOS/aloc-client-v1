import styled, { css } from 'styled-components';

const ListModalContainer = styled.div`
  min-width: 400px;
  min-height: 480px;
  z-index: 300;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.foreground};
  padding: 16px;
  border-radius: 16px;
  filter: blur(12px);
  pointer-events: none;

  ${props =>
    props.isOpen &&
    css`
      min-width: 320px;
      min-height: 400px;
      opacity: 1;
      filter: blur(0px);
      pointer-events: auto;
    `}
`;

const ListModalTopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.titleText};
  font-size: 16px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${props => props.theme.primary};
  font-size: 12px;
  gap: 2px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  user-select: none;
  &:hover {
    filter: brightness(0.8);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #00000018;
  margin: 8px 0 16px;
`;

const MemberList = styled.div`
  max-height: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`;

const MemberItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.div`
  color: ${props => props.theme.contentText};
  font-size: 16px;
  font-weight: 500;
`;

const MemberBaekjoonId = styled.div`
  color: ${props => props.theme.subText};
  font-size: 16px;
`;

const ProblemList = styled.div`
  max-height: 320px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

const ProblemItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background-color: ${props => props.theme.background}00;
  border-radius: 8px;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.background};
  }
`;

const ProblemDifficulty = styled.img`
  width: 24px;
  height: 24px;
`;

const ProblemName = styled.div`
  color: ${props => props.theme.contentText};
  font-size: 16px;
  font-weight: 500;
`;

const Reloader = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.subText};
  font-size: 12px;
  text-decoration: underline;
  text-align: center;

  cursor: pointer;
  &:hover {
    color: ${props => props.theme.contentText};
  }
`;

export {
  ListModalContainer,
  ListModalTopBar,
  ModalTitle,
  Wrapper,
  IconWrapper,
  Icon,
  CloseButton,
  Divider,
  MemberList,
  MemberItem,
  ProfileImage,
  MemberWrapper,
  MemberName,
  MemberBaekjoonId,
  ProblemList,
  ProblemItem,
  ProblemDifficulty,
  ProblemName,
  Reloader,
};
