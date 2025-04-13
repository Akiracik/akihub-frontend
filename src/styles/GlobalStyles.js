// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600&family=Poppins:wght@700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: color ${props => props.theme.transitions.fast};
    
    &:hover {
      color: ${props => props.theme.colors.dark};
    }
  }
  
  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.body};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  main {
    min-height: calc(100vh - 160px); /* Header ve Footer'ı hesaba katarak */
    padding: 2rem 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 0 2rem;
    }
  }
`;