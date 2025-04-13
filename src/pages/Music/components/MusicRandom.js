// src/pages/Music/components/MusicRandom.js
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
  color: ${props => props.theme.colors.music};
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
    border-color: ${props => props.theme.colors.music};
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
  background-color: ${props => props.selected ? props.theme.colors.music : props.theme.colors.lightGray};
  color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.dark};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.selected ? props.theme.colors.music : '#E0E0E0'};
  }
`;

const GenerateButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.colors.music};
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
  height: 200px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
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

const ResultArtist = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.gray};
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

const TrackList = styled.div`
  margin-top: 2rem;
`;

const TrackListTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`;

const TrackNumber = styled.span`
  width: 30px;
  color: ${props => props.theme.colors.gray};
  font-size: 0.875rem;
`;

const TrackInfo = styled.div`
  flex: 1;
`;

const TrackTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const TrackArtist = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
`;

const TrackDuration = styled.span`
  color: ${props => props.theme.colors.gray};
  font-size: 0.875rem;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.music};
  font-size: 1.25rem;
  cursor: pointer;
  margin-right: 1rem;
`;

const ResultActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const ActionButton = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? props.theme.colors.music : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.music};
  border: 1px solid ${props => props.theme.colors.music};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  text-align: center;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#3BA9D0' : 'rgba(76, 201, 240, 0.1)'};
  }
`;

const TryAgainButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  color: ${props => props.theme.colors.music};
  border: 1px solid ${props => props.theme.colors.music};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
`;

const MusicRandom = () => {
  const [filters, setFilters] = useState({
    genre: '',
    era: '',
    popularity: '',
    mood: '',
  });
  
  const [showResult, setShowResult] = useState(false);
  const [randomMusic, setRandomMusic] = useState(null);
  
  const genres = [
    'Pop', 'Rock', 'Hip Hop', 'R&B', 'Country', 'Electronic', 'Jazz', 'Classical', 'Indie'
  ];
  
  const eras = [
    'Any Era', '2020s', '2010s', '2000s', '1990s', '1980s', '1970s', 'Older'
  ];
  
  const popularityLevels = [
    'Any Popularity', 'Mainstream', 'Popular', 'Underground', 'Indie', 'Emerging'
  ];
  
  const moods = [
    'Happy', 'Sad', 'Energetic', 'Calm', 'Romantic', 'Nostalgic', 'Focused'
  ];
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleMoodSelect = (mood) => {
    setFilters(prev => ({ ...prev, mood: prev.mood === mood ? '' : mood }));
  };
  
  // Mock music data for random selection
  const mockMusic = [
    {
      id: 1,
      title: 'Abbey Road',
      artist: 'The Beatles',
      genre: 'Rock',
      era: '1970s',
      popularity: 'Mainstream',
      mood: 'Nostalgic',
      image: 'https://source.unsplash.com/random/400x400/?vinyl-record',
      year: 1969,
      tracks: [
        { number: 1, title: 'Come Together', duration: '4:19' },
        { number: 2, title: 'Something', duration: '3:02' },
        { number: 3, title: 'Maxwell\'s Silver Hammer', duration: '3:27' },
        { number: 4, title: 'Oh! Darling', duration: '3:27' },
        { number: 5, title: 'Octopus\'s Garden', duration: '2:51' },
      ],
    },
    {
      id: 2,
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'Pop',
      era: '1980s',
      popularity: 'Mainstream',
      mood: 'Energetic',
      image: 'https://source.unsplash.com/random/400x400/?michael-jackson',
      year: 1982,
      tracks: [
        { number: 1, title: 'Wanna Be Startin\' Somethin\'', duration: '6:03' },
        { number: 2, title: 'Baby Be Mine', duration: '4:20' },
        { number: 3, title: 'The Girl Is Mine', duration: '3:42' },
        { number: 4, title: 'Thriller', duration: '5:57' },
        { number: 5, title: 'Beat It', duration: '4:18' },
      ],
    },
    {
      id: 3,
      title: 'Back in Black',
      artist: 'AC/DC',
      genre: 'Rock',
      era: '1980s',
      popularity: 'Mainstream',
      mood: 'Energetic',
      image: 'https://source.unsplash.com/random/400x400/?rock-band',
      year: 1980,
      tracks: [
        { number: 1, title: 'Hells Bells', duration: '5:12' },
        { number: 2, title: 'Shoot to Thrill', duration: '5:17' },
        { number: 3, title: 'What Do You Do for Money Honey', duration: '3:35' },
        { number: 4, title: 'Given the Dog a Bone', duration: '3:31' },
        { number: 5, title: 'Let Me Put My Love into You', duration: '4:16' },
      ],
    },
    {
      id: 4,
      title: 'Blonde',
      artist: 'Frank Ocean',
      genre: 'R&B',
      era: '2010s',
      popularity: 'Popular',
      mood: 'Sad',
      image: 'https://source.unsplash.com/random/400x400/?frank-ocean',
      year: 2016,
      tracks: [
        { number: 1, title: 'Nikes', duration: '5:14' },
        { number: 2, title: 'Ivy', duration: '4:09' },
        { number: 3, title: 'Pink + White', duration: '3:04' },
        { number: 4, title: 'Be Yourself', duration: '1:26' },
        { number: 5, title: 'Solo', duration: '4:17' },
      ],
    },
    {
      id: 5,
      title: 'Folklore',
      artist: 'Taylor Swift',
      genre: 'Indie',
      era: '2020s',
      popularity: 'Mainstream',
      mood: 'Calm',
      image: 'https://source.unsplash.com/random/400x400/?taylor-swift',
      year: 2020,
      tracks: [
        { number: 1, title: 'The 1', duration: '3:30' },
        { number: 2, title: 'Cardigan', duration: '3:59' },
        { number: 3, title: 'The Last Great American Dynasty', duration: '3:51' },
        { number: 4, title: 'Exile (feat. Bon Iver)', duration: '4:45' },
        { number: 5, title: 'My Tears Ricochet', duration: '4:15' },
      ],
    },
  ];
  
  const generateRandomMusic = () => {
    // In a real app, this would filter based on the selected criteria
    // For now, just pick a random album from our mock data
    const randomIndex = Math.floor(Math.random() * mockMusic.length);
    setRandomMusic(mockMusic[randomIndex]);
    setShowResult(true);
  };
  
  const resetForm = () => {
    setShowResult(false);
    setRandomMusic(null);
    // Optionally reset filters
    // setFilters({ genre: '', era: '', popularity: '', mood: '' });
  };
  
  return (
    <RandomContainer>
      <PageTitle>Find Random Music</PageTitle>
      
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
            <FilterLabel htmlFor="era">Era</FilterLabel>
            <FilterSelect 
              id="era" 
              name="era" 
              value={filters.era} 
              onChange={handleFilterChange}
            >
              {eras.map(era => (
                <option key={era} value={era}>{era}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
        </FilterRow>
        
        <FilterRow>
          <FilterGroup>
            <FilterLabel htmlFor="popularity">Popularity</FilterLabel>
            <FilterSelect 
              id="popularity" 
              name="popularity" 
              value={filters.popularity} 
              onChange={handleFilterChange}
            >
              {popularityLevels.map(level => (
                <option key={level} value={level}>{level}</option>
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
          onClick={generateRandomMusic}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>🎲</span> Generate Random Music
        </GenerateButton>
      </FiltersContainer>
      
      <ResultContainer 
        visible={showResult}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {randomMusic && (
          <>
            <ResultHeader>
              <ResultImage src={randomMusic.image} alt={randomMusic.title} />
              <ResultInfo>
                <ResultTitle>{randomMusic.title}</ResultTitle>
                <ResultArtist>{randomMusic.artist}</ResultArtist>
                <ResultMeta>
                  <ResultTag>{randomMusic.genre}</ResultTag>
                  <ResultTag>{randomMusic.year}</ResultTag>
                  <ResultTag>{randomMusic.mood}</ResultTag>
                </ResultMeta>
                
                <ResultActions>
                  <ActionButton href="#" primary>Listen Now</ActionButton>
                  <ActionButton href="#">Add to Library</ActionButton>
                </ResultActions>
              </ResultInfo>
            </ResultHeader>
            
            <TrackList>
              <TrackListTitle>Top Tracks</TrackListTitle>
              {randomMusic.tracks.map(track => (
                <Track key={track.number}>
                  <PlayButton>▶</PlayButton>
                  <TrackNumber>{track.number}</TrackNumber>
                  <TrackInfo>
                    <TrackTitle>{track.title}</TrackTitle>
                    <TrackArtist>{randomMusic.artist}</TrackArtist>
                  </TrackInfo>
                  <TrackDuration>{track.duration}</TrackDuration>
                </Track>
              ))}
            </TrackList>
            
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

export default MusicRandom;