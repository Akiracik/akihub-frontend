// src/pages/Film/components/FilmCategories.js
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
    border-color: ${props => props.theme.colors.film};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

// Mock film data
const films = [
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
  // Add more films as needed
];

const FilmCategories = () => {
  return (
    <CategoriesContainer>
      <PageTitle>Film Categories</PageTitle>
      
      <FiltersContainer>
        <FilterSelect>
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="sci-fi">Sci-Fi</option>
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
      </FiltersContainer>
      
      <ContentGrid>
        {films.map(film => (
          <ContentCard key={film.id} content={film} />
        ))}
      </ContentGrid>
    </CategoriesContainer>
  );
};

export default FilmCategories;