import React from "react"
import SEO from '../Seo/Seo'
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
    font-family: 'Helvetica Neue';
  }

  p {
    font-family: 'Roboto';
  }

  body {
    background-color: black;
    color: white;
  }

`
export default ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    {children}
  </>
)