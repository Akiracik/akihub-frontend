// src/pages/Anime/components/AnimeRandom.js
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
  color: ${props => props.theme.colors.anime};
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
    border-color: ${props => props.theme.colors.anime};
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

const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const GenreButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.selected ? props.theme.colors.anime : props.theme.colors.lightGray};
  color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.dark};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.selected ? props.theme.colors.anime : '#E0E0E0'};
  }
`;

const GenerateButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.colors.anime};
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
  color: ${props => props.theme.colors.anime};
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
  background-color: ${props => props.primary ? props.theme.colors.anime : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.anime};
  border: 1px solid ${props => props.theme.colors.anime};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  text-align: center;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#5A0791' : 'rgba(114, 9, 183, 0.1)'};
  }
`;

const TryAgainButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  color: ${props => props.theme.colors.anime};
  border: 1px solid ${props => props.theme.colors.anime};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
`;

const AnimeRandom = () => {
  const [filters, setFilters] = useState({
    genre: '',
    type: '',
    season: '',
    studio: '',
    year: '',
    selectedGenres: [],
  });
  
  const [showResult, setShowResult] = useState(false);
  const [randomAnime, setRandomAnime] = useState(null);
  
  const animeTypes = [
    'TV Series', 'Movie', 'OVA', 'Special', 'ONA'
  ];
  
  const seasons = [
    'Any Number', '1 Season', '2-3 Seasons', '4+ Seasons', 'Ongoing'
  ];
  
  const studios = [
    'Any Studio', 'Madhouse', 'Kyoto Animation', 'Bones', 'Ufotable', 'MAPPA', 'A-1 Pictures', 'Wit Studio'
  ];
  
  const years = [
    'Any Year', '2020s', '2010s', '2000s', '1990s', 'Older'
  ];
  
  const genres = [
    'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Isekai', 
    'Mecha', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'Supernatural'
  ];
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleGenre = (genre) => {
    setFilters(prev => {
      const currentGenres = [...prev.selectedGenres];
      if (currentGenres.includes(genre)) {
        return { ...prev, selectedGenres: currentGenres.filter(g => g !== genre) };
      } else {
        return { ...prev, selectedGenres: [...currentGenres, genre] };
      }
    });
  };
  
  // Mock anime data for random selection
  const mockAnime = [
    {
      id: 1,
      title: 'Attack on Titan',
      type: 'TV Series',
      seasons: 4,
      year: 2013,
      studio: 'Wit Studio / MAPPA',
      genres: ['Action', 'Drama', 'Fantasy'],
      rating: 9.0,
      image: 'https://source.unsplash.com/random/400x600/?titan',
      description: 'In a world where humanity lives within cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason, a young boy named Eren Yeager vows to cleanse the world of the giant humanoid Titans that have brought humanity to the brink of extinction.',
    },
    {
      id: 2,
      title: 'Fullmetal Alchemist: Brotherhood',
      type: 'TV Series',
      seasons: 1,
      year: 2009,
      studio: 'Bones',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
      rating: 9.1,
      image: 'https://source.unsplash.com/random/400x600/?alchemy',
      description: 'Two brothers search for a Philosopher\'s Stone after an attempt to revive their deceased mother goes wrong and leaves them in damaged physical forms.',
    },
    {
      id: 3,
      title: 'Demon Slayer',
      type: 'TV Series',
      seasons: 3,
      year: 2019,
      studio: 'Ufotable',
      genres: ['Action', 'Fantasy', 'Adventure'],
      rating: 8.7,
      image: 'https://source.unsplash.com/random/400x600/?demon',
      description: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.',
    },
    {
      id: 4,
      title: 'Your Name',
      type: 'Movie',
      year: 2016,
      studio: 'CoMix Wave Films',
      genres: ['Romance', 'Fantasy', 'Drama'],
      rating: 8.8,
      image: 'https://source.unsplash.com/random/400x600/?stars',
      description: 'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?',
    },
    {
      id: 5,
      title: 'One Punch Man',
      type: 'TV Series',
      seasons: 2,
      year: 2015,
      studio: 'Madhouse',
      genres: ['Action', 'Comedy', 'Sci-Fi'],
      rating: 8.7,
      image: 'https://source.unsplash.com/random/400x600/?superhero',
      description: 'The story of Saitama, a hero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge.',
    },
  ];
  
  const generateRandomAnime = () => {
    // In a real app, this would filter based on the selected criteria
    // For now, just pick a random anime from our mock data
    const randomIndex = Math.floor(Math.random() * mockAnime.length);
    setRandomAnime(mockAnime[randomIndex]);
    setShowResult(true);
  };
  
  const resetForm = () => {
    setShowResult(false);
    setRandomAnime(null);
    // Optionally reset filters
    // setFilters({ genre: '', type: '', season: '', studio: '', year: '', selectedGenres: [] });
  };
  
  return (
    <RandomContainer>
      <PageTitle>Find a Random Anime</PageTitle>
      
      <FiltersContainer>
        <FilterTitle>Customize Your Recommendation</FilterTitle>
        
        <FilterRow>
          <FilterGroup>
            <FilterLabel htmlFor="type">Type</FilterLabel>
            <FilterSelect 
              id="type" 
              name="type" 
              value={filters.type} 
              onChange={handleFilterChange}
            >
              <option value="">Any Type</option>
              {animeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel htmlFor="season">Seasons</FilterLabel>
            <FilterSelect 
              id="season" 
              name="season" 
              value={filters.season} 
              onChange={handleFilterChange}
            >
              {seasons.map(season => (
                <option key={season} value={season}>{season}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
        </FilterRow>

        // src/pages/Anime/components/AnimeRandom.js (devam)
        <FilterRow>
          <FilterGroup>
            <FilterLabel htmlFor="studio">Studio</FilterLabel>
            <FilterSelect 
              id="studio" 
              name="studio" 
              value={filters.studio} 
              onChange={handleFilterChange}
            >
              {studios.map(studio => (
                <option key={studio} value={studio}>{studio}</option>
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
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
        </FilterRow>
        
        <FilterGroup>
          <FilterLabel>Genres (select multiple)</FilterLabel>
          <GenreContainer>
            {genres.map(genre => (
              <GenreButton
                key={genre}
                selected={filters.selectedGenres.includes(genre)}
                onClick={() => toggleGenre(genre)}
              >
                {genre}
              </GenreButton>
            ))}
          </GenreContainer>
        </FilterGroup>
        
        <GenerateButton
          onClick={generateRandomAnime}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>🎲</span> Generate Random Anime
        </GenerateButton>
      </FiltersContainer>
      
      <ResultContainer 
        visible={showResult}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {randomAnime && (
          <>
            <ResultHeader>
              <ResultImage src={randomAnime.image} alt={randomAnime.title} />
              <ResultInfo>
                <ResultTitle>{randomAnime.title}</ResultTitle>
                <ResultMeta>
                  <ResultTag>{randomAnime.type}</ResultTag>
                  <ResultTag>{randomAnime.year}</ResultTag>
                  {randomAnime.seasons && <ResultTag>{randomAnime.seasons} Season{randomAnime.seasons > 1 ? 's' : ''}</ResultTag>}
                  <ResultRating>
                    <span>★</span> {randomAnime.rating}
                  </ResultRating>
                </ResultMeta>
                <ResultMeta>
                  {randomAnime.genres.map(genre => (
                    <ResultTag key={genre}>{genre}</ResultTag>
                  ))}
                </ResultMeta>
                <ResultDescription>{randomAnime.description}</ResultDescription>
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

export default AnimeRandom;