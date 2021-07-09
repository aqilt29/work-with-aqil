import React from 'react';
import GlobalStyle from '../../styles/globalStyles';
import { BodyContainer, GradientOverlay } from './layoutStyles';

const Layout = ({ children }) => {
  return (
    
    <>
      <GlobalStyle />
      <BodyContainer>
        {children}
      </BodyContainer>
    </>
  )
}

export default Layout;