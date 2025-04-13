// src/pages/Home/HomePage.js
import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import CategoryCards from './components/CategoryCards';
import TrendingContent from './components/TrendingContent';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import RandomSuggestions from './components/RandomSuggestions';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection />
      
      <div className="container">
        <SectionTitle>Explore Categories</SectionTitle>
        <CategoryCards />
      </div>
      
      <div className="container">
        <SectionTitle>Trending Now</SectionTitle>
        <TrendingContent />
      </div>
      
      <div className="container">
        <SectionTitle>Recommended For You</SectionTitle>
        <PersonalizedRecommendations />
      </div>
      
      <div className="container">
        <SectionTitle>Feeling Lucky?</SectionTitle>
        <RandomSuggestions />
      </div>
    </HomeContainer>
  );
};

export default HomePage;