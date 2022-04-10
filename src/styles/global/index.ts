import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0; 
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fira Code', monospace;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyles;
