// src/pages/AI/components/AIRandom.js
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
  color: ${props => props.theme.colors.ai};
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
    border-color: ${props => props.theme.colors.ai};
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

const GenerateButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.colors.ai};
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
  color: ${props => props.theme.colors.ai};
  font-weight: 600;
`;

const ResultDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ResultFeatures = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const ResultActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? props.theme.colors.ai : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.ai};
  border: 1px solid ${props => props.theme.colors.ai};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  text-align: center;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#3651D4' : 'rgba(67, 97, 238, 0.1)'};
  }
`;

const TryAgainButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  color: ${props => props.theme.colors.ai};
  border: 1px solid ${props => props.theme.colors.ai};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
`;

const AIRandom = () => {
  const [filters, setFilters] = useState({
    category: '',
    pricing: '',
    useCase: '',
  });
  
  const [showResult, setShowResult] = useState(false);
  const [randomTool, setRandomTool] = useState(null);
  
  const categories = [
    'Text Generation', 'Image Generation', 'Code Assistant', 'Voice & Audio', 
    'Video Generation', 'Productivity', 'Research', 'Design'
  ];
  
  const pricingOptions = [
    'Free', 'Freemium', 'Paid', 'Subscription'
  ];
  
  const useCases = [
    'Personal', 'Professional', 'Creative', 'Business', 'Education'
  ];
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  // Mock AI tools data for random selection
  const mockAITools = [
    {
      id: 1,
      title: 'ChatGPT',
      category: 'Text Generation',
      pricing: 'Freemium',
      useCase: 'Professional',
      rating: 4.9,
      image: 'https://source.unsplash.com/random/400x400/?chatbot',
      description: 'ChatGPT is an AI-powered chatbot developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) language model. It can engage in conversational dialogue and provide responses that can appear remarkably human.',
      features: [
        'Natural language processing',
        'Context-aware responses',
        'Multiple language support',
        'API integration capabilities',
      ],
      website: 'https://chat.openai.com',
    },
    {
      id: 2,
      title: 'DALL-E 2',
      category: 'Image Generation',
      pricing: 'Paid',
      useCase: 'Creative',
      rating: 4.8,
      image: 'https://source.unsplash.com/random/400x400/?ai-art',
      description: "DALL-E 2 is an AI system that can create realistic images and art from a description in natural language. Developed by OpenAI, it's a powerful tool for creative professionals and hobbyists alike.",
      features: [
        'Text-to-image generation',
        'High-resolution outputs',
        'Style customization',
        'Editing capabilities',
      ],
      website: 'https://openai.com/dall-e-2',
    },
    {
      id: 3,
      title: 'GitHub Copilot',
      category: 'Code Assistant',
      pricing: 'Subscription',
      useCase: 'Professional',
      rating: 4.7,
      image: 'https://source.unsplash.com/random/400x400/?code',
      description: 'GitHub Copilot is an AI pair programmer that helps you write better code. It draws context from comments and code to suggest individual lines and whole functions instantly.',
      features: [
        'Code completion',
        'Function suggestions',
        'Multiple programming language support',
        'IDE integration',
      ],
      website: 'https://github.com/features/copilot',
    },
    {
      id: 4,
      title: 'Midjourney',
      category: 'Image Generation',
      pricing: 'Subscription',
      useCase: 'Creative',
      rating: 4.8,
      image: 'https://source.unsplash.com/random/400x400/?digital-art',
      description: "Midjourney is an AI-powered tool that generates images from textual descriptions. It's known for its artistic style and is popular among designers and creative professionals.",
      features: [
        'Text-to-image generation',
        'Artistic style variations',
        'Discord bot integration',
        'High-resolution outputs',
      ],
      website: 'https://www.midjourney.com',
    },
    {
      id: 5,
      title: 'Jasper',
      category: 'Text Generation',
      pricing: 'Subscription',
      useCase: 'Business',
      rating: 4.6,
      image: 'https://source.unsplash.com/random/400x400/?writing',
      description: "Jasper is an AI content platform that helps you create marketing copy, social media posts, and long-form content. It's designed to help businesses scale their content creation.",
      features: [
        'Marketing copy generation',
        'Blog post writing',
        'SEO optimization',
        'Multiple language support',
      ],
      website: 'https://www.jasper.ai',
    },
  ];
  
  const generateRandomTool = () => {
    // In a real app, this would filter based on the selected criteria
    // For now, just pick a random tool from our mock data
    const randomIndex = Math.floor(Math.random() * mockAITools.length);
    setRandomTool(mockAITools[randomIndex]);
    setShowResult(true);
  };
  
  const resetForm = () => {
    setShowResult(false);
    setRandomTool(null);
    // Optionally reset filters
    // setFilters({ category: '', pricing: '', useCase: '' });
  };
  
  return (
    <RandomContainer>
      <PageTitle>Find a Random AI Tool</PageTitle>
      
      <FiltersContainer>
        <FilterTitle>Customize Your Recommendation</FilterTitle>
        
        <FilterRow>
          <FilterGroup>
            <FilterLabel htmlFor="category">Category</FilterLabel>
            <FilterSelect 
              id="category" 
              name="category" 
              value={filters.category} 
              onChange={handleFilterChange}
            >
              <option value="">Any Category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel htmlFor="pricing">Pricing</FilterLabel>
            <FilterSelect 
              id="pricing" 
              name="pricing" 
              value={filters.pricing} 
              onChange={handleFilterChange}
            >
              <option value="">Any Pricing</option>
              {pricingOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
        </FilterRow>
        
        <FilterGroup>
          <FilterLabel htmlFor="useCase">Use Case</FilterLabel>
          <FilterSelect 
            id="useCase" 
            name="useCase" 
            value={filters.useCase} 
            onChange={handleFilterChange}
          >
            <option value="">Any Use Case</option>
            {useCases.map(useCase => (
              <option key={useCase} value={useCase}>{useCase}</option>
            ))}
          </FilterSelect>
        </FilterGroup>
        
        <GenerateButton
          onClick={generateRandomTool}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>🎲</span> Generate Random AI Tool
        </GenerateButton>
      </FiltersContainer>
      
      <ResultContainer 
        visible={showResult}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {randomTool && (
          <>
            <ResultHeader>
              <ResultImage src={randomTool.image} alt={randomTool.title} />
              <ResultInfo>
                <ResultTitle>{randomTool.title}</ResultTitle>
                <ResultMeta>
                  <ResultTag>{randomTool.category}</ResultTag>
                  <ResultTag>{randomTool.pricing}</ResultTag>
                  <ResultTag>{randomTool.useCase}</ResultTag>
                  <ResultRating>
                    <span>★</span> {randomTool.rating}
                  </ResultRating>
                </ResultMeta>
                <ResultDescription>{randomTool.description}</ResultDescription>
                <ResultFeatures>
                  {randomTool.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ResultFeatures>
                <ResultActions>
                  <ActionButton href={randomTool.website} target="_blank" rel="noopener noreferrer" primary>
                    Visit Website
                  </ActionButton>
                  <ActionButton href="#">Add to Favorites</ActionButton>
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

export default AIRandom;