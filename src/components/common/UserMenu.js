// src/components/common/UserMenu.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const UserMenuContainer = styled.div`
  position: relative;
`;

const UserAvatar = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.lightGray};
  border: none;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 200px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: 1rem 0;
  z-index: 100;
`;

const UserInfo = styled.div`
  padding: 0 1rem 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  margin-bottom: 0.5rem;
`;

const UserName = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const UserEmail = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray};
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: ${props => props.theme.colors.dark};
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.body};
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  
  // Mock user data - in a real app, this would come from authentication context
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null, // URL to avatar image
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out');
    setIsOpen(false);
  };
  
  return (
    <UserMenuContainer ref={menuRef}>
      <UserAvatar onClick={() => setIsOpen(!isOpen)}>
        {user.avatar ? (
          <AvatarImage src={user.avatar} alt={user.name} />
        ) : (
          user.name.charAt(0)
        )}
      </UserAvatar>
      
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <UserInfo>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserInfo>
            
            <MenuItem to="/profile" onClick={() => setIsOpen(false)}>
              My Profile
            </MenuItem>
            <MenuItem to="/profile/favorites" onClick={() => setIsOpen(false)}>
              Favorites
            </MenuItem>
            <MenuItem to="/profile/settings" onClick={() => setIsOpen(false)}>
              Settings
            </MenuItem>
            <MenuItem to="/premium" onClick={() => setIsOpen(false)}>
              Upgrade to Premium
            </MenuItem>
            
            <LogoutButton onClick={handleLogout}>
              Logout
            </LogoutButton>
          </DropdownMenu>
        )}
      </AnimatePresence>
    </UserMenuContainer>
  );
};

export default UserMenu;