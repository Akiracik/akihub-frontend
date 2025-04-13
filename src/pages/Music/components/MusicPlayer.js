// src/pages/Music/components/MusicPlayer.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`;

const SongImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.small};
  object-fit: cover;
`;

const SongDetails = styled.div`
  min-width: 0;
`;

const SongTitle = styled.h4`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SongArtist = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 2;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 1rem;
  }
`;

const ControlButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: ${props => props.primary ? '2rem' : '1.25rem'};
  color: ${props => props.theme.colors.dark};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 2px;
  position: relative;
  cursor: pointer;
`;

const Progress = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.music};
  border-radius: 2px;
  width: ${props => props.progress}%;
`;

const ProgressHandle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.music};
  position: absolute;
  top: 50%;
  left: ${props => props.progress}%;
  transform: translate(-50%, -50%);
`;

const TimeDisplay = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray};
  min-width: 40px;
  text-align: center;
`;

const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  justify-content: flex-end;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const VolumeIcon = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.dark};
`;

const VolumeSlider = styled.input`
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.music};
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.music};
    cursor: pointer;
    border: none;
  }
`;

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(80);
  
  // Mock current song data
  const currentSong = {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image: 'https://source.unsplash.com/random/100x100/?album-cover',
    duration: '3:20',
    currentTime: '1:10',
  };
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  
  return (
    <PlayerContainer>
      <SongInfo>
        <SongImage src={currentSong.image} alt={currentSong.title} />
        <SongDetails>
          <SongTitle>{currentSong.title}</SongTitle>
          <SongArtist>{currentSong.artist}</SongArtist>
        </SongDetails>
      </SongInfo>
      
      <PlayerControls>
        <ControlButton>⏮️</ControlButton>
        <ControlButton 
          primary 
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </ControlButton>
        <ControlButton>⏭️</ControlButton>
      </PlayerControls>
      
      <ProgressContainer>
        <TimeDisplay>{currentSong.currentTime}</TimeDisplay>
        <ProgressBar>
          <Progress progress={progress} />
          <ProgressHandle progress={progress} />
        </ProgressBar>
        <TimeDisplay>{currentSong.duration}</TimeDisplay>
      </ProgressContainer>
      
      <VolumeContainer>
        <VolumeIcon>🔊</VolumeIcon>
        <VolumeSlider 
          type="range" 
          min="0" 
          max="100" 
          value={volume} 
          onChange={handleVolumeChange} 
        />
      </VolumeContainer>
    </PlayerContainer>
  );
};

export default MusicPlayer;