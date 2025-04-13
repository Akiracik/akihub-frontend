// src/pages/Music/MusicPage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MusicHome from './components/MusicHome';
import MusicCategories from './components/MusicCategories';
import MusicRandom from './components/MusicRandom';
import MusicDetail from './components/MusicDetail';
import MusicPlayer from './components/MusicPlayer';

const MusicPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 80px; /* Space for the music player */
`;

const MusicPage = () => {
  return (
    <>
      <MusicPageContainer>
        <Routes>
          <Route path="/" element={<MusicHome />} />
          <Route path="/categories" element={<MusicCategories />} />
          <Route path="/random" element={<MusicRandom />} />
          <Route path="/:musicId" element={<MusicDetail />} />
        </Routes>
      </MusicPageContainer>
      <MusicPlayer />
    </>
  );
};

export default MusicPage;