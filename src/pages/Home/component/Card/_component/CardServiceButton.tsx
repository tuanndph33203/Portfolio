import { MoveUpRight } from "lucide-react";
import styled from "styled-components";

const ArrowCard = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardServiceButton = () => {
  return (
    <ArrowCard>
      <MoveUpRight size={30} color="white" fill="#1d2939" />
    </ArrowCard>
  );
};

export default CardServiceButton;
