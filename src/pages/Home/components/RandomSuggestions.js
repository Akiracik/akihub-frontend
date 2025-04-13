// src/pages/Home/components/RandomSuggestions.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SuggestionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SuggestionCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardHeader = styled.div`
  background-color: ${props => 
    props.category === 'film' ? props.theme.colors.film :
    props.category === 'music' ? props.theme.colors.music :
    props.category === 'anime' ? props.theme.colors.anime :
    props.category === 'ai' ? props.theme.colors.ai :
    props.theme.colors.primary
  };
  padding: 1.5rem;
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
`;

const RandomButton = styled(motion.button)`
  background-color: ${props => 
    props.category === 'film' ? props.theme.colors.film :
    props.category === 'music' ? props.theme.colors.music :
    props.category === 'anime' ? props.theme.colors.anime :
    props.category === 'ai' ? props.theme.colors.ai :
    props.theme.colors.primary
  };
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 0.75rem 1.5rem;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiceIcon = styled.span`
  font-size: 1.25rem;
`;

const ViewAllLink = styled(Link)`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
  text-decoration: underline;
  
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;

const RandomSuggestions = () => {
  const suggestions = [
    {
      id: 'film',
      title: 'Random Film',
      description: 'Discover a new movie or TV show based on your preferences',
      buttonText: 'Find Random Film',
      link: '/film/random',
    },
    {
      id: 'music',
      title: 'Random Music',
      description: 'Let us suggest your next favorite song or album',
      buttonText: 'Find Random Music',
      link: '/music/random',
    },
    {
      id: 'anime',
      title: 'Random Anime',
      description: 'Explore a new anime series or movie recommendation',
      buttonText: 'Find Random Anime',
      link: '/anime/random',
    },
    {
      id: 'ai',
      title: 'Random AI Tool',
      description: 'Discover an AI tool that might be useful for your needs',
      buttonText: 'Find Random AI Tool',
      link: '/ai/random',
    },
  ];
  
  return (
    <SuggestionsContainer>
      {suggestions.map((suggestion) => (
        <SuggestionCard
          key={suggestion.id}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <CardHeader category={suggestion.id}>
            <CardTitle>{suggestion.title}</CardTitle>
            <CardDescription>{suggestion.description}</CardDescription>
          </CardHeader>
          
          <CardBody>
            <RandomButton
              category={suggestion.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DiceIcon>🎲</DiceIcon>
              {suggestion.buttonText}
            </RandomButton>
            
            <ViewAllLink to={`/${suggestion.id}`}>
              View all {suggestion.id === 'ai' ? 'AI tools' : suggestion.id}
            </ViewAllLink>
          </CardBody>
        </SuggestionCard>
      ))}
    </SuggestionsContainer>
  );
};

export default RandomSuggestions;