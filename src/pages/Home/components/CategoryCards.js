// src/pages/Home/components/CategoryCards.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CategoryCard = styled(motion(Link))`
  position: relative;
  height: 200px;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: ${props => props.theme.colors.white};
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center;
  box-shadow: ${props => props.theme.shadows.medium};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      ${props => 
        props.category === 'film' ? `${props.theme.colors.film}CC` :
        props.category === 'music' ? `${props.theme.colors.music}CC` :
        props.category === 'anime' ? `${props.theme.colors.anime}CC` :
        props.category === 'ai' ? `${props.theme.colors.ai}CC` :
        `${props.theme.colors.primary}CC`
      } 100%
    );
    z-index: 1;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
`;

// Category data
const categories = [
  {
    id: 'film',
    title: 'AkiFilm',
    description: 'Movies, TV Shows, and more',
    image: 'https://source.unsplash.com/random/600x400/?movie',
    link: '/film',
  },
  {
    id: 'music',
    title: 'AkiMusic',
    description: 'Discover your next favorite track',
    image: 'https://source.unsplash.com/random/600x400/?music',
    link: '/music',
  },
  {
    id: 'anime',
    title: 'AkiAnime',
    description: 'Anime series and manga collections',
    image: 'https://source.unsplash.com/random/600x400/?anime',
    link: '/anime',
  },
  {
    id: 'ai',
    title: 'AkiAI',
    description: 'Cutting-edge AI tools and services',
    image: 'https://source.unsplash.com/random/600x400/?technology',
    link: '/ai',
  },
];

const CategoryCards = () => {
  return (
    <CardsContainer>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          to={category.link}
          bgimage={category.image}
          category={category.id}
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
        >
          <CardContent>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardContent>
        </CategoryCard>
      ))}
    </CardsContainer>
  );
};

export default CategoryCards;