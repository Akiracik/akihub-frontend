// src/pages/Profile/components/ProfileSettings.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const SettingsSection = styled.section`
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  padding-bottom: 2rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ToggleLabel = styled.span`
  font-weight: 500;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: ${props => props.theme.colors.primary};
  }
  
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.lightGray};
  transition: ${props => props.theme.transitions.normal};
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: ${props => props.theme.transitions.normal};
    border-radius: 50%;
  }
`;

const SaveButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
`;

const DeleteAccountButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.film};
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1rem;
  font-family: ${props => props.theme.fonts.body};
`;

const ProfileSettings = () => {
  // Mock user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '********',
    notifications: {
      email: true,
      push: true,
      newsletter: false,
    },
    preferences: {
      darkMode: false,
      autoplay: true,
      contentWarnings: true,
    },
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleToggleChange = (category, setting) => {
    setUser(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting],
      },
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the updated user data to the backend
    console.log('Saving user settings:', user);
    alert('Settings saved successfully!');
  };
  
  return (
    <SettingsContainer>
      <PageTitle>Account Settings</PageTitle>
      
      <form onSubmit={handleSubmit}>
        <SettingsSection>
          <SectionTitle>Profile Information</SectionTitle>
          
          <FormRow>
            <FormGroup>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={user.name} 
                onChange={handleInputChange} 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={user.email} 
                onChange={handleInputChange} 
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput 
              type="password" 
              id="password" 
              name="password" 
              value={user.password} 
              onChange={handleInputChange} 
            />
          </FormGroup>
        </SettingsSection>
        
        <SettingsSection>
          <SectionTitle>Notification Settings</SectionTitle>
          
          <ToggleContainer>
            <ToggleLabel>Email Notifications</ToggleLabel>
            <ToggleSwitch>
              <ToggleInput 
                type="checkbox" 
                checked={user.notifications.email} 
                onChange={() => handleToggleChange('notifications', 'email')} 
              />
              <ToggleSlider />
            </ToggleSwitch>
          </ToggleContainer>
          
          <ToggleContainer>
            <ToggleLabel>Push Notifications</ToggleLabel>
            <ToggleSwitch>
              <ToggleInput 
                type="checkbox" 
                checked={user.notifications.push} 
                onChange={() => handleToggleChange('notifications', 'push')} 
              />
              <ToggleSlider />
            </ToggleSwitch>
          </ToggleContainer>
          
          <ToggleContainer>
            <ToggleLabel>Newsletter Subscription</ToggleLabel>
            <ToggleSwitch>
              <ToggleInput 
                type="checkbox" 
                checked={user.notifications.newsletter} 
                onChange={() => handleToggleChange('notifications', 'newsletter')} 
              />
              <ToggleSlider />
            </ToggleSwitch>
          </ToggleContainer>
        </SettingsSection>
        
        <SettingsSection>
          <SectionTitle>Preferences</SectionTitle>
          
          <ToggleContainer>
            <ToggleLabel>Dark Mode</ToggleLabel>
            <ToggleSwitch>
              <ToggleInput 
                type="checkbox" 
                checked={user.preferences.darkMode} 
                onChange={() => handleToggleChange('preferences', 'darkMode')} 
              />
              <ToggleSlider />
            </ToggleSwitch>
          </ToggleContainer>
          
          <ToggleContainer>
            <ToggleLabel>Autoplay Media</ToggleLabel>
            <ToggleSwitch>
              <ToggleInput 
                type="checkbox" 
                checked={user.preferences.autoplay} 
                onChange={() => handleToggleChange('preferences', 'autoplay')} 
              />
              <ToggleSlider />
            </ToggleSwitch>
          </ToggleContainer>
          
          <ToggleContainer>
            <ToggleLabel>Show Content Warnings</ToggleLabel>
            <ToggleSwitch>
              <ToggleInput 
                type="checkbox" 
                checked={user.preferences.contentWarnings} 
                onChange={() => handleToggleChange('preferences', 'contentWarnings')} 
              />
              <ToggleSlider />
            </ToggleSwitch>
          </ToggleContainer>
        </SettingsSection>
        
        <SettingsSection>
          <SectionTitle>Account Management</SectionTitle>
          
          <SaveButton 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save Changes
          </SaveButton>
          
          <div>
            <DeleteAccountButton type="button">
              Delete Account
            </DeleteAccountButton>
          </div>
        </SettingsSection>
      </form>
    </SettingsContainer>
  );
};

export default ProfileSettings;