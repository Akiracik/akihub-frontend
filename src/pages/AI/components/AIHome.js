// src/pages/AI/components/AIHome.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContentCard from '../../../components/common/ContentCard';

const AIHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeroSection = styled.div`
  background-image: url('https://source.unsplash.com/random/1600x600/?artificial-intelligence');
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.large};
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(67, 97, 238, 0.3) 0%,
      rgba(67, 97, 238, 0.7) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: ${props => props.theme.colors.white};
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  max-width: 600px;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.ai};
  color: ${props => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: ${props => props.theme.colors.dark};
`;

const ViewAllLink = styled(Link)`
  color: ${props => props.theme.colors.ai};
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const CategorySection = styled.section`
  margin-bottom: 3rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CategoryCard = styled(Link)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadows.small};
  transition: transform ${props => props.theme.transitions.fast}, box-shadow ${props => props.theme.transitions.fast};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const CategoryIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.ai};
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.dark};
`;

const CategoryDescription = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
`;

// Mock AI tool data
const popularAITools = [
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
  {
    id: 1003,
    title: 'Midjourney',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?digital-art',
    rating: 4.7,
    category: 'Image Generation',
    link: '/ai/midjourney',
  },
  {
    id: 1004,
    title: 'GitHub Copilot',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?code',
    rating: 4.8,
    category: 'Code Assistant',
    link: '/ai/github-copilot',
  },
  {
    id: 1005,
    title: 'Jasper',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?writing',
    rating: 4.6,
    category: 'Content Writing',
    link: '/ai/jasper',
  },
];

const newAITools = [
  {
    id: 2001,
    title: 'Stable Diffusion 3',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?stable-diffusion',
    rating: 4.7,
    category: 'Image Generation',
    link: '/ai/stable-diffusion',
  },
  {
    id: 2002,
    title: 'Claude 2',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?ai-assistant',
    rating: 4.6,
    category: 'Text Generation',
    link: '/ai/claude',
  },
  {
    id: 2003,
    title: 'Runway Gen-2',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?video-generation',
    rating: 4.5,
    category: 'Video Generation',
    link: '/ai/runway',
  },
  {
    id: 2004,
    title: 'ElevenLabs',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?voice',
    rating: 4.8,
    category: 'Voice Synthesis',
    link: '/ai/elevenlabs',
  },
  {
    id: 2005,
    title: 'Perplexity AI',
    type: 'ai',
    image: 'https://source.unsplash.com/random/300x450/?search-engine',
    rating: 4.7,
    category: 'Research Assistant',
    link: '/ai/perplexity',
  },
];

// AI categories
const aiCategories = [
  {
    id: 'image',
    icon: '🖼️',
    title: 'Image Generation',
    description: 'Create stunning visuals, artwork, and designs with AI-powered tools.',
    link: '/ai/categories?category=image',
  },
  {
    id: 'text',
    icon: '📝',
    title: 'Text Generation',
    description: 'Write content, answer questions, and generate creative text formats.',
    link: '/ai/categories?category=text',
  },
  {
    id: 'code',
    icon: '💻',
    title: 'Code Assistants',
    description: 'Get help with coding, debugging, and software development.',
    link: '/ai/categories?category=code',
  },
  {
    id: 'voice',
    icon: '🔊',
    title: 'Voice & Audio',
    description: 'Generate realistic voices, music, and audio effects.',
    link: '/ai/categories?category=voice',
  },
  {
    id: 'video',
    icon: '🎬',
    title: 'Video Generation',
    description: 'Create and edit videos with AI-powered tools and effects.',
    link: '/ai/categories?category=video',
  },
  {
    id: 'productivity',
    icon: '⚡',
    title: 'Productivity',
    description: 'Boost your workflow with AI tools for summarization, research, and more.',
    link: '/ai/categories?category=productivity',
  },
];

const AIHome = () => {
  return (
    <AIHomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>AkiAI</HeroTitle>
          <HeroDescription>
            Discover the best AI tools and services for creativity, productivity, and innovation. Compare features and find the perfect solution for your needs.
          </HeroDescription>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HeroButton to="/ai/random">
              <span>🎲</span> Find Random AI Tool
            </HeroButton>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <CategorySection>
        <div className="container">
          <SectionHeader>
            <SectionTitle>AI Categories</SectionTitle>
            <ViewAllLink to="/ai/categories">View All Categories</ViewAllLink>
          </SectionHeader>
          <CategoryGrid>
            {aiCategories.map(category => (
              <CategoryCard key={category.id} to={category.link}>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </div>
      </CategorySection>
      
      <section>
        <SectionHeader>
          <SectionTitle>Popular AI Tools</SectionTitle>
          <ViewAllLink to="/ai/categories">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {popularAITools.map(tool => (
            <ContentCard key={tool.id} content={tool} />
          ))}
        </ContentGrid>
      </section>
      
      <section>
        <SectionHeader>
          <SectionTitle>New & Trending</SectionTitle>
          <ViewAllLink to="/ai/categories?filter=new">View All</ViewAllLink>
        </SectionHeader>
        <ContentGrid>
          {newAITools.map(tool => (
            <ContentCard key={tool.id} content={tool} />
          ))}
        </ContentGrid>
      </section>
    </AIHomeContainer>
  );
};

export default AIHome;