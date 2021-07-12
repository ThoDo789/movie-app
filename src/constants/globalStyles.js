import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   } 
  body,html {
        font-size: 16px;
     font-family: 'Poppins', sans-serif;
        margin: 0 auto;
     background-color: #2d2d2d;
    scroll-behavior: smooth;


  }
  @media screen and (max-width: 576px){
               body,html{
                   font-size: 12px;
               }
  }
  ul, li{
      list-style: none;
      
  }
  a{
      text-decoration: none;
  }
  img{
      display: block;
      width:100%;

  }
  p{
      margin:0;
  }

`;

export default GlobalStyle;
