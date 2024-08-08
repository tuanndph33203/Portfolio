import { BannerAuthor, BannerEffect2, Hello } from "@/assets";
import { MoveUpRight, Quote, Star } from "lucide-react";
import { useState } from "react";
import styled, { css } from "styled-components";

const ProfileContainer = styled.div`
  z-index: 1;
  position: relative;
  padding: 240px 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  margin-top: 100px;
`;

const ProfileHeader = styled.div<{ isHovered: boolean }>`
  top: 30px;
  position: absolute;
  z-index: -1;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  ${({ isHovered }) =>
    isHovered &&
    css`
      transform: translateY(300px);
      opacity: 0;
    `}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.div`
  font-size: 20px;
  display: flex;
  position: relative;
  z-index: 1;
  h3 {
    padding: 3px 10px;
    border-radius: 30px;
    border: 1px solid #000000;
  }
  img {
    position: absolute;
    top: -20px;
    right: -30px;
  }
`;

const Introduce = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 95px;
  font-weight: bold;
  line-height: 1.1;
`;

const Name = styled.span`
  color: #fd853a;
`;

const Title = styled.p`
  font-size: 1.25rem;
  text-align: left;
`;

const Main = styled.div`
  padding-top: 100px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  background: #feb273;
  width: 800px;
  height: 800px;
  border-radius: 50% 50% 0 0;
`;

const ImageEffect = styled.img<{ isHovered: boolean }>`
  position: absolute;
  z-index: 100;
  width: 100px;
  transition: transform 1s ease-in-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${({ isHovered }) => (isHovered ? 10 : 1)});
`;

const ImageBanner = styled.img`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonGroup = styled.div`
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 20px;
`;

const ButtonItem = styled.div`
  position: relative;
  padding: 3px;
  border-radius: 30px;
  border: 1px solid #ffffff;
`;

const ButtonOpacity = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  border-radius: 30px;
`;

const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  position: relative;
`;

const StarList = styled.div`
  position: absolute;
  right: 0;
  top: -1rem;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

const HighlightYear = styled.span`
  font-size: 47px;
  font-weight: bold;
`;

const HighlightExperience = styled.span`
  font-size: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  z-index: 100;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: transparent;
  &:hover {
    background-color: #fd853a;
  }
`;

const TitleHighlight = styled.div<{ isHovered: boolean }>`
  width: 100%;
  padding: 0 2rem;
  position: absolute;
  bottom: 300px;
  transition: transform 1s ease-in-out;
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-300px)" : "translateY(0)"};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;
const Profile = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <ProfileContainer
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ProfileHeader isHovered={isHovered}>
        <Greeting>
          <h3>Hello!</h3>
          <img src={Hello} alt="Hello icon" />
        </Greeting>
        <Introduce>
          I’m &nbsp;<Name>Nguyen Dinh Tuan</Name>,
        </Introduce>
        <Introduce>Web Developer</Introduce>
      </ProfileHeader>
      <ImageEffect isHovered={isHovered} src={BannerEffect2} alt="Frame 68" />
      <TitleHighlight isHovered={isHovered}>
        <Title>
          Tuan's Exceptional product design ensures our website’s success&nbsp;
          <Quote color="#344054" fill="#344054" size={28} strokeWidth={1.75} />
        </Title>
        <div></div>
        <Highlight>
          <StarList>
            {[...Array(6)].map((_, index) => (
              <Star key={index} color="#fd853a" fill="#fd853a" />
            ))}
            <Star color="#fd853a" />
          </StarList>
          <HighlightYear>2 Years</HighlightYear>
          <HighlightExperience>Student</HighlightExperience>
        </Highlight>
      </TitleHighlight>
      <Main>
        <ButtonsContainer>
          <Background />
          <ImageBanner src={BannerAuthor} alt="File icon" />
          <ButtonGroup>
            <ButtonItem>
              <ButtonOpacity />
              <Button aria-label="View Portfolio">
                Portfolio <MoveUpRight size={15} />
              </Button>
              &nbsp;
              <Button aria-label="Hire me">Hire me</Button>
            </ButtonItem>
          </ButtonGroup>
        </ButtonsContainer>
      </Main>
    </ProfileContainer>
  );
};

export default Profile;
