import Container from '@/conponents/Container';
import { Circle } from 'lucide-react';
import styled from 'styled-components';

const ContainerExperince = styled(Container)`
  padding: 2rem 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  span {
    color: #fd853a;
  }
`;

const ExperinceList = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperinceCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  gap: 1rem;
  position: relative;
`;

const Seperate = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  position: absolute;
  z-index: -1;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  border-left: 2px dashed #000000;
`;

const CircleTop = styled(Circle)`
  position: absolute;
  background: #ffffff;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 2px dashed #000000;
  border-radius: 100rem;
`;

const CircleBottom = styled(Circle)`
  position: absolute;
  background: #ffffff;
  z-index: 2;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px dashed #000000;
  border-radius: 100rem;
`;

const Experince = () => {
  return (
    <ContainerExperince>
      <Title>
        My <span>Work Experience</span>
      </Title>
      <ExperinceList>
        <ExperinceCard>
          <div className="experince__left">
            <h3>Cognizant, Mumbai</h3>
            <span>Sep 2016 - July 2020</span>
          </div>
          <Seperate>
            <CircleTop fill="#fd853a" color="#fd853a" />
            <Line></Line>
            <CircleBottom fill="#1D2939" color="#1D2939" />
          </Seperate>
          <div className="experince__right">
            <h3>Experience Designer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
        </ExperinceCard>
        <ExperinceCard>
          <div>
            <h3>Cognizant, Mumbai</h3>
            <span>Sep 2016 - July 2020</span>
          </div>
          <Seperate>
            <CircleTop fill="#fd853a" color="#fd853a" />
            <Line></Line>
            <CircleBottom fill="#1D2939" color="#1D2939" />
          </Seperate>
          <div>
            <h3>Experience Designer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
        </ExperinceCard>
        <ExperinceCard>
          <div>
            <h3>Cognizant, Mumbai</h3>
            <span>Sep 2016 - July 2020</span>
          </div>
          <Seperate>
            <CircleTop fill="#fd853a" color="#fd853a" />
            <Line></Line>
            <CircleBottom fill="#1D2939" color="#1D2939" />
          </Seperate>
          <div>
            <h3>Experience Designer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
        </ExperinceCard>
      </ExperinceList>
    </ContainerExperince>
  );
};

export default Experince;
