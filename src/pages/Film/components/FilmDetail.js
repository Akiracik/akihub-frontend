// src/pages/Film/components/FilmDetail.js
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
  color: ${props => props.theme.colors.film};
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
  background-color: ${props => props.theme.colors.film};
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
  background-color: ${props => props.primary ? props.theme.colors.film : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.film};
  border: 1px solid ${props => props.theme.colors.film};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#D61F69' : 'rgba(247, 37, 133, 0.1)'};
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

// Mock film data
const filmData = {
  id: 'shawshank-redemption',
  title: 'The Shawshank Redemption',
  type: 'film',
  image: 'https://source.unsplash.com/random/600x900/?prison',
  rating: 9.3,
  year: 1994,
  duration: '2h 22m',
  genres: ['Drama', 'Crime'],
  director: 'Frank Darabont',
  cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
};

// Mock similar films
const similarFilms = [
  {
    id: 2001,
    title: 'The Godfather',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?mafia',
    rating: 9.2,
    year: 1972,
    link: '/film/godfather',
  },
  {
    id: 2002,
    title: 'The Green Mile',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?prison-guard',
    rating: 8.6,
    year: 1999,
    link: '/film/green-mile',
  },
  {
    id: 2003,
    title: 'Pulp Fiction',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?pulp',
    rating: 8.9,
    year: 1994,
    link: '/film/pulp-fiction',
  },
  {
    id: 2004,
    title: 'The Dark Knight',
    type: 'film',
    image: 'https://source.unsplash.com/random/300x450/?batman',
    rating: 9.0,
    year: 2008,
    link: '/film/dark-knight',
  },
];

const FilmDetail = () => {
  const { filmId } = useParams();
  
  // In a real app, you would fetch the film data based on the filmId
  // For now, we'll just use our mock data
  
  return (
    <DetailContainer>
      <BackButton onClick={() => window.history.back()}>
        ← Back to Films
      </BackButton>
      
      <ContentHeader>
        <PosterContainer>
          <Poster src={filmData.image} alt={filmData.title} />
        </PosterContainer>
        
        <ContentInfo>
          <Title>{filmData.title}</Title>
          
          <MetaInfo>
            <Rating>★ {filmData.rating}</Rating>
            <MetaItem>{filmData.year}</MetaItem>
            <MetaItem>{filmData.duration}</MetaItem>
            <MetaItem>Director: {filmData.director}</MetaItem>
          </MetaInfo>
          
          <GenreList>
            {filmData.genres.map(genre => (
              <Genre key={genre}>{genre}</Genre>
            ))}
          </GenreList>
          
          <Description>{filmData.description}</Description>
          
          <ActionButtons>
            <ActionButton href="#" primary>Watch Now</ActionButton>
            <ActionButton href="#">Add to Watchlist</ActionButton>
            <ActionButton href="#">Add to Favorites</ActionButton>
          </ActionButtons>
          
          <div>
            <strong>Cast:</strong> {filmData.cast.join(', ')}
          </div>
        </ContentInfo>
      </ContentHeader>
      
      <SectionTitle>Similar Films You Might Like</SectionTitle>
      <SimilarContent>
        {similarFilms.map(film => (
          <ContentCard key={film.id} content={film} />
        ))}
      </SimilarContent>
    </DetailContainer>
  );
};

export default FilmDetail;