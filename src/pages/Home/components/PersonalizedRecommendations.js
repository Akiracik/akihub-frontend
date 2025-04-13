// src/pages/Home/components/PersonalizedRecommendations.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ContentCard from '../../../components/common/ContentCard';

const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  padding-bottom: 1rem;
  overflow-x: auto;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  background-color: ${props => props.active ? 
    props.category === 'film' ? props.theme.colors.film :
    props.category === 'music' ? props.theme.colors.music :
    props.category === 'anime' ? props.theme.colors.anime :
    props.category === 'ai' ? props.theme.colors.ai :
    props.theme.colors.primary
    : 'transparent'
  };
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.dark};
  border: 1px solid ${props => props.active ? 'transparent' : props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => !props.active && props.theme.colors.lightGray};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

// Mock personalized recommendations data
const recommendationsData = {
  all: [
    {
      id: 101,
      title: 'The Dark Knight',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?batman',
      rating: 4.9,
      year: 2008,
      link: '/film/dark-knight',
    },
    {
      id: 102,
      title: 'Bohemian Rhapsody',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?queen-band',
      artist: 'Queen',
      year: 1975,
      link: '/music/bohemian-rhapsody',
    },
    {
      id: 103,
      title: 'My Hero Academia',
      type: 'anime',
      image: 'https://source.unsplash.com/random/300x450/?superhero-anime',
      rating: 4.7,
      year: 2016,
      link: '/anime/my-hero-academia',
    },
    {
      id: 104,
      title: 'DALL-E 2',
      type: 'ai',
      image: 'https://source.unsplash.com/random/300x450/?ai-generated-art',
      rating: 4.8,
      category: 'Image Generation',
      link: '/ai/dall-e',
    },
  ],
  film: [
    {
      id: 201,
      title: 'Interstellar',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?space',
      rating: 4.8,
      year: 2014,
      link: '/film/interstellar',
    },
    {
      id: 202,
      title: 'Parasite',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?korean-film',
      rating: 4.6,
      year: 2019,
      link: '/film/parasite',
    },
    {
      id: 203,
      title: 'The Shawshank Redemption',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?prison',
      rating: 4.9,
      year: 1994,
      link: '/film/shawshank-redemption',
    },
    {
      id: 204,
      title: 'Pulp Fiction',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?pulp',
      rating: 4.7,
      year: 1994,
      link: '/film/pulp-fiction',
    },
  ],
  music: [
    {
      id: 301,
      title: 'Thriller',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?michael-jackson',
      artist: 'Michael Jackson',
      year: 1982,
      link: '/music/thriller',
    },
    {
      id: 302,
      title: 'Hotel California',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?eagles',
      artist: 'Eagles',
      year: 1976,
      link: '/music/hotel-california',
    },
    {
      id: 303,
      title: 'Billie Jean',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?billie-jean',
      artist: 'Michael Jackson',
      year: 1983,
      link: '/music/billie-jean',
    },
    {
      id: 304,
      title: 'Imagine',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?john-lennon',
      artist: 'John Lennon',
      year: 1971,
      link: '/music/imagine',
    },
  ],
  anime: [
    {
      id: 401,
      title: 'Death Note',
      type: 'anime',
      image: 'https://source.unsplash.com/random/300x450/?death-note',
      rating: 4.8,
      year: 2006,
      link: '/anime/death-note',
    },
    {
      id: 402,
      title: 'Fullmetal Alchemist',
      type: 'anime',
      image: 'https://source.unsplash.com/random/300x450/?alchemist',
      rating: 4.9,
      year: 2009,
      link: '/anime/fullmetal-alchemist',
    },
    {
      id: 403,
      title: 'One Piece',
      type: 'anime',
      image: 'https://source.unsplash.com/random/300x450/?pirate',
      rating: 4.7,
      year: 1999,
      link: '/anime/one-piece',
    },
    {
      id: 404,
      title: 'Naruto',
      type: 'anime',
      image: 'https://source.unsplash.com/random/300x450/?ninja',
      rating: 4.6,
      year: 2002,
      link: '/anime/naruto',
    },
  ],
  ai: [
    {
      id: 501,
      title: 'Stable Diffusion',
      type: 'ai',
      image: 'https://source.unsplash.com/random/300x450/?diffusion',
      rating: 4.7,
      category: 'Image Generation',
      link: '/ai/stable-diffusion',
    },
    {
      id: 502,
      title: 'GitHub Copilot',
      type: 'ai',
      image: 'https://source.unsplash.com/random/300x450/?code',
      rating: 4.8,
      category: 'Code Assistant',
      link: '/ai/github-copilot',
    },
    {
      id: 503,
      title: 'Jasper',
      type: 'ai',
      image: 'https://source.unsplash.com/random/300x450/?writing',
      rating: 4.6,
      category: 'Content Writing',
      link: '/ai/jasper',
    },
    {
      id: 504,
      title: 'Runway ML',
      type: 'ai',
      image: 'https://source.unsplash.com/random/300x450/?video-editing',
      rating: 4.5,
      category: 'Video Generation',
      link: '/ai/runway-ml',
    },
  ],
};

const PersonalizedRecommendations = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All Recommendations' },
    { id: 'film', label: 'Films & TV' },
    { id: 'music', label: 'Music' },
    { id: 'anime', label: 'Anime' },
    { id: 'ai', label: 'AI Tools' },
  ];
  
  return (
    <RecommendationsContainer>
      <CategoryTabs>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            category={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </CategoryTabs>
      
      <ContentGrid>
        {recommendationsData[activeTab].map((content) => (
          <ContentCard 
            key={content.id}
            content={content}
          />
        ))}
      </ContentGrid>
    </RecommendationsContainer>
  );
};

export default PersonalizedRecommendations;