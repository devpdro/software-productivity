import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400; 
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-y: hidden;
    border: 1px solid yelolw;
  }
`;

export default GlobalStyle;
