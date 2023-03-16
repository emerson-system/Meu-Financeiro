import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    background-image: url('../../img/financeiro.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width:100vw;
    height:100vh;
  }
  
`;

export default Global;
