// src/components/layout/MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  display: flex;
  justify-content: flex-end;
`;

const MenuContainer = styled(motion.div)`
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: ${props => props.theme.colors.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  color: ${props => 
    props.active === 'film' && props.isactive ? props.theme.colors.film :
    props.active === 'music' && props.isactive ? props.theme.colors.music :
    props.active === 'anime' && props.isactive ? props.theme.colors.anime :
    props.active === 'ai' && props.isactive ? props.theme.colors.ai :
    props.isactive ? props.theme.colors.primary : props.theme.colors.dark
  };
`;

const MobileMenu = ({ isOpen, onClose, activePath }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <MenuContainer
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            onClick={e => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>✕</CloseButton>
            
            <MobileNavLink 
              to="/" 
              isactive={activePath === '' ? 'true' : undefined}
              onClick={onClose}
            >
              Home
            </MobileNavLink>
            
            <MobileNavLink 
              to="/film" 
              active="film"
              isactive={activePath === 'film' ? 'true' : undefined}
              onClick={onClose}
            >
              AkiFilm
            </MobileNavLink>
            
            <MobileNavLink 
              to="/music" 
              active="music"
              isactive={activePath === 'music' ? 'true' : undefined}
              onClick={onClose}
            >
              AkiMusic
            </MobileNavLink>
            
            <MobileNavLink 
              to="/anime" 
              active="anime"
              isactive={activePath === 'anime' ? 'true' : undefined}
              onClick={onClose}
            >
              AkiAnime
            </MobileNavLink>
            
            <MobileNavLink 
              to="/ai" 
              active="ai"
              isactive={activePath === 'ai' ? 'true' : undefined}
              onClick={onClose}
            >
              AkiAI
            </MobileNavLink>
            
            <MobileNavLink 
              to="/profile" 
              isactive={activePath === 'profile' ? 'true' : undefined}
              onClick={onClose}
            >
              Profile
            </MobileNavLink>
          </MenuContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;