// src/components/common/Logo.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.variant === 'light' ? props.theme.colors.white : props.theme.colors.primary};
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.borderRadius.small};
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.film} 0%, 
    ${props => props.theme.colors.anime} 50%, 
    ${props => props.theme.colors.ai} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-weight: 900;
`;

const Logo = ({ variant }) => {
  return (
    <LogoContainer to="/" variant={variant}>
      <LogoIcon>A</LogoIcon>
      <span>Aki Hub</span>
    </LogoContainer>
  );
};

export default Logo;