// src/components/layout/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';
import SearchBar from '../common/SearchBar';
import UserMenu from '../common/UserMenu';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  display: none;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  font-weight: 600;
  position: relative;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => 
      props.active === 'film' ? props.theme.colors.film :
      props.active === 'music' ? props.theme.colors.music :
      props.active === 'anime' ? props.theme.colors.anime :
      props.active === 'ai' ? props.theme.colors.ai :
      props.theme.colors.primary
    };
    transition: width ${props => props.theme.transitions.normal};
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.dark};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const getActivePath = () => {
    const path = location.pathname.split('/')[1];
    return path;
  };
  
  const activePath = getActivePath();
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        
        <Navigation>
          <NavLink to="/" className={activePath === '' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink 
            to="/film" 
            className={activePath === 'film' ? 'active' : ''}
            active="film"
          >
            AkiFilm
          </NavLink>
          <NavLink 
            to="/music" 
            className={activePath === 'music' ? 'active' : ''}
            active="music"
          >
            AkiMusic
          </NavLink>
          <NavLink 
            to="/anime" 
            className={activePath === 'anime' ? 'active' : ''}
            active="anime"
          >
            AkiAnime
          </NavLink>
          <NavLink 
            to="/ai" 
            className={activePath === 'ai' ? 'active' : ''}
            active="ai"
          >
            AkiAI
          </NavLink>
        </Navigation>
        
        <RightSection>
          <SearchBar />
          <UserMenu />
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            ☰
          </MobileMenuButton>
        </RightSection>
      </HeaderContent>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        activePath={activePath}
      />
    </HeaderContainer>
  );
};

export default Header;