// src/pages/Film/FilmPage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import FilmHome from './components/FilmHome';
import FilmCategories from './components/FilmCategories';
import FilmRandom from './components/FilmRandom';
import FilmDetail from './components/FilmDetail';

const FilmPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FilmPage = () => {
  return (
    <FilmPageContainer>
      <Routes>
        <Route path="/" element={<FilmHome />} />
        <Route path="/categories" element={<FilmCategories />} />
        <Route path="/random" element={<FilmRandom />} />
        <Route path="/:filmId" element={<FilmDetail />} />
      </Routes>
    </FilmPageContainer>
  );
};

export default FilmPage;