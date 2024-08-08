import { IBannerItem } from "@/common/interface";
import { useState } from "react";
import styled from "styled-components";

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
`;

const CardContainer = styled.div<{ isHovered: boolean }>`
  margin-top: 20px;
  display: flex;
  perspective: 10px;
  transform: perspective(300px) rotateX(10deg);
  will-change: perspective;
  perspective-origin: center center;
  transition: all 1.3s ease-out;
  transform-style: preserve-3d;

  ${(props) =>
    props.isHovered &&
    `
      perspective: 1000px;
      transition: all 1.3s ease-in;
      transform: perspective(10000px) rotateX(0deg);
    `}
`;

const Card = styled.div<{ isHovered: boolean }>`
  width: 200px;
  height: 300px;
  margin: 0 10px;
  transform-style: preserve-3d;
  border-radius: 5px;
  border: 1px solid #fff;
  box-shadow: 0 0 20px 5px rgba(100, 100, 255, 0.4);
  opacity: 1;
  transition: all 0.3s ease;
  position: relative;
  background-color: #58d;
  cursor: pointer;
  background-blend-mode: color-burn;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    box-shadow: 0 0 30px 10px rgba(100, 100, 255, 0.6);
    background-color: #ccf;
  }
`;

const MainImage = styled.img<{ isHovered: boolean }>`
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isHovered ? 0 : 1)};
`;

const SecondaryImage = styled.img<{ isHovered: boolean }>`
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
`;

const CardServiceContent = ({ cards }: { cards: IBannerItem[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContent>
      <CardContainer
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cards &&
          cards.map((card) => (
            <Card key={card.title} isHovered={isHovered}>
              <MainImage
                src={card.main}
                alt={card.title}
                isHovered={isHovered}
              />
              <SecondaryImage
                src={card.secondary}
                alt={card.title}
                isHovered={isHovered}
              />
            </Card>
          ))}
      </CardContainer>
    </CardContent>
  );
};

export default CardServiceContent;
