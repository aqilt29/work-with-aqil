//  Apply all of the global styles here

import { createGlobalStyle } from 'styled-components';
// import { normalize } from 'styled-normalize'
import StardomFont from '../styles/fonts/Stardom.woff';
import StardomFont2 from '../styles/fonts/Stardom.woff2';

import compressedLA from '../images/compressedLA.jpg'

const GlobalStyle = createGlobalStyle`
  
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'Stardom';
    src: local('Stardom'), local('Stardom'),
    url(${StardomFont2}) format('woff2'),
    url(${StardomFont}) format('woff');
  }

  body, html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Inter;
    width: 100vw;
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Stardom;
    font-weight: 100;
  }


`;

export default GlobalStyle;
