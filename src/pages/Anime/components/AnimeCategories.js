// src/pages/Anime/components/AnimeCategories.js
import React from 'react';
import styled from 'styled-components';
import ContentCard from '../../../components/common/ContentCard';

const CategoriesContainer = styled.div`
  padding: 2rem 0;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
`;

const FilterSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: ${props => props.theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.anime};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

// Mock anime data
const animes = [
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
  // Add more anime as needed
];

const AnimeCategories = () => {
  return (
    <CategoriesContainer>
      <PageTitle>Anime Categories</PageTitle>
      
      <FiltersContainer>
        <FilterSelect>
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="isekai">Isekai</option>
          <option value="mecha">Mecha</option>
        </FilterSelect>
        
        <FilterSelect>
          <option value="">Release Year</option>
          <option value="2020s">2020s</option>
          <option value="2010s">2010s</option>
          <option value="2000s">2000s</option>
          <option value="1990s">1990s</option>
          <option value="older">Older</option>
        </FilterSelect>
        
        <FilterSelect>
          <option value="">Rating</option>
          <option value="9+">9+</option>
          <option value="8+">8+</option>
          <option value="7+">7+</option>
          <option value="6+">6+</option>
        </FilterSelect>
        
        <FilterSelect>
          <option value="">Seasons</option>
          <option value="1">1 Season</option>
          <option value="2-3">2-3 Seasons</option>
          <option value="4+">4+ Seasons</option>
          <option value="ongoing">Ongoing</option>
        </FilterSelect>
      </FiltersContainer>
      
      <ContentGrid>
        {animes.map(anime => (
          <ContentCard key={anime.id} content={anime} />
        ))}
      </ContentGrid>
    </CategoriesContainer>
  );
};

export default AnimeCategories;