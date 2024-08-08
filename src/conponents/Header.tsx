import { nav } from '@/common/constants/nav';
import { INav } from '@/common/interface/nav';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 50px;
  left: 50%;
  right: 50%;
  padding: 5px;
  transform: translate(-50%, -50%);
  gap: 0.5rem;
  width: 80%;
  background-color: #171717;
  border-radius: 30px;
  font-size: 1.125rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 600;
`;

const NavItem = styled.li`
  display: flex;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  background-color: transparent;
  text-decoration: none;
  padding: 16px 20px;
  border-radius: 30px;
  &.active {
    background-color: #fd853a;
  }
  &:hover {
    background-color: #ffbb91;
  }
  &.active {
    background-color: #fd853a;
  }
  @media (max-width: 1024px) {
    padding: 16px 10px;
  }
`;

function Header() {
  const handleScrollToElement = (elementId: string) => { 
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <HeaderContainer>
      <NavList>
        {nav.map((option: INav, index: number) => (
          <React.Fragment key={index}>
            <NavItem key={option.name}>
              <StyledNavLink
                to={option.link}
                onClick={() => handleScrollToElement(option.element)}
              >
                {option.name}
              </StyledNavLink>
            </NavItem>
            {index === 2 && <Logo hidden={true}></Logo>}
          </React.Fragment>
        ))}
      </NavList>
    </HeaderContainer>
  );
}

export default Header;
