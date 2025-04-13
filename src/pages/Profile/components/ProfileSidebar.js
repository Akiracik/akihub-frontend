// src/pages/Profile/components/ProfileSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.small};
  padding: 2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
`;

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.lightGray};
  margin-bottom: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserName = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

const UserEmail = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled(NavLink)`
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  color: ${props => props.theme.colors.dark};
  transition: all ${props => props.theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
  
  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const Icon = styled.span`
  font-size: 1.25rem;
`;

const PremiumButton = styled.a`
  display: block;
  margin-top: 2rem;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  text-align: center;
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const ProfileSidebar = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null, // URL to avatar image
  };
  
  return (
    <SidebarContainer>
      <UserInfo>
        <UserAvatar>
          {user.avatar ? (
            <AvatarImage src={user.avatar} alt={user.name} />
          ) : (
            user.name.charAt(0)
          )}
        </UserAvatar>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserInfo>
      
      <Navigation>
        <NavItem to="/profile" end>
          <Icon>👤</Icon> Profile Overview
        </NavItem>
        <NavItem to="/profile/favorites">
          <Icon>❤️</Icon> Favorites
        </NavItem>
        <NavItem to="/profile/settings">
          <Icon>⚙️</Icon> Settings
        </NavItem>
        <NavItem to="/profile/history">
          <Icon>🕒</Icon> History
        </NavItem>
        <NavItem to="/profile/lists">
          <Icon>📋</Icon> My Lists
        </NavItem>
      </Navigation>
      
      <PremiumButton href="/premium">
        Upgrade to Premium
      </PremiumButton>
    </SidebarContainer>
  );
};

export default ProfileSidebar;