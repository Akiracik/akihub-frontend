// src/pages/AI/AIPage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AIHome from './components/AIHome';
import AICategories from './components/AICategories';
import AIRandom from './components/AIRandom';
import AIDetail from './components/AIDetail';

const AIPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AIPage = () => {
  return (
    <AIPageContainer>
      <Routes>
        <Route path="/" element={<AIHome />} />
        <Route path="/categories" element={<AICategories />} />
        <Route path="/random" element={<AIRandom />} />
        <Route path="/:aiId" element={<AIDetail />} />
      </Routes>
    </AIPageContainer>
  );
};

export default AIPage;