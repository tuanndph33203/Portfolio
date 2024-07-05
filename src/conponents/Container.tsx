import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 90%;
  @media (max-width: 640px) {
    max-width: 620px;
  }
  @media (max-width: 768px) {
    max-width: 728px;
  }
  @media (max-width: 1024px) {
    max-width: 964px;
  }
  @media (max-width: 1280px) {
    max-width: 1000px;
  }
  @media (max-width: 1536px) {
    max-width: 1436px;
  }
  margin: 0 auto;
`;
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <ContainerStyle className={className}>{children}</ContainerStyle>;
};

export default Container;
