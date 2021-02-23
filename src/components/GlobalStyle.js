import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    font-size: 62.5%;
    
}

body{
    background: #f7f7f7;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
}

`;

export default GlobalStyle;
