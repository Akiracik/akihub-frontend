// src/pages/Music/components/MusicDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AlbumCard from './AlbumCard';

const DetailContainer = styled.div`
  padding: 2rem 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.music};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const AlbumImageContainer = styled.div`
  flex-shrink: 0;
  width: 300px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const ContentInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Artist = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 1rem;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.theme.colors.gray};
  font-size: 0.875rem;
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Genre = styled.span`
  background-color: ${props => props.theme.colors.lightGray};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.875rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? props.theme.colors.music : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.music};
  border: 1px solid ${props => props.theme.colors.music};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#3BA9D0' : 'rgba(76, 201, 240, 0.1)'};
  }
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

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`;

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

// Mock album data
const albumData = {
  id: 'abbey-road',
  title: 'Abbey Road',
  artist: 'The Beatles',
  image: 'https://source.unsplash.com/random/600x600/?vinyl-record',
  year: 1969,
  genres: ['Rock', 'Pop Rock', 'Psychedelic Rock'],
  duration: '47:23',
  tracks: [
    { number: 1, title: 'Come Together', duration: '4:19', featuring: '' },
    { number: 2, title: 'Something', duration: '3:02', featuring: '' },
    { number: 3, title: 'Maxwell\'s Silver Hammer', duration: '3:27', featuring: '' },
    { number: 4, title: 'Oh! Darling', duration: '3:27', featuring: '' },
    { number: 5, title: 'Octopus\'s Garden', duration: '2:51', featuring: '' },
    { number: 6, title: 'I Want You (She\'s So Heavy)', duration: '7:47', featuring: '' },
    { number: 7, title: 'Here Comes the Sun', duration: '3:05', featuring: '' },
    { number: 8, title: 'Because', duration: '2:45', featuring: '' },
    { number: 9, title: 'You Never Give Me Your Money', duration: '4:02', featuring: '' },
    { number: 10, title: 'Sun King', duration: '2:26', featuring: '' },
    { number: 11, title: 'Mean Mr. Mustard', duration: '1:06', featuring: '' },
    { number: 12, title: 'Polythene Pam', duration: '1:12', featuring: '' },
    { number: 13, title: 'She Came in Through the Bathroom Window', duration: '1:58', featuring: '' },
    { number: 14, title: 'Golden Slumbers', duration: '1:31', featuring: '' },
    { number: 15, title: 'Carry That Weight', duration: '1:36', featuring: '' },
    { number: 16, title: 'The End', duration: '2:05', featuring: '' },
    { number: 17, title: 'Her Majesty', duration: '0:23', featuring: '' },
  ],
  label: 'Apple Records',
  producer: 'George Martin',
};

// Mock similar albums
const similarAlbums = [
  {
    id: 2001,
    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    artist: 'The Beatles',
    image: 'https://source.unsplash.com/random/300x300/?sgt-pepper',
    year: 1967,
    link: '/music/sgt-peppers',
  },
  {
    id: 2002,
    title: 'Revolver',
    artist: 'The Beatles',
    image: 'https://source.unsplash.com/random/300x300/?revolver-album',
    year: 1966,
    link: '/music/revolver',
  },
  {
    id: 2003,
    title: 'Let It Be',
    artist: 'The Beatles',
    image: 'https://source.unsplash.com/random/300x300/?let-it-be',
    year: 1970,
    link: '/music/let-it-be',
  },
  {
    id: 2004,
    title: 'The White Album',
    artist: 'The Beatles',
    image: 'https://source.unsplash.com/random/300x300/?white-album',
    year: 1968,
    link: '/music/white-album',
  },
];

const MusicDetail = () => {
  const { musicId } = useParams();
  
  // In a real app, you would fetch the music data based on the musicId
  // For now, we'll just use our mock data
  
  return (
    <DetailContainer>
      <BackButton onClick={() => window.history.back()}>
        ← Back to Music
      </BackButton>
      
      <ContentHeader>
        <AlbumImageContainer>
          <AlbumImage src={albumData.image} alt={albumData.title} />
        </AlbumImageContainer>
        
        <ContentInfo>
          <Title>{albumData.title}</Title>
          <Artist>{albumData.artist}</Artist>
          
          <MetaInfo>
            <MetaItem>{albumData.year}</MetaItem>
            <MetaItem>{albumData.tracks.length} Tracks</MetaItem>
            <MetaItem>{albumData.duration}</MetaItem>
            <MetaItem>Label: {albumData.label}</MetaItem>
            <MetaItem>Producer: {albumData.producer}</MetaItem>
          </MetaInfo>
          
          <GenreList>
            {albumData.genres.map(genre => (
              <Genre key={genre}>{genre}</Genre>
            ))}
          </GenreList>
          
          <ActionButtons>
            <ActionButton href="#" primary>Play Album</ActionButton>
            <ActionButton href="#">Add to Library</ActionButton>
            <ActionButton href="#">Add to Playlist</ActionButton>
          </ActionButtons>
        </ContentInfo>
      </ContentHeader>
      
      <TrackList>
        <TrackListTitle>Tracks</TrackListTitle>
        {albumData.tracks.map(track => (
          <Track key={track.number}>
            <PlayButton>▶</PlayButton>
            <TrackNumber>{track.number}</TrackNumber>
            <TrackInfo>
              <TrackTitle>{track.title}</TrackTitle>
              <TrackArtist>
                {albumData.artist}
                {track.featuring && ` feat. ${track.featuring}`}
              </TrackArtist>
            </TrackInfo>
            <TrackDuration>{track.duration}</TrackDuration>
          </Track>
        ))}
      </TrackList>
      
      <SectionTitle>More by {albumData.artist}</SectionTitle>
      <AlbumGrid>
        {similarAlbums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </AlbumGrid>
    </DetailContainer>
  );
};

export default MusicDetail;