// src/pages/Home/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeroContainer = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 600px;
  }
`;

const HeroSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: ${props => props.theme.colors.white};
`;

const HeroCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 1rem;
  background-color: ${props => 
    props.category === 'film' ? props.theme.colors.film :
    props.category === 'music' ? props.theme.colors.music :
    props.category === 'anime' ? props.theme.colors.anime :
    props.category === 'ai' ? props.theme.colors.ai :
    props.theme.colors.primary
  };
  border-radius: ${props => props.theme.borderRadius.small};
  margin-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  max-width: 800px;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  z-index: 10;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.active ? props.theme.colors.white : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.fast};
`;

// Mock data for hero slides
const heroSlides = [
  {
    id: 1,
    category: 'film',
    title: 'Discover Your Next Favorite Movie',
    description: 'Explore thousands of films from Hollywood blockbusters to indie gems. Get personalized recommendations based on your taste.',
    image: 'https://source.unsplash.com/random/1600x900/?movie',
    link: '/film',
    buttonText: 'Explore AkiFilm',
  },
  {
    id: 2,
    category: 'music',
    title: 'Your Music, Your Way',
    description: 'Stream millions of tracks, create playlists, and discover new artists. All your favorite music in one place.',
    image: 'https://source.unsplash.com/random/1600x900/?music',
    link: '/music',
    buttonText: 'Explore AkiMusic',
  },
  {
    id: 3,
    category: 'anime',
    title: 'Anime Paradise for Fans',
    description: 'From classic series to the latest releases, find your perfect anime match with our curated collections and recommendations.',
    image: 'https://source.unsplash.com/random/1600x900/?anime',
    link: '/anime',
    buttonText: 'Explore AkiAnime',
  },
  {
    id: 4,
    category: 'ai',
    title: 'The Future of AI Tools',
    description: 'Discover cutting-edge AI tools for creativity, productivity, and innovation. Compare features and find the perfect solution for your needs.',
    image: 'https://source.unsplash.com/random/1600x900/?technology',
    link: '/ai',
    buttonText: 'Explore AkiAI',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <HeroContainer>
      <AnimatePresence mode="wait">
        <HeroSlide
          key={heroSlides[currentSlide].id}
          bgimage={heroSlides[currentSlide].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroContent>
            <HeroCategory category={heroSlides[currentSlide].category}>
              Aki{heroSlides[currentSlide].category.charAt(0).toUpperCase() + heroSlides[currentSlide].category.slice(1)}
            </HeroCategory>
            <HeroTitle>{heroSlides[currentSlide].title}</HeroTitle>
            <HeroDescription>{heroSlides[currentSlide].description}</HeroDescription>
            <HeroButton href={heroSlides[currentSlide].link}>
              {heroSlides[currentSlide].buttonText}
            </HeroButton>
          </HeroContent>
        </HeroSlide>
      </AnimatePresence>
      
      <SlideIndicators>
        {heroSlides.map((slide, index) => (
          <Indicator
            key={slide.id}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </SlideIndicators>
    </HeroContainer>
  );
};

export default HeroSection;