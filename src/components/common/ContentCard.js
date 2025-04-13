// src/components/common/ContentCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  width: 200px;
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

const CardImage = styled.div`
  height: 280px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const CardBadge = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  background-color: ${props => 
    props.type === 'film' ? props.theme.colors.film :
    props.type === 'music' ? props.theme.colors.music :
    props.type === 'anime' ? props.theme.colors.anime :
    props.type === 'ai' ? props.theme.colors.ai :
    props.theme.colors.primary
  };
  color: ${props => props.theme.colors.white};
`;

const CardRating = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  z-index: 2;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardInfo = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContentCard = ({ content }) => {
  const getTypeLabel = (type) => {
    switch (type) {
      case 'film':
        return 'Film';
      case 'music':
        return 'Music';
      case 'anime':
        return 'Anime';
      case 'ai':
        return 'AI';
      default:
        return type;
    }
  };
  
  return (
    <Card
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={content.link}>
        <CardImage image={content.image}>
          <CardBadge type={content.type}>
            {getTypeLabel(content.type)}
          </CardBadge>
          
          {content.rating && (
            <CardRating>
              ★ {content.rating}
            </CardRating>
          )}
        </CardImage>
        
        <CardContent>
          <CardTitle>{content.title}</CardTitle>
          <CardInfo>
            {content.artist && <span>{content.artist}</span>}
            {content.category && <span>{content.category}</span>}
            {content.year && <span>{content.year}</span>}
          </CardInfo>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ContentCard;