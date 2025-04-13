// src/pages/Home/components/TrendingContent.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContentCard from '../../../components/common/ContentCard';

const TrendingContainer = styled.div`
  position: relative;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  padding: 1rem 0;
  margin: 0 -1rem;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1rem;
`;

const ScrollButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.white};
  border: none;
  box-shadow: ${props => props.theme.shadows.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &.left {
    left: -20px;
  }
  
  &.right {
    right: -20px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

// Mock trending content data
const trendingContent = [
  {
    id: 1,
    title: 'Inception',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?movie-poster',
    rating: 4.8,
    year: 2010,
    link: '/film/inception',
  },
  {
    id: 2,
    title: 'Blinding Lights',
    type: 'music',
    image: 'https://source.unsplash.com/random/300x450/?album-cover',
    artist: 'The Weeknd',
    year: 2020,
    link: '/music/blinding-lights',
  },
  {
    id: 3,
    title: 'Attack on Titan',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?anime',
    rating: 4.9,
    year: 2013,
    link: '/anime/attack-on-titan',
  },
  {
    id: 4,
    title: 'Midjourney',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?ai-art',
    rating: 4.7,
    category: 'Image Generation',
    link: '/ai/midjourney',
  },
  {
    id: 5,
    title: 'The Queen\'s Gambit',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?tv-show',
    rating: 4.6,
    year: 2020,
    link: '/film/queens-gambit',
  },
  {
    id: 6,
    title: 'As It Was',
    type: 'music',
    image: 'https://source.unsplash.com/random/300x450/?music',
    artist: 'Harry Styles',
    year: 2022,
    link: '/music/as-it-was',
  },
  {
    id: 7,
    title: 'Demon Slayer',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?japanese-animation',
    rating: 4.8,
    year: 2019,
    link: '/anime/demon-slayer',
  },
  {
    id: 8,
    title: 'ChatGPT',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?chatbot',
    rating: 4.9,
    category: 'Text Generation',
    link: '/ai/chatgpt',
  },
];

const TrendingContent = () => {
  const scrollContainerRef = React.useRef(null);
  
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300;
    
    if (container) {
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  return (
    <TrendingContainer>
      <ScrollButton 
        className="left"
        onClick={() => scroll('left')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ←
      </ScrollButton>
      
      <ScrollContainer ref={scrollContainerRef}>
        <ContentGrid>
          {trendingContent.map((content) => (
            <ContentCard 
              key={content.id}
              content={content}
            />
          ))}
        </ContentGrid>
      </ScrollContainer>
      
      <ScrollButton 
        className="right"
        onClick={() => scroll('right')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        →
      </ScrollButton>
    </TrendingContainer>
  );
};

export default TrendingContent;