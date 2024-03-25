import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin-block-end: 0;
    margin-block-start: 0;
  }

  #root {
  height: 100vh;
}

`;