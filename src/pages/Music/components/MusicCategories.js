// src/pages/Music/components/MusicCategories.js
import React from 'react';
import styled from 'styled-components';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import PlaylistCard from './PlaylistCard';

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
    border-color: ${props => props.theme.colors.music};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? props.theme.colors.music : props.theme.colors.white};
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.dark};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.small};
  white-space: nowrap;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.music : props.theme.colors.lightGray};
  }
`;

// Mock music data
const albums = [
  {
    id: 1001,
    title: 'Abbey Road',
    artist: 'The Beatles',
    image: 'https://source.unsplash.com/random/300x300/?vinyl-record',
    year: 1969,
    link: '/music/abbey-road',
  },
  {
    id: 1002,
    title: 'Thriller',
    artist: 'Michael Jackson',
    image: 'https://source.unsplash.com/random/300x300/?michael-jackson',
    year: 1982,
    link: '/music/thriller',
  },
  // Add more albums as needed
];

const artists = [
  {
    id: 2001,
    name: 'Taylor Swift',
    image: 'https://source.unsplash.com/random/300x300/?taylor-swift-portrait',
    genres: ['Pop', 'Country'],
    link: '/music/artist/taylor-swift',
  },
  {
    id: 2002,
    name: 'The Weeknd',
    image: 'https://source.unsplash.com/random/300x300/?the-weeknd',
    genres: ['R&B', 'Pop'],
    link: '/music/artist/the-weeknd',
  },
  // Add more artists as needed
];

const playlists = [
  {
    id: 3001,
    title: 'Today\'s Top Hits',
    description: 'The most popular songs right now',
    image: 'https://source.unsplash.com/random/300x300/?music-playlist',
    tracks: 50,
    link: '/music/playlist/todays-top-hits',
  },
  {
    id: 3002,
    title: 'Chill Vibes',
    description: 'Relaxing beats for your downtime',
    image: 'https://source.unsplash.com/random/300x300/?chill-music',
    tracks: 40,
    link: '/music/playlist/chill-vibes',
  },
  // Add more playlists as needed
];

const MusicCategories = () => {
  const [activeTab, setActiveTab] = React.useState('albums');
  
  return (
    <CategoriesContainer>
      <PageTitle>Music Categories</PageTitle>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'albums'} 
          onClick={() => setActiveTab('albums')}
        >
          Albums
        </Tab>
        <Tab 
          active={activeTab === 'artists'} 
          onClick={() => setActiveTab('artists')}
        >
          Artists
        </Tab>
        <Tab 
          active={activeTab === 'playlists'} 
          onClick={() => setActiveTab('playlists')}
        >
          Playlists
        </Tab>
        <Tab 
          active={activeTab === 'genres'} 
          onClick={() => setActiveTab('genres')}
        >
          Genres
        </Tab>
        <Tab 
          active={activeTab === 'new'} 
          onClick={() => setActiveTab('new')}
        >
          New Releases
        </Tab>
      </TabsContainer>
      
      <FiltersContainer>
        {activeTab === 'albums' && (
          <>
            <FilterSelect>
              <option value="">All Genres</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="hip-hop">Hip Hop</option>
              <option value="electronic">Electronic</option>
            </FilterSelect>
            
            <FilterSelect>
              <option value="">Release Year</option>
              <option value="2020s">2020s</option>
              <option value="2010s">2010s</option>
              <option value="2000s">2000s</option>
              <option value="1990s">1990s</option>
              <option value="older">Older</option>
            </FilterSelect>
          </>
        )}
        
        {activeTab === 'artists' && (
          <>
            <FilterSelect>
              <option value="">All Genres</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="hip-hop">Hip Hop</option>
              <option value="electronic">Electronic</option>
            </FilterSelect>
            
            <FilterSelect>
              <option value="">Popularity</option>
              <option value="trending">Trending</option>
              <option value="established">Established</option>
              <option value="upcoming">Upcoming</option>
            </FilterSelect>
          </>
        )}
        
        {activeTab === 'playlists' && (
          <>
            <FilterSelect>
              <option value="">All Moods</option>
              <option value="happy">Happy</option>
              <option value="chill">Chill</option>
              <option value="focus">Focus</option>
              <option value="workout">Workout</option>
            </FilterSelect>
            
            <FilterSelect>
            <option value="">Playlist Length</option>
            <option value="short">{"Short (< 30 tracks)"}</option>
            <option value="medium">Medium (30-60 tracks)</option>
            <option value="long">Long (60+ tracks)</option>
            </FilterSelect>
          </>
        )}
      </FiltersContainer>
      
      <ContentGrid>
        {activeTab === 'albums' && albums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
        
        {activeTab === 'artists' && artists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
        
        {activeTab === 'playlists' && playlists.map(playlist => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </ContentGrid>
    </CategoriesContainer>
  );
};

export default MusicCategories;