import React from 'react';
import GlobalStyle from '../../styles/globalStyles';
import { BodyContainer } from './layoutStyles';

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