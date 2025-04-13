// src/pages/Anime/AnimePage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AnimeHome from './components/AnimeHome';
import AnimeCategories from './components/AnimeCategories';
import AnimeRandom from './components/AnimeRandom';
import AnimeDetail from './components/AnimeDetail';

const AnimePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AnimePage = () => {
  return (
    <AnimePageContainer>
      <Routes>
        <Route path="/" element={<AnimeHome />} />
        <Route path="/categories" element={<AnimeCategories />} />
        <Route path="/random" element={<AnimeRandom />} />
        <Route path="/:animeId" element={<AnimeDetail />} />
      </Routes>
    </AnimePageContainer>
  );
};

export default AnimePage;