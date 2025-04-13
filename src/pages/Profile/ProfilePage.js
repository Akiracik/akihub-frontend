// src/pages/Profile/ProfilePage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ProfileHome from './components/ProfileHome';
import ProfileFavorites from './components/ProfileFavorites';
import ProfileSettings from './components/ProfileSettings';
import ProfileSidebar from './components/ProfileSidebar';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 250px 1fr;
  }
`;

const ProfileContent = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.small};
  padding: 2rem;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <ProfileSidebar />
      
      <ProfileContent>
        <Routes>
          <Route path="/" element={<ProfileHome />} />
          <Route path="/favorites" element={<ProfileFavorites />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Routes>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfilePage;