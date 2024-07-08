import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
  margin-bottom: 16px;
  background-color: ${props => props.theme.primary};
  border-radius: 16px;
`;

const BannerContent = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;

export { BannerContainer, BannerContent };
