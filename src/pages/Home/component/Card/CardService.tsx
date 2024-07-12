import styled from "styled-components";
import CardServiceTitle from "./_component/CartServiceTitle";
import CardServiceContent from "./_component/CardServiceContent";
import CardServiceButton from "./_component/CardServiceButton";
import { IBannerItem } from "@/common/interface";
export const HiddenCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  bottom: -15%;
  right: -15%;
  transition: background-color 0.5s ease-in-out;
  background-color: #1d2939;
`;
const Container = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  border-radius: 20px;
  cursor: pointer;
  &:hover ${HiddenCard} {
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  }
`;

const Card = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 20px;
  border: 1px solid #ffffff;
  cursor: pointer;
  transition: color 0.25s 0.083s;
  color: #fd853a;
  box-shadow: inset 0 0 0 4px #fd853a;
  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
  }

  &::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }

  &::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }

  &:hover {
    color: #58afd1;
    &::before,
    &::after {
      border-color: #58afd1;
      transition: border-color 0s, width 0.25s, height 0.25s;
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }

    &::before {
      transition-delay: 0s, 0s, 0.25s;
    }

    &::after {
      transition-delay: 0s, 0.25s, 0s;
    }
  }
`;

const CardOpacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  border-radius: 20px;
  z-index: -1;
`;

const CardBanner = ({
  title,
  cards,
}: {
  title: string;
  cards: IBannerItem[];
}) => {
  return (
    <Container>
      <Card>
        <CardOpacity />
        <CardServiceTitle>{title}</CardServiceTitle>
        <CardServiceContent cards={cards}></CardServiceContent>
      </Card>
      <HiddenCard>
        <CardServiceButton></CardServiceButton>
      </HiddenCard>
    </Container>
  );
};

export default CardBanner;
