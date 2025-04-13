// src/pages/NotFound/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1rem;
  min-height: 60vh;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.film} 0%,
    ${props => props.theme.colors.anime} 50%,
    ${props => props.theme.colors.ai} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.dark};
`;

const ErrorDescription = styled.p`
  font-size: 1.125rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.gray};
`;

const HomeButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorDescription>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </ErrorDescription>
      <HomeButton 
        to="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>🏠</span> Back to Home
      </HomeButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;