// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../common/Logo';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.white};
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: 0.8rem;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: 1rem;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => 
      props.platform === 'facebook' ? '#1877F2' :
      props.platform === 'twitter' ? '#1DA1F2' :
      props.platform === 'instagram' ? '#E4405F' :
      props.platform === 'youtube' ? '#FF0000' :
      props.theme.colors.primary
    };
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.lightGray};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo variant="light" />
          <FooterText>
            Aki Hub is your central platform for discovering content across films, music, anime, and AI tools.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" platform="facebook">f</SocialIcon>
            <SocialIcon href="#" platform="twitter">t</SocialIcon>
            <SocialIcon href="#" platform="instagram">i</SocialIcon>
            <SocialIcon href="#" platform="youtube">y</SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Categories</FooterHeading>
          <FooterLink to="/film">AkiFilm</FooterLink>
          <FooterLink to="/music">AkiMusic</FooterLink>
          <FooterLink to="/anime">AkiAnime</FooterLink>
          <FooterLink to="/ai">AkiAI</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Account</FooterHeading>
          <FooterLink to="/profile">My Profile</FooterLink>
          <FooterLink to="/profile/favorites">Favorites</FooterLink>
          <FooterLink to="/profile/settings">Settings</FooterLink>
          <FooterLink to="/premium">Premium</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Support</FooterHeading>
          <FooterLink to="/help">Help Center</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <div className="container">
          &copy; {new Date().getFullYear()} Aki Hub. All rights reserved.
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;