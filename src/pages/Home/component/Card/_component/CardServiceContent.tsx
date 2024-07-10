import { useState } from "react";
import styled from "styled-components";

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  .all {
  }
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
const Card = styled.div`
  width: 200px;
  height: 300px;
  margin: 0 10px;
  transform-style: preserve-3d;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 0 0 20px 5px rgba(100, 100, 255, 0.4);
  opacity: 1;
  transition: all 0.3s ease;
  position: relative;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #58d;
  cursor: pointer;
  background-blend-mode: color-burn;

  &:hover {
    box-shadow: 0 0 30px 10px rgba(100, 100, 255, 0.6);
    background-color: #ccf;
  }

  .explainer {
    font-weight: 300;
    font-size: 1.5rem;
    color: #fff;
    transition: all 0.6s ease;
    width: 100%;
    height: 100%;
    background-color: #303050;
    background-image: radial-gradient(circle at center top, #cce, #33a);
    border-radius: 10px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardServiceContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContent
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContainer isHovered={isHovered}>
        <Card>
          <div className="explainer">
            <span>Hover me</span>
          </div>
        </Card>
        <Card>
          <div className="explainer">
            <span>Hover me</span>
          </div>
        </Card>
        <Card>
          <div className="explainer">
            <span>Hover me</span>
          </div>
        </Card>
        <Card>
          <div className="explainer">
            <span>Hover me</span>
          </div>
        </Card>
      </CardContainer>
    </CardContent>
  );
};

export default CardServiceContent;
