// src/pages/Music/components/ArtistCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  width: 180px;
  flex-shrink: 0;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.small};
  transition: box-shadow ${props => props.theme.transitions.fast};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ArtistImage = styled.div`
  height: 180px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.borderRadius.medium} ${props => props.theme.borderRadius.medium} 0 0;
`;

const ArtistContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ArtistName = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArtistGenres = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray};
`;

const ArtistCard = ({ artist }) => {
  return (
    <Card
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={artist.link}>
        <ArtistImage image={artist.image} />
        <ArtistContent>
          <ArtistName>{artist.name}</ArtistName>
          <ArtistGenres>{artist.genres.join(' • ')}</ArtistGenres>
        </ArtistContent>
      </Link>
    </Card>
  );
};

export default ArtistCard;