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

h1 {
    font-size: 4rem;
}
h2 {
    font-size: 3rem;
}
h3 {
    font-size: 2.5rem;
}
p {
    font-size: 1.8rem;
}
`;

export default GlobalStyle;
