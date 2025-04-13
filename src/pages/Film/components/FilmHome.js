// src/pages/Film/components/FilmHome.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContentCard from '../../../components/common/ContentCard';

const FilmHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeroSection = styled.div`
  background-image: url('https://source.unsplash.com/random/1600x600/?cinema');
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
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 100%
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
  background-color: ${props => props.theme.colors.film};
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
  color: ${props => props.theme.colors.film};
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

// Mock film data
const popularFilms = [
  {
    id: 1001,
    title: 'The Shawshank Redemption',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?prison',
    rating: 4.9,
    year: 1994,
    link: '/film/shawshank-redemption',
  },
  {
    id: 1002,
    title: 'The Godfather',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?mafia',
    rating: 4.8,
    year: 1972,
    link: '/film/godfather',
  },
  {
    id: 1003,
    title: 'The Dark Knight',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?batman',
    rating: 4.9,
    year: 2008,
    link: '/film/dark-knight',
  },
  {
    id: 1004,
    title: 'Pulp Fiction',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?pulp',
    rating: 4.7,
    year: 1994,
    link: '/film/pulp-fiction',
  },
  {
    id: 1005,
    title: 'Fight Club',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?fight',
    rating: 4.8,
    year: 1999,
    link: '/film/fight-club',
  },
];

const newReleases = [
  {
    id: 2001,
    title: 'Dune',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?desert',
    rating: 4.7,
    year: 2021,
    link: '/film/dune',
  },
  {
    id: 2002,
    title: 'No Time to Die',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?spy',
    rating: 4.5,
    year: 2021,
    link: '/film/no-time-to-die',
  },
  {
    id: 2003,
    title: 'The Batman',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?batman-dark',
    rating: 4.6,
    year: 2022,
    link: '/film/the-batman',
  },
  {
    id: 2004,
    title: 'Top Gun: Maverick',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?jet',
    rating: 4.8,
    year: 2022,
    link: '/film/top-gun-maverick',
  },
  {
    id: 2005,
    title: 'Everything Everywhere All at Once',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?multiverse',
    rating: 4.9,
    year: 2022,
    link: '/film/everything-everywhere',
  },
];

const FilmHome = () => {
  return (
    <FilmHomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>AkiFilm</HeroTitle>
          <HeroDescription>
            Discover movies and TV shows tailored to your taste. From Hollywood blockbusters to indie gems, find your next favorite watch.
          </HeroDescription>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HeroButton to="/film/random">
              <span>🎲</span> Find Random Film
            </HeroButton>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <section>
        <SectionHeader>
          <SectionTitle>Popular Films</SectionTitle>
          <ViewAllLink to="/film/categories">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {popularFilms.map(film => (
            <ContentCard key={film.id} content={film} />
          ))}
        </ContentGrid>
      </section>
      
      <section>
        <SectionHeader>
          <SectionTitle>New Releases</SectionTitle>
          <ViewAllLink to="/film/categories?filter=new">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {newReleases.map(film => (
            <ContentCard key={film.id} content={film} />
          ))}
        </ContentGrid>
      </section>
    </FilmHomeContainer>
  );
};

export default FilmHome;