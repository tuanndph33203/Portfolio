import styled from "styled-components";
import CardBanner from "./Card/CardService";
import { BannerEffect1 } from "@/assets";

const ContainerBanner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #ffffff;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/src/assets/banner/Frame 58.png");
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  z-index: -1;
`;

const ImageBanner = styled.img`
  width: 100%;
  border-radius: 50px;
  height: auto;
  z-index: 1;
`;

const ContentContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 100px;
`;

const Header = styled.div`
  width: 100%;
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  span {
    color: #fd853a;
  }
`;

const Main = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  gap: 1rem;
`;

const Banner = () => {
  return (
    <ContainerBanner>
      <BackgroundImage />
      <ImageBanner src={BannerEffect1} />
      <ContentContainer>
        <Header>
          <Title>
            My <span>Services</span>
          </Title>
          <div></div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </span>
        </Header>
        <Main>
          <CardBanner title={"UI/UX Design"}></CardBanner>
          <CardBanner title={"Web Design"}></CardBanner>
          <CardBanner title={"Landing Design"}></CardBanner>
        </Main>
      </ContentContainer>
    </ContainerBanner>
  );
};

export default Banner;
