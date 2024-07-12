import { IconProps } from "@/common/interface/settingIcon";
import { ArrowUp, Globe, Settings, Sun } from "lucide-react";
import { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const DropupContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 10%;
  border-radius: 100px;
  z-index: 100;
`;

const DropupContent = styled.div`
  margin-bottom: 15px;
  right: 30px;
  display: flex;
  flex-direction: column;
  :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem /* 12px */ * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem /* 12px */ * var(--tw-space-y-reverse));
  }
  z-index: 10;
`;

const StyledButton = styled.button`
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 24%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  border-color: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
`;

const SettingsIcon = styled(Settings)<IconProps>`
  background-color: #fd853a;
  color: white;
  cursor: pointer;
  padding: 2px;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
  transition: animation 0.5s ease-in-out;
  background-image: linear-gradient(
    to right,
    #f5ce62,
    #e43603,
    #fa7199,
    #e85a19
  );
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${rotate} 0.7s linear infinite;
    `}

  ${({ isHovered }) =>
    isHovered &&
    css`
      animation: ${rotate} 0.7s linear infinite;
    `}

  :focus {
    outline: none;
    background-color: #ff4500;
  }
`;

function DropupMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <DropupContainer>
      {isOpen && (
        <DropupContent
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <StyledButton>
            <Globe size={34} color="white" />
          </StyledButton>
          <StyledButton>
            <Sun size={34} color="orange" />
          </StyledButton>
          <StyledButton>
            <ArrowUp size={34} color="white" />
          </StyledButton>
        </DropupContent>
      )}
      <SettingsIcon
        size={40}
        isOpen={isOpen}
        isHovered={isHovered}
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </DropupContainer>
  );
}

export default DropupMenu;
