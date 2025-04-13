// src/pages/Film/components/FilmRandom.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RandomContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.film};
  margin-bottom: 2rem;
  text-align: center;
`;

const FiltersContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.dark};
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.film};
  }
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MoodContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const MoodButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.selected ? props.theme.colors.film : props.theme.colors.lightGray};
  color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.dark};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.selected ? props.theme.colors.film : '#E0E0E0'};
  }
`;

const GenerateButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.colors.film};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const ResultContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  display: ${props => props.visible ? 'block' : 'none'};
`;

const ResultHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ResultImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
  }
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.dark};
`;

const ResultMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const ResultTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.875rem;
`;

const ResultRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.theme.colors.film};
  font-weight: 600;
`;

const ResultDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ResultActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? props.theme.colors.film : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.film};
  border: 1px solid ${props => props.theme.colors.film};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  text-align: center;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#D61F69' : 'rgba(247, 37, 133, 0.1)'};
  }
`;

const TryAgainButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  color: ${props => props.theme.colors.film};
  border: 1px solid ${props => props.theme.colors.film};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
`;

const FilmRandom = () => {
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    rating: '',
    duration: '',
    mood: '',
  });
  
  const [showResult, setShowResult] = useState(false);
  const [randomFilm, setRandomFilm] = useState(null);
  
  const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 
    'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'
  ];
  
  const years = [
    '2020s', '2010s', '2000s', '1990s', '1980s', '1970s', 'Older'
  ];
  
  const ratings = [
    'Any Rating', '9+', '8+', '7+', '6+', '5+'
  ];
  
  const durations = [
    'Any Length', 'Under 90 min', '90-120 min', 'Over 120 min'
  ];
  
  const moods = [
    'Happy', 'Sad', 'Exciting', 'Scary', 'Thought-provoking', 'Relaxing'
  ];
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleMoodSelect = (mood) => {
    setFilters(prev => ({ ...prev, mood: prev.mood === mood ? '' : mood }));
  };
  
  // Mock film data for random selection
  const mockFilms = [
    {
      id: 1,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      rating: 8.8,
      duration: '148 min',
      director: 'Christopher Nolan',
      image: 'https://source.unsplash.com/random/400x600/?inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      mood: 'Thought-provoking',
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      rating: 9.3,
      duration: '142 min',
      director: 'Frank Darabont',
      image: 'https://source.unsplash.com/random/400x600/?prison',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      mood: 'Thought-provoking',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      rating: 9.0,
      duration: '152 min',
      director: 'Christopher Nolan',
      image: 'https://source.unsplash.com/random/400x600/?batman',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      mood: 'Exciting',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      year: 1994,
      genre: 'Crime',
      rating: 8.9,
      duration: '154 min',
      director: 'Quentin Tarantino',
      image: 'https://source.unsplash.com/random/400x600/?pulp',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      mood: 'Exciting',
    },
    {
      id: 5,
      title: 'Forrest Gump',
      year: 1994,
      genre: 'Drama',
      rating: 8.8,
      duration: '142 min',
      director: 'Robert Zemeckis',
      image: 'https://source.unsplash.com/random/400x600/?running',
      description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      mood: 'Happy',
    },
  ];
  
  const generateRandomFilm = () => {
    // In a real app, this would filter based on the selected criteria
    // For now, just pick a random film from our mock data
    const randomIndex = Math.floor(Math.random() * mockFilms.length);
    setRandomFilm(mockFilms[randomIndex]);
    setShowResult(true);
  };
  
  const resetForm = () => {
    setShowResult(false);
    setRandomFilm(null);
    // Optionally reset filters
    // setFilters({ genre: '', year: '', rating: '', duration: '', mood: '' });
  };
  
  return (
    <RandomContainer>
      <PageTitle>Find a Random Film</PageTitle>
      
      <FiltersContainer>
        <FilterTitle>Customize Your Recommendation</FilterTitle>
        
        <FilterRow>
          <FilterGroup>
            <FilterLabel htmlFor="genre">Genre</FilterLabel>
            <FilterSelect 
              id="genre" 
              name="genre" 
              value={filters.genre} 
              onChange={handleFilterChange}
            >
              <option value="">Any Genre</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel htmlFor="year">Release Period</FilterLabel>
            <FilterSelect 
              id="year" 
              name="year" 
              value={filters.year} 
              onChange={handleFilterChange}
            >
              <option value="">Any Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
        </FilterRow>
        
        <FilterRow>
          <FilterGroup>
            <FilterLabel htmlFor="rating">Minimum Rating</FilterLabel>
            <FilterSelect 
              id="rating" 
              name="rating" 
              value={filters.rating} 
              onChange={handleFilterChange}
            >
              {ratings.map(rating => (
                <option key={rating} value={rating}>{rating}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel htmlFor="duration">Duration</FilterLabel>
            <FilterSelect 
              id="duration" 
              name="duration" 
              value={filters.duration} 
              onChange={handleFilterChange}
            >
              {durations.map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
        </FilterRow>
        
        <FilterGroup>
          <FilterLabel>Mood</FilterLabel>
          <MoodContainer>
            {moods.map(mood => (
              <MoodButton
                key={mood}
                selected={filters.mood === mood}
                onClick={() => handleMoodSelect(mood)}
              >
                {mood}
              </MoodButton>
            ))}
          </MoodContainer>
        </FilterGroup>
        
        <GenerateButton
          onClick={generateRandomFilm}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>🎲</span> Generate Random Film
        </GenerateButton>
      </FiltersContainer>
      
      <ResultContainer 
        visible={showResult}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {randomFilm && (
          <>
            <ResultHeader>
              <ResultImage src={randomFilm.image} alt={randomFilm.title} />
              <ResultInfo>
                <ResultTitle>{randomFilm.title}</ResultTitle>
                <ResultMeta>
                  <ResultTag>{randomFilm.year}</ResultTag>
                  <ResultTag>{randomFilm.genre}</ResultTag>
                  <ResultTag>{randomFilm.duration}</ResultTag>
                  <ResultRating>
                    <span>★</span> {randomFilm.rating}
                  </ResultRating>
                </ResultMeta>
                <ResultDescription>{randomFilm.description}</ResultDescription>
                <ResultActions>
                  <ActionButton href="#" primary>Watch Now</ActionButton>
                  <ActionButton href="#">Add to Watchlist</ActionButton>
                </ResultActions>
              </ResultInfo>
            </ResultHeader>
            
            <TryAgainButton
              onClick={resetForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Again
            </TryAgainButton>
          </>
        )}
      </ResultContainer>
    </RandomContainer>
  );
};

export default FilmRandom;