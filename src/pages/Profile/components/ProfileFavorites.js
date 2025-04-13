// src/pages/Profile/components/ProfileFavorites.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ContentCard from '../../../components/common/ContentCard';

const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
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
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.lightGray};
`;

const EmptyStateTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const EmptyStateText = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-bottom: 1.5rem;
`;

const ExploreButton = styled.a`
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

// Mock favorites data
const favoritesData = {
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
      image: 'https://source.unsplash.com/random/300x450/?queen',
      artist: 'Queen',
      year: 1975,
      link: '/music/bohemian-rhapsody',
    },
    {
      id: 103,
      title: 'Death Note',
      type: 'anime',
      image: 'https://source.unsplash.com/random/300x450/?death-note',
      rating: 4.8,
      year: 2006,
      link: '/anime/death-note',
    },
    {
      id: 104,
      title: 'DALL-E 2',
      type: 'ai',
      image: 'https://source.unsplash.com/random/300x450/?ai-art',
      rating: 4.8,
      category: 'Image Generation',
      link: '/ai/dall-e',
    },
    {
      id: 105,
      title: 'Interstellar',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?space',
      rating: 4.8,
      year: 2014,
      link: '/film/interstellar',
    },
    {
      id: 106,
      title: 'Thriller',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?michael-jackson',
      artist: 'Michael Jackson',
      year: 1982,
      link: '/music/thriller',
    },
  ],
  film: [
    {
      id: 201,
      title: 'The Dark Knight',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?batman',
      rating: 4.9,
      year: 2008,
      link: '/film/dark-knight',
    },
    {
      id: 202,
      title: 'Interstellar',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?space',
      rating: 4.8,
      year: 2014,
      link: '/film/interstellar',
    },
    {
      id: 203,
      title: 'Inception',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?inception',
      rating: 4.8,
      year: 2010,
      link: '/film/inception',
    },
    {
      id: 204,
      title: 'The Shawshank Redemption',
      type: 'film',
      image: 'https://source.unsplash.com/random/300x450/?prison',
      rating: 4.9,
      year: 1994,
      link: '/film/shawshank-redemption',
    },
  ],
  music: [
    {
      id: 301,
      title: 'Bohemian Rhapsody',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?queen',
      artist: 'Queen',
      year: 1975,
      link: '/music/bohemian-rhapsody',
    },
    {
      id: 302,
      title: 'Thriller',
      type: 'music',
      image: 'https://source.unsplash.com/random/300x450/?michael-jackson',
      artist: 'Michael Jackson',
      year: 1982,
      link: '/music/thriller',
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
  ],
  ai: [
    {
      id: 501,
      title: 'DALL-E 2',
      type: 'ai',
      image: 'https://source.unsplash.com/random/300x450/?ai-art',
      rating: 4.8,
      category: 'Image Generation',
      link: '/ai/dall-e',
    },
  ],
};

const ProfileFavorites = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All Favorites' },
    { id: 'film', label: 'Films & TV' },
    { id: 'music', label: 'Music' },
    { id: 'anime', label: 'Anime' },
    { id: 'ai', label: 'AI Tools' },
  ];
  
  return (
    <FavoritesContainer>
      <PageTitle>Your Favorites</PageTitle>
      
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
      
      {favoritesData[activeTab] && favoritesData[activeTab].length > 0 ? (
        <ContentGrid>
          {favoritesData[activeTab].map((content) => (
            <ContentCard 
              key={content.id}
              content={content}
            />
          ))}
        </ContentGrid>
      ) : (
        <EmptyState>
          <EmptyStateIcon>💔</EmptyStateIcon>
          <EmptyStateTitle>No favorites yet</EmptyStateTitle>
          <EmptyStateText>
            You haven't added any {activeTab !== 'all' ? activeTab : ''} content to your favorites yet.
          </EmptyStateText>
          <ExploreButton href={`/${activeTab !== 'all' ? activeTab : ''}`}>
            Explore {activeTab !== 'all' ? activeTab : 'Content'}
          </ExploreButton>
        </EmptyState>
      )}
    </FavoritesContainer>
  );
};

export default ProfileFavorites;