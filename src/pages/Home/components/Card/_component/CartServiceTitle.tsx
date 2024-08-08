import styled from "styled-components";

const TitleCard = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  padding: 23px 37px;
  border-bottom: 1px solid #ffffff;
  position: relative;
  z-index: 1;
`;

const CardServiceTitle = ({ children }: { children: any }) => {
  return <TitleCard>{children}</TitleCard>;
};

export default CardServiceTitle;
