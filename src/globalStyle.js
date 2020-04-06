import { createGlobalStyle } from 'styled-components';

import GothamBook from './assets/fonts/GothamBook.otf';
import GothamBold from './assets/fonts/GothamBold.otf';
import GothamBlack from './assets/fonts/GothamBlack.otf';

export default createGlobalStyle`
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.regular};
      src: url("${GothamBook}");
  }
  
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.bold};
      src: url("${GothamBold}");
  }
  
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.black};
      src: url("${GothamBlack}");
  }
  
  body {
    font-family: ${p => p.theme.typography.fontFamily.regular}, serif;
    margin: 0;
    padding: 0;
   
    a {
      text-decoration: none;
    }
    img {
      max-width: 100%;
    }
    h1,h2,h3,h4,h5,h6,p {
      margin: 0;
      padding: 0;
    }
  }
`;
