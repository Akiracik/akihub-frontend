// src/pages/Music/components/MusicHome.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AlbumCard from './AlbumCard';
import PlaylistCard from './PlaylistCard';
import ArtistCard from './ArtistCard';

const MusicHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeroSection = styled.div`
  background-image: url('https://source.unsplash.com/random/1600x600/?music-concert');
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.large};
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(76, 201, 240, 0.3) 0%,
      rgba(76, 201, 240, 0.7) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: ${props => props.theme.colors.white};
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  max-width: 600px;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.music};
  color: ${props => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: ${props => props.theme.colors.dark};
`;

const ViewAllLink = styled(Link)`
  color: ${props => props.theme.colors.music};
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContentScroll = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Mock music data
const topAlbums = [
  {
    id: 1001,
    title: 'Abbey Road',
    artist: 'The Beatles',
    image: 'https://source.unsplash.com/random/300x300/?vinyl-record',
    year: 1969,
    link: '/music/abbey-road',
  },
  {
    id: 1002,
    title: 'Thriller',
    artist: 'Michael Jackson',
    image: 'https://source.unsplash.com/random/300x300/?michael-jackson',
    year: 1982,
    link: '/music/thriller',
  },
  {
    id: 1003,
    title: 'Dark Side of the Moon',
    artist: 'Pink Floyd',
    image: 'https://source.unsplash.com/random/300x300/?pink-floyd',
    year: 1973,
    link: '/music/dark-side-of-the-moon',
  },
  {
    id: 1004,
    title: 'Back in Black',
    artist: 'AC/DC',
    image: 'https://source.unsplash.com/random/300x300/?rock-band',
    year: 1980,
    link: '/music/back-in-black',
  },
  {
    id: 1005,
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    image: 'https://source.unsplash.com/random/300x300/?fleetwood-mac',
    year: 1977,
    link: '/music/rumours',
  },
  {
    id: 1006,
    title: 'Nevermind',
    artist: 'Nirvana',
    image: 'https://source.unsplash.com/random/300x300/?nirvana',
    year: 1991,
    link: '/music/nevermind',
  },
];

const newReleases = [
  {
    id: 2001,
    title: 'Midnights',
    artist: 'Taylor Swift',
    image: 'https://source.unsplash.com/random/300x300/?taylor-swift',
    year: 2022,
    link: '/music/midnights',
  },
  {
    id: 2002,
    title: 'Un Verano Sin Ti',
    artist: 'Bad Bunny',
    image: 'https://source.unsplash.com/random/300x300/?bad-bunny',
    year: 2022,
    link: '/music/un-verano-sin-ti',
  },
  {
    id: 2003,
    title: 'Harry\'s House',
    artist: 'Harry Styles',
    image: 'https://source.unsplash.com/random/300x300/?harry-styles',
    year: 2022,
    link: '/music/harrys-house',
  },
  {
    id: 2004,
    title: 'Renaissance',
    artist: 'Beyoncé',
    image: 'https://source.unsplash.com/random/300x300/?beyonce',
    year: 2022,
    link: '/music/renaissance',
  },
  {
    id: 2005,
    title: 'Mr. Morale & The Big Steppers',
    artist: 'Kendrick Lamar',
    image: 'https://source.unsplash.com/random/300x300/?kendrick-lamar',
    year: 2022,
    link: '/music/mr-morale',
  },
  {
    id: 2006,
    title: 'Honestly, Nevermind',
    artist: 'Drake',
    image: 'https://source.unsplash.com/random/300x300/?drake',
    year: 2022,
    link: '/music/honestly-nevermind',
  },
];

const popularArtists = [
  {
    id: 3001,
    name: 'Taylor Swift',
    image: 'https://source.unsplash.com/random/300x300/?taylor-swift-portrait',
    genres: ['Pop', 'Country'],
    link: '/music/artist/taylor-swift',
  },
  {
    id: 3002,
    name: 'The Weeknd',
    image: 'https://source.unsplash.com/random/300x300/?the-weeknd',
    genres: ['R&B', 'Pop'],
    link: '/music/artist/the-weeknd',
  },
  {
    id: 3003,
    name: 'Bad Bunny',
    image: 'https://source.unsplash.com/random/300x300/?bad-bunny-portrait',
    genres: ['Reggaeton', 'Latin Trap'],
    link: '/music/artist/bad-bunny',
  },
  {
    id: 3004,
    name: 'Billie Eilish',
    image: 'https://source.unsplash.com/random/300x300/?billie-eilish',
    genres: ['Pop', 'Alternative'],
    link: '/music/artist/billie-eilish',
  },
  {
    id: 3005,
    name: 'Drake',
    image: 'https://source.unsplash.com/random/300x300/?drake-portrait',
    genres: ['Hip-Hop', 'Rap'],
    link: '/music/artist/drake',
  },
  {
    id: 3006,
    name: 'BTS',
    image: 'https://source.unsplash.com/random/300x300/?bts',
    genres: ['K-Pop', 'Pop'],
    link: '/music/artist/bts',
  },
];

const featuredPlaylists = [
  {
    id: 4001,
    title: 'Today\'s Top Hits',
    description: 'The most popular songs right now',
    image: 'https://source.unsplash.com/random/300x300/?music-playlist',
    tracks: 50,
    link: '/music/playlist/todays-top-hits',
  },
  {
    id: 4002,
    title: 'Chill Vibes',
    description: 'Relaxing beats for your downtime',
    image: 'https://source.unsplash.com/random/300x300/?chill-music',
    tracks: 40,
    link: '/music/playlist/chill-vibes',
  },
  {
    id: 4003,
    title: 'Workout Motivation',
    description: 'High-energy tracks to fuel your workout',
    image: 'https://source.unsplash.com/random/300x300/?workout',
    tracks: 45,
    link: '/music/playlist/workout-motivation',
  },
  {
    id: 4004,
    title: '90s Throwback',
    description: 'The best hits from the 1990s',
    image: 'https://source.unsplash.com/random/300x300/?90s',
    tracks: 60,
    link: '/music/playlist/90s-throwback',
  },
  {
    id: 4005,
    title: 'Indie Discoveries',
    description: 'Fresh indie tracks you need to hear',
    image: 'https://source.unsplash.com/random/300x300/?indie-music',
    tracks: 35,
    link: '/music/playlist/indie-discoveries',
  },
  {
    id: 4006,
    title: 'Focus Flow',
    description: 'Music to help you concentrate',
    image: 'https://source.unsplash.com/random/300x300/?focus',
    tracks: 30,
    link: '/music/playlist/focus-flow',
  },
];

const MusicHome = () => {
  return (
    <MusicHomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>AkiMusic</HeroTitle>
          <HeroDescription>
            Discover new music, create playlists, and enjoy millions of tracks. Your perfect soundtrack is just a click away.
          </HeroDescription>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HeroButton to="/music/random">
              <span>🎲</span> Find Random Music
            </HeroButton>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <section>
        <SectionHeader>
          <SectionTitle>Top Albums</SectionTitle>
          <ViewAllLink to="/music/categories?type=albums">View All</ViewAllLink>
        </SectionHeader>
        <ContentScroll>
          {topAlbums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ContentScroll>
      </section>
      
      <section>
        <SectionHeader>
          <SectionTitle>New Releases</SectionTitle>
          <ViewAllLink to="/music/categories?filter=new">View All</ViewAllLink>
        </SectionHeader>
        <ContentScroll>
          {newReleases.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </ContentScroll>
      </section>
      
      <section>
        <SectionHeader>
          <SectionTitle>Popular Artists</SectionTitle>
          <ViewAllLink to="/music/categories?type=artists">View All</ViewAllLink>
        </SectionHeader>
        <ContentScroll>
          {popularArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </ContentScroll>
      </section>
      
      <section>
        <SectionHeader>
          <SectionTitle>Featured Playlists</SectionTitle>
          <ViewAllLink to="/music/categories?type=playlists">View All</ViewAllLink>
        </SectionHeader>
        <ContentScroll>
          {featuredPlaylists.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </ContentScroll>
      </section>
    </MusicHomeContainer>
  );
};

export default MusicHome;