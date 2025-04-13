// src/pages/AI/components/AICategories.js
import React from 'react';
import styled from 'styled-components';
import ContentCard from '../../../components/common/ContentCard';

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
    border-color: ${props => props.theme.colors.ai};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

// Mock AI tools data
const aiTools = [
  {
    id: 1001,
    title: 'ChatGPT',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?chatbot',
    rating: 4.9,
    category: 'Text Generation',
    link: '/ai/chatgpt',
  },
  {
    id: 1002,
    title: 'DALL-E 2',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?ai-art',
    rating: 4.8,
    category: 'Image Generation',
    link: '/ai/dall-e',
  },
  // Add more AI tools as needed
];

const AICategories = () => {
  return (
    <CategoriesContainer>
      <PageTitle>AI Tools Categories</PageTitle>
      
      <FiltersContainer>
        <FilterSelect>
          <option value="">All Categories</option>
          <option value="text">Text Generation</option>
          <option value="image">Image Generation</option>
          <option value="code">Code Assistants</option>
          <option value="voice">Voice & Audio</option>
          <option value="video">Video Generation</option>
          <option value="productivity">Productivity</option>
        </FilterSelect>
        
        <FilterSelect>
          <option value="">Pricing</option>
          <option value="free">Free</option>
          <option value="freemium">Freemium</option>
          <option value="paid">Paid</option>
          <option value="subscription">Subscription</option>
        </FilterSelect>
        
        <FilterSelect>
          <option value="">Rating</option>
          <option value="5">5 Stars</option>
          <option value="4+">4+ Stars</option>
          <option value="3+">3+ Stars</option>
        </FilterSelect>
      </FiltersContainer>
      
      <ContentGrid>
        {aiTools.map(tool => (
          <ContentCard key={tool.id} content={tool} />
        ))}
      </ContentGrid>
    </CategoriesContainer>
  );
};

export default AICategories;