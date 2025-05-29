import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 3rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }
  
  ul, ol {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
  
  section {
    padding: 4rem 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;
 