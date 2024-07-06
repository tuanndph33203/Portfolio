import { MoveUpRight, Quote, Star } from "lucide-react";
import styled from "styled-components";
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  margin-top: 100px;
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
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;
const Background = styled.div`
  z-index: -1;
  position: absolute;
  background: #feb273;
  width: 800px;
  height: 800px;
  border-radius: 100% 100% 0 0;
`;
const ImageBanner = styled.img`
  position: absolute;
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

const Profile = () => {
  return (
    <ProfileContainer>
      <Greeting>
        <h3>Hello!</h3>
        <img src="/src/assets/icon/hello.svg" alt="" />
      </Greeting>
      <Introduce>
        I’m &nbsp;<Name>Nguyen Dinh Tuan</Name>,
      </Introduce>
      <Introduce> Web Developer</Introduce>
      <Main>
        <Title>
          Tuan's Exceptional product designensure our website’s success &nbsp;
          <Quote color="#344054" fill="#344054" size={28} strokeWidth={1.75} />
        </Title>
        <ButtonsContainer>
          <Background></Background>
          <ImageBanner src="/src/assets/icon/file (2).png" alt="" />
          <ButtonGroup>
            <ButtonItem>
              <ButtonOpacity></ButtonOpacity>
              <Button>
                Portfolio <MoveUpRight size={15} />
              </Button>
              &nbsp;
              <Button>Hire me</Button>
            </ButtonItem>
          </ButtonGroup>
        </ButtonsContainer>
        <Highlight>
          <StarList>
            <Star color="#fd853a" fill="#fd853a" />
            <Star color="#fd853a" fill="#fd853a" />
            <Star color="#fd853a" fill="#fd853a" />
            <Star color="#fd853a" fill="#fd853a" />
            <Star color="#fd853a" fill="#fd853a" />
            <Star color="#fd853a" fill="#fd853a" />
            <Star color="#fd853a" />
          </StarList>
          <HighlightYear>2 Years</HighlightYear>
          <HighlightExperience>Student</HighlightExperience>
        </Highlight>
      </Main>
    </ProfileContainer>
  );
};

export default Profile;
