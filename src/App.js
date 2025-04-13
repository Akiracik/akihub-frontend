// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home/HomePage';
import FilmPage from './pages/Film/FilmPage';
import MusicPage from './pages/Music/MusicPage';
import AnimePage from './pages/Anime/AnimePage';
import AIPage from './pages/AI/AIPage';
import ProfilePage from './pages/Profile/ProfilePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/film/*" element={<FilmPage />} />
            <Route path="/music/*" element={<MusicPage />} />
            <Route path="/anime/*" element={<AnimePage />} />
            <Route path="/ai/*" element={<AIPage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;