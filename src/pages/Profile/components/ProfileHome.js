// src/pages/Profile/components/ProfileHome.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContentCard from '../../../components/common/ContentCard';

const ProfileHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const WelcomeSection = styled.div`
  margin-bottom: 1rem;
`;

const WelcomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const WelcomeText = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 1.125rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 1.5rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.dark};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
`;

const ViewAllLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

// Mock recent activity data
const recentlyViewed = [
  {
    id: 101,
    title: 'Inception',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?inception',
    rating: 4.8,
    year: 2010,
    link: '/film/inception',
  },
  {
    id: 102,
    title: 'Blinding Lights',
    type: 'music',
    image: 'https://source.unsplash.com/random/300x450/?weeknd',
    artist: 'The Weeknd',
    year: 2020,
    link: '/music/blinding-lights',
  },
  {
    id: 103,
    title: 'Attack on Titan',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?titan',
    rating: 4.9,
    year: 2013,
    link: '/anime/attack-on-titan',
  },
  {
    id: 104,
    title: 'ChatGPT',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?ai-chat',
    rating: 4.7,
    category: 'Text Generation',
    link: '/ai/chatgpt',
  },
];

const favorites = [
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
    title: 'Bohemian Rhapsody',
    type: 'music',
    image: 'https://source.unsplash.com/random/300x450/?queen',
    artist: 'Queen',
    year: 1975,
    link: '/music/bohemian-rhapsody',
  },
  {
    id: 203,
    title: 'Death Note',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?death-note',
    rating: 4.8,
    year: 2006,
    link: '/anime/death-note',
  },
  {
    id: 204,
    title: 'DALL-E 2',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?ai-art',
    rating: 4.8,
    category: 'Image Generation',
    link: '/ai/dall-e',
  },
];

const ProfileHome = () => {
  // Mock user data
  const user = {
    name: 'John',
    stats: {
      favorites: 42,
      viewed: 128,
      lists: 7,
      reviews: 15,
    },
  };
  
  return (
    <ProfileHomeContainer>
      <WelcomeSection>
        <WelcomeTitle>Welcome back, {user.name}!</WelcomeTitle>
        <WelcomeText>Here's an overview of your activity and recommendations.</WelcomeText>
      </WelcomeSection>
      
      <StatsGrid>
        <StatCard>
          <StatValue color="film">{user.stats.favorites}</StatValue>
          <StatLabel>Favorites</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue color="music">{user.stats.viewed}</StatValue>
          <StatLabel>Items Viewed</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue color="anime">{user.stats.lists}</StatValue>
          <StatLabel>Lists Created</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue color="ai">{user.stats.reviews}</StatValue>
          <StatLabel>Reviews</StatLabel>
        </StatCard>
      </StatsGrid>
      
      <section>
        <SectionHeader>
          <SectionTitle>Recently Viewed</SectionTitle>
          <ViewAllLink to="/profile/history">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {recentlyViewed.map(item => (
            <ContentCard key={item.id} content={item} />
          ))}
        </ContentGrid>
      </section>
      
      <section>
        <SectionHeader>
          <SectionTitle>Your Favorites</SectionTitle>
          <ViewAllLink to="/profile/favorites">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {favorites.map(item => (
            <ContentCard key={item.id} content={item} />
          ))}
        </ContentGrid>
      </section>
    </ProfileHomeContainer>
  );
};

export default ProfileHome;