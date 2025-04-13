// src/pages/Anime/components/AnimeHome.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContentCard from '../../../components/common/ContentCard';

const AnimeHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeroSection = styled.div`
  background-image: url('https://source.unsplash.com/random/1600x600/?anime');
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.large};
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(114, 9, 183, 0.3) 0%,
      rgba(114, 9, 183, 0.7) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: ${props => props.theme.colors.white};
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  max-width: 600px;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.anime};
  color: ${props => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: ${props => props.theme.colors.dark};
`;

const ViewAllLink = styled(Link)`
  color: ${props => props.theme.colors.anime};
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

// Mock anime data
const popularAnime = [
  {
    id: 1001,
    title: 'Attack on Titan',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?titan',
    rating: 4.9,
    year: 2013,
    link: '/anime/attack-on-titan',
  },
  {
    id: 1002,
    title: 'Death Note',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?death-note',
    rating: 4.8,
    year: 2006,
    link: '/anime/death-note',
  },
  {
    id: 1003,
    title: 'Fullmetal Alchemist: Brotherhood',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?alchemy',
    rating: 4.9,
    year: 2009,
    link: '/anime/fullmetal-alchemist',
  },
  {
    id: 1004,
    title: 'One Punch Man',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?superhero',
    rating: 4.8,
    year: 2015,
    link: '/anime/one-punch-man',
  },
  {
    id: 1005,
    title: 'My Hero Academia',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?hero',
    rating: 4.7,
    year: 2016,
    link: '/anime/my-hero-academia',
  },
];

const newReleases = [
  {
    id: 2001,
    title: 'Demon Slayer: Mugen Train',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?demon',
    rating: 4.9,
    year: 2020,
    link: '/anime/demon-slayer-movie',
  },
  {
    id: 2002,
    title: 'Jujutsu Kaisen',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?jujutsu',
    rating: 4.8,
    year: 2020,
    link: '/anime/jujutsu-kaisen',
  },
  {
    id: 2003,
    title: 'Chainsaw Man',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?chainsaw',
    rating: 4.7,
    year: 2022,
    link: '/anime/chainsaw-man',
  },
  {
    id: 2004,
    title: 'Spy x Family',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?spy-family',
    rating: 4.8,
    year: 2022,
    link: '/anime/spy-family',
  },
  {
    id: 2005,
    title: 'Cyberpunk: Edgerunners',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?cyberpunk',
    rating: 4.7,
    year: 2022,
    link: '/anime/cyberpunk-edgerunners',
  },
];

const AnimeHome = () => {
  return (
    <AnimeHomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>AkiAnime</HeroTitle>
          <HeroDescription>
            Discover the best anime series and movies. From action-packed shonen to heartwarming slice of life, find your next anime obsession.
          </HeroDescription>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HeroButton to="/anime/random">
              <span>🎲</span> Find Random Anime
            </HeroButton>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <section>
        <SectionHeader>
          <SectionTitle>Popular Anime</SectionTitle>
          <ViewAllLink to="/anime/categories">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {popularAnime.map(anime => (
            <ContentCard key={anime.id} content={anime} />
          ))}
        </ContentGrid>
      </section>
      
      <section>
        <SectionHeader>
          <SectionTitle>New Releases</SectionTitle>
          <ViewAllLink to="/anime/categories?filter=new">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {newReleases.map(anime => (
            <ContentCard key={anime.id} content={anime} />
          ))}
        </ContentGrid>
      </section>
    </AnimeHomeContainer>
  );
};

export default AnimeHome;