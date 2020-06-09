import React from "react"
import SEO from '../components/Seo'
import { createGlobalStyle } from "styled-components"

import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  font-family: 'IBM Plex Mono', monospace;
  font-family: 'Roboto', sans-serif;

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    font-family: 'IBM Plex Mono';
    color: black;
  }

  p {
    font-family: 'Roboto';
    color: black;
  }

  body {
    background-color: paleturquoise;
  }

`
export default ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    {children}
  </>
)