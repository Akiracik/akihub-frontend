// src/components/common/SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SearchContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray};
  font-size: 1.2rem;
  cursor: pointer;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SearchInputContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  padding: 1rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  z-index: 10;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: relative;
    top: 0;
    width: auto;
    padding: 0;
    background-color: transparent;
    box-shadow: none;
    display: block;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    background-color: ${props => props.theme.colors.lightGray};
    border-radius: ${props => props.theme.borderRadius.medium};
    padding: 0.5rem 1rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: ${props => props.theme.fonts.body};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border: none;
    background-color: transparent;
    padding: 0.25rem 0.5rem;
    
    &:focus {
      outline: none;
    }
  }
`;

const SearchButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  font-family: ${props => props.theme.fonts.body};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };
  
  return (
    <SearchContainer>
      <SearchIcon onClick={() => setIsSearchOpen(!isSearchOpen)}>🔍</SearchIcon>
      
      <AnimatePresence>
        {(isSearchOpen || window.innerWidth >= 768) && (
          <SearchInputContainer
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <SearchForm onSubmit={handleSubmit}>
              <SearchInput
                type="text"
                placeholder="Search for content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus={isSearchOpen}
              />
              <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
          </SearchInputContainer>
        )}
      </AnimatePresence>
    </SearchContainer>
  );
};

export default SearchBar;