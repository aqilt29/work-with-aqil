import React from 'react';
import GlobalStyle from '../../styles/globalStyles';
import { BodyContainer } from './layoutStyles';
import { Header } from '../header/index'

const Layout = ({ children }) => {
  return (
    
    <>
      <GlobalStyle />
      <Header />
      <BodyContainer>
        {children}
      </BodyContainer>
    </>
  )
}

export default Layout;