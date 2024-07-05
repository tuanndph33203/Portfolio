import styled from "styled-components";

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  padding: 1rem 1rem;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 30px;
`;

const LogoImage = styled.img`
  object-fit: cover;
  background: white;
  border-radius: 30px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src="/src/assets/icon/Untitled.svg" alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
