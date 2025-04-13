// src/pages/Music/components/AlbumCard.js
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

const AlbumImage = styled.div`
  height: 180px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const AlbumContent = styled.div`
  padding: 1rem;
`;

const AlbumTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AlbumArtist = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 0.25rem;
`;

const AlbumYear = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray};
`;

const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.music};
  color: ${props => props.theme.colors.white};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity ${props => props.theme.transitions.fast};
  
  ${Card}:hover & {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const AlbumCard = ({ album }) => {
  return (
    <Card
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={album.link}>
        <ImageContainer>
          <AlbumImage image={album.image} />
          <PlayButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ▶
          </PlayButton>
        </ImageContainer>
        <AlbumContent>
          <AlbumTitle>{album.title}</AlbumTitle>
          <AlbumArtist>{album.artist}</AlbumArtist>
          <AlbumYear>{album.year}</AlbumYear>
        </AlbumContent>
      </Link>
    </Card>
  );
};

export default AlbumCard;