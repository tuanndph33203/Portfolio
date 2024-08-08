import { LogoAuthor } from "@/assets";
import { useState } from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: max-content;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
`;

const LogoImage = styled.img`
  border-radius: 30px;
  object-fit: cover;
  background: white;
`;

const Author = styled.div<{ isOpen: boolean; hidden: boolean }>`
  display: ${({ isOpen, hidden }) => (isOpen && !hidden ? "block" : "none")};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  span {
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin: 0;
  }
  span {
    font-size: 14px;
    color: #98a2b3;
  }
`;

const Logo = ({ hidden }: { hidden: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LogoContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <LogoImage src={LogoAuthor} alt="Logo" />
      <Author isOpen={isOpen} hidden={hidden}>
        <span>
          Made by <h3>ND.Tuan</h3>
        </span>
      </Author>
    </LogoContainer>
  );
};

export default Logo;
