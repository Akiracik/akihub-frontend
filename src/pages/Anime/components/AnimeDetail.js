// src/pages/Anime/components/AnimeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContentCard from '../../../components/common/ContentCard';

const DetailContainer = styled.div`
  padding: 2rem 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.anime};
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

const PosterContainer = styled.div`
  flex-shrink: 0;
  width: 300px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const ContentInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
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

const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${props => props.theme.colors.anime};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 600;
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

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
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
  background-color: ${props => props.primary ? props.theme.colors.anime : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.anime};
  border: 1px solid ${props => props.theme.colors.anime};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#5A0791' : 'rgba(114, 9, 183, 0.1)'};
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`;

const SimilarContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

// Mock anime data
const animeData = {
  id: 'attack-on-titan',
  title: 'Attack on Titan',
  type: 'anime',
  image: 'https://source.unsplash.com/random/600x900/?titan',
  rating: 9.0,
  year: 2013,
  seasons: 4,
  episodes: 75,
  status: 'Completed',
  genres: ['Action', 'Drama', 'Fantasy'],
  studio: 'Wit Studio / MAPPA',
  description: 'In a world where humanity lives within cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason, a young boy named Eren Yeager vows to cleanse the world of the giant humanoid Titans that have brought humanity to the brink of extinction.',
};

// Mock similar anime
const similarAnime = [
  {
    id: 2001,
    title: 'Demon Slayer',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?demon',
    rating: 8.7,
    year: 2019,
    link: '/anime/demon-slayer',
  },
  {
    id: 2002,
    title: 'Fullmetal Alchemist: Brotherhood',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?alchemy',
    rating: 9.1,
    year: 2009,
    link: '/anime/fullmetal-alchemist',
  },
  {
    id: 2003,
    title: 'My Hero Academia',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?hero',
    rating: 8.4,
    year: 2016,
    link: '/anime/my-hero-academia',
  },
  {
    id: 2004,
    title: 'Jujutsu Kaisen',
    type: 'anime',
    image: 'https://source.unsplash.com/random/300x450/?jujutsu',
    rating: 8.6,
    year: 2020,
    link: '/anime/jujutsu-kaisen',
  },
];

const AnimeDetail = () => {
  const { animeId } = useParams();
  
  // In a real app, you would fetch the anime data based on the animeId
  // For now, we'll just use our mock data
  
  return (
    <DetailContainer>
      <BackButton onClick={() => window.history.back()}>
        ← Back to Anime
      </BackButton>
      
      <ContentHeader>
        <PosterContainer>
          <Poster src={animeData.image} alt={animeData.title} />
        </PosterContainer>
        
        <ContentInfo>
          <Title>{animeData.title}</Title>
          
          <MetaInfo>
            <Rating>★ {animeData.rating}</Rating>
            <MetaItem>{animeData.year}</MetaItem>
            <MetaItem>{animeData.seasons} Seasons</MetaItem>
            <MetaItem>{animeData.episodes} Episodes</MetaItem>
            <MetaItem>Status: {animeData.status}</MetaItem>
          </MetaInfo>
          
          <GenreList>
            {animeData.genres.map(genre => (
              <Genre key={genre}>{genre}</Genre>
            ))}
          </GenreList>
          
          <MetaItem>Studio: {animeData.studio}</MetaItem>
          
          <Description>{animeData.description}</Description>
          
          <ActionButtons>
            <ActionButton href="#" primary>Watch Now</ActionButton>
            <ActionButton href="#">Add to Watchlist</ActionButton>
            <ActionButton href="#">Add to Favorites</ActionButton>
          </ActionButtons>
        </ContentInfo>
      </ContentHeader>
      
      <SectionTitle>Similar Anime You Might Like</SectionTitle>
      <SimilarContent>
        {similarAnime.map(anime => (
          <ContentCard key={anime.id} content={anime} />
        ))}
      </SimilarContent>
    </DetailContainer>
  );
};

export default AnimeDetail;