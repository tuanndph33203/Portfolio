import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { nav } from "@/constants/nav";
import { INav } from "@/interface/nav";

const FooterContainer = styled.footer`
  background-color: #171717;
  color: #ffffff;
`;
const FooterTop = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid #475467;
`;
const FooterAside = styled.div`
  :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem /* 12px */ * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem /* 12px */ * var(--tw-space-y-reverse));
  }
`;
const FooterArticle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FooterCenter = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 1rem;
  border-bottom: 1px solid #475467;
`;
const FooterDes = styled.p``;
const FooterBottom = styled.div`
  font-size: 0.875rem;
  padding: 2rem 0;
  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #475467;
`;
const FooterTitile = styled.div`
  font-size: 40px;
  font-weight: bolder;
`;

const FooterHireMe = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  background-color: #fd853a;
  color: #ffffff;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  border-radius: 20px;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: white;
  color: #000000;
  font-size: 1rem;
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  width: max-content;
  background-color: #fd853a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem /* 12px */ * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem /* 12px */ * var(--tw-space-y-reverse));
  }
`;

const SendForm = styled.form`
  display: flex;
`;

const FooterSection = styled.div`
  display: flex;
  gap: 2rem;
`;

const Section = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  color: #fd853a;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #ff4500;
    transition-duration: 300ms;
  }
`;

const ContactInfo = styled.p`
  margin: 0.5rem 0;
`;

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <FooterContainer>
      <Container>
        <FooterTop>
          <FooterTitile>Lets Connect there</FooterTitile>
          <FooterHireMe to="/contact">
            Hire me <MoveUpRight size={15} />
          </FooterHireMe>
        </FooterTop>
        <FooterCenter>
          <FooterAside>
            <Logo hidden={false} />
            <FooterDes>
              I'm always excited to connect with fellow developers, potential
              clients, and anyone interested in my work. Feel free to reach out
              through any of the channels below.
            </FooterDes>
            <FooterDes>
              If you're looking for a dedicated and skilled frontend developer
              to bring your project to life, look no further. I specialize in
              creating responsive, high-performance web applications using the
              latest technologies.
            </FooterDes>
          </FooterAside>
          <FooterArticle>
            <FooterSection>
              <Section>
                <SectionTitle>Navigation</SectionTitle>
                <NavList>
                  {nav.map((option: INav, index: number) => (
                    <NavItem key={index}>
                      <StyledNavLink to={option.link}>
                        {option.name}
                      </StyledNavLink>
                    </NavItem>
                  ))}
                </NavList>
              </Section>
              <Section>
                <SectionTitle>Contact</SectionTitle>
                <ContactInfo>Phone: +84 886024065</ContactInfo>
                <ContactInfo>Email: junnguyenvizito@gmail.com</ContactInfo>
              </Section>
            </FooterSection>
            <SendForm onSubmit={handleSubmit}>
              <InputContainer>
                <EmailInput
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <SendButton type="submit">Send</SendButton>
              </InputContainer>
            </SendForm>
          </FooterArticle>
        </FooterCenter>
        <FooterBottom>
          <span>&copy; 2024 @localhostdeveloper. All rights reserved.</span>
          <span>User Terms & Conditions | Privacy Policy</span>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
