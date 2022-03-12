import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;

  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
