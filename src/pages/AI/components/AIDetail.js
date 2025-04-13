// src/pages/AI/components/AIDetail.js
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
  color: ${props => props.theme.colors.ai};
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

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 300px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ToolImage = styled.img`
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
  background-color: ${props => props.theme.colors.ai};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 600;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.colors.lightGray};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.875rem;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.75rem;
  }
`;

const PricingSection = styled.div`
  margin-bottom: 2rem;
`;

const PricingTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const PricingTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const PricingCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadows.small};
  border: ${props => props.popular ? `2px solid ${props.theme.colors.ai}` : 'none'};
  position: relative;
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;
  background-color: ${props => props.theme.colors.ai};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.75rem;
  font-weight: 600;
`;

const PlanName = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
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
  background-color: ${props => props.primary ? props.theme.colors.ai : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.ai};
  border: 1px solid ${props => props.theme.colors.ai};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#3651D4' : 'rgba(67, 97, 238, 0.1)'};
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

// Mock AI tool data
const aiToolData = {
  id: 'chatgpt',
  title: 'ChatGPT',
  type: 'ai',
  image: 'https://source.unsplash.com/random/600x600/?chatbot',
  rating: 4.9,
  category: 'Text Generation',
  tags: ['AI Assistant', 'Natural Language Processing', 'Conversational AI'],
  description: 'ChatGPT is an AI-powered chatbot developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) language model. It can engage in conversational dialogue and provide responses that can appear remarkably human.',
  features: [
    'Natural language understanding and generation',
    'Context-aware responses in conversations',
    'Can write essays, code, and creative content',
    'Multilingual support',
    'API available for integration with other applications',
    'Regular model updates and improvements',
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Access to GPT-3.5',
        'Standard response speed',
        'Regular model updates',
        'Web interface access',
      ],
      popular: false,
    },
    {
      name: 'Plus',
      price: '$20/month',
      features: [
        'Access to GPT-4',
        'Faster response times',
        'Priority access to new features',
        'Available during peak times',
        'Web interface and API access',
      ],
      popular: true,
    },
    {
      name: 'Team',
      price: '$30/user/month',
      features: [
        'All Plus features',
        'Shared workspaces',
        'Admin console',
        'Advanced security features',
        'Dedicated support',
      ],
      popular: false,
    },
  ],
  website: 'https://chat.openai.com',
  company: 'OpenAI',
  releaseDate: '2022',
};

// Mock similar AI tools
const similarTools = [
  {
    id: 2001,
    title: 'Claude',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?ai-assistant',
    rating: 4.7,
    category: 'Text Generation',
    link: '/ai/claude',
  },
  {
    id: 2002,
    title: 'Bard',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?google-ai',
    rating: 4.5,
    category: 'Text Generation',
    link: '/ai/bard',
  },
  {
    id: 2003,
    title: 'Jasper',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?writing',
    rating: 4.6,
    category: 'Text Generation',
    link: '/ai/jasper',
  },
  {
    id: 2004,
    title: 'Perplexity AI',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?search-engine',
    rating: 4.8,
    category: 'Research Assistant',
    link: '/ai/perplexity',
  },
];

const AIDetail = () => {
  const { aiId } = useParams();
  
  // In a real app, you would fetch the AI tool data based on the aiId
  // For now, we'll just use our mock data
  
  return (
    <DetailContainer>
      <BackButton onClick={() => window.history.back()}>
        ← Back to AI Tools
      </BackButton>
      
      <ContentHeader>
        <ImageContainer>
          <ToolImage src={aiToolData.image} alt={aiToolData.title} />
        </ImageContainer>
        
        <ContentInfo>
          <Title>{aiToolData.title}</Title>
          
          <MetaInfo>
            <Rating>★ {aiToolData.rating}</Rating>
            <MetaItem>Category: {aiToolData.category}</MetaItem>
            <MetaItem>Company: {aiToolData.company}</MetaItem>
            <MetaItem>Released: {aiToolData.releaseDate}</MetaItem>
          </MetaInfo>
          
          <TagList>
            {aiToolData.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>
          
          <Description>{aiToolData.description}</Description>
          
          <ActionButtons>
            <ActionButton href={aiToolData.website} target="_blank" rel="noopener noreferrer" primary>
              Visit Website
            </ActionButton>
            <ActionButton href="#">Add to Favorites</ActionButton>
          </ActionButtons>
          
          <SectionTitle>Key Features</SectionTitle>
          <FeaturesList>
            {aiToolData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </FeaturesList>
        </ContentInfo>
      </ContentHeader>
      
      <PricingSection>
        <PricingTitle>Pricing Plans</PricingTitle>
        <PricingTable>
          {aiToolData.pricing.map((plan, index) => (
            <PricingCard key={index} popular={plan.popular}>
              {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanFeatures>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </PlanFeatures>
              <ActionButton href={aiToolData.website} target="_blank" rel="noopener noreferrer" primary>
                Get Started
              </ActionButton>
            </PricingCard>
          ))}
        </PricingTable>
      </PricingSection>
      
      <SectionTitle>Similar AI Tools</SectionTitle>
      <SimilarContent>
        {similarTools.map(tool => (
          <ContentCard key={tool.id} content={tool} />
        ))}
      </SimilarContent>
    </DetailContainer>
  );
};

export default AIDetail;