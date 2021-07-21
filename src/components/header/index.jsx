import React from 'react';
import { MarqueeTicker } from '../marquee';
import {
  TopBar,
  TitleHolder,
  StyledHeaderLink,
  NavHeaderText,
  MobileBackgroundMarquee,
} from './styles'

export const Header = () => {
  return (
    <TopBar>
        <TitleHolder>
          <StyledHeaderLink to="/">
            <NavHeaderText>Work With Aqil</NavHeaderText>
          </StyledHeaderLink>
        </TitleHolder>
        <MarqueeTicker position={'top'}/>
        <MobileBackgroundMarquee></MobileBackgroundMarquee>
    </TopBar>
  )
}