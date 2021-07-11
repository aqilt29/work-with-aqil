import React from 'react';
import { TopMarquee } from '../marquee';
import {
  TopBar,
  TitleHolder,
  StyledHeaderLink,
} from './styles'

export const Header = () => {
  return (
    <TopBar>
        <TitleHolder>
          <StyledHeaderLink to="/">
            <h3>Work With Aqil</h3>
          </StyledHeaderLink>
        </TitleHolder>
        <TopMarquee />
    </TopBar>
  )
}