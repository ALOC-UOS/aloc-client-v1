import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const AppearCard = keyframes`
  0% {
    transform: translateY(-24px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  min-height: 100vh;
  padding-bottom: 48px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 24px 0 24px 40px;
  margin-top: 120px;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
`;

const ItemCard = styled.div`
  animation: ${AppearCard} 1s ease forwards;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--color-white);
`;

const ItemImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  min-height: 176px;
  padding: 24px;
  background-color: var(--color-foreground);
`;

const ItemImg = styled.img``;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 12px 12px;
`;
const InfoWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr;
`;

const ItemName = styled.div`
  color: var(--color-title-text);
  font-size: 16px;
  font-weight: 500;
`;

const InfoDescription = styled.div`
  color: var(--color-sub-text);
  font-size: 12px;
`;

const ItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: var(--color-yellow);
  font-size: 14px;
  font-weight: 500;

  gap: 4px;

  & > img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 1;
    & > img {
      transform: rotateY(180deg);
    }
  }
`;

const Button = styled.div`
  background-color: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0 12px 12px 12px;
  border-radius: 8px;
  color: var(--color-white);
  font-size: 12px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;

export {
  ShopContainer,
  ContentContainer,
  ItemContainer,
  ItemCard,
  ItemImgWrapper,
  ItemImg,
  ItemInfo,
  InfoWrapper,
  ItemName,
  InfoDescription,
  ItemPrice,
  Button,
};
