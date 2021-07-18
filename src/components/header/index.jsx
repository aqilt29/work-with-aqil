import React from 'react';
import { MarqueeTicker } from '../marquee';
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
        <MarqueeTicker position={'top'}/>
    </TopBar>
  )
}