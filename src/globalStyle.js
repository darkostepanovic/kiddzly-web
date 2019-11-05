import { createGlobalStyle } from 'styled-components';

import ProximaRegular from './assets/fonts/ProximaNova-Regular.otf';
import ProximaSemiBold from './assets/fonts/ProximaNova-Semibold.otf';
import ProximaBold from './assets/fonts/ProximaNova-Bold.otf';
import ProximaExtraBold from './assets/fonts/ProximaNova-Extrabold.otf';
import ArialBlack from './assets/fonts/Arial_Black.ttf';

export default createGlobalStyle`
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.regular};
      src: url("${ProximaRegular}");
  }
  
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.semiBold};
      src: url("${ProximaSemiBold}");
  }
  
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.bold};
      src: url("${ProximaBold}");
  }
  
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.extraBold};
      src: url("${ProximaExtraBold}");
  }
  
  @font-face {
      font-family: ${p => p.theme.typography.fontFamily.black};
      src: url("${ArialBlack}");
  }
  
  body {
    font-family: ${p => p.theme.typography.fontFamily.regular}, serif;
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: ${p => p.theme.typography.fontSize.h1}px;
      font-family: "ArialBlack", serif;
    }
    h3 {
      font-size: ${p => p.theme.typography.fontSize.h3}px;
    }
    h5 {
      font-size: ${p => p.theme.typography.fontSize.h5}px;
    }
    h6 {
      font-size: ${p => p.theme.typography.fontSize.h6}px;
    }
    p {
      font-size: ${p => p.theme.typography.fontSize.p}px;
    }
    
    a {
      text-decoration: none;
    }
    img {
      max-width: 100%;
    }
  }
`;
