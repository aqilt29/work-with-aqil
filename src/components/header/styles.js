import { Link } from 'gatsby'
import styled from 'styled-components';
import { device } from '../../styles/devices';

export const TopBar = styled.div`
  letter-spacing: .1em;
  border-top: none;
  border-bottom: 2px solid black;
  padding: 1em;
  display: flex;
  justify-content: center;
  margin-bottom: 2.5em;

  position: sticky;
  top: -1px;
  z-index: 3;
  background-color: white;

  @media ${device.tablet} {
    padding: 0;
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

export const TitleHolder = styled.div`
  /* display: contents; */
  background-color: #fff;
  z-index: 2;
  position: relative;
  
  @media ${device.tablet} {
    display: block;
    border-right: 2px solid black;
    padding: 2em;
    
    &:hover {
      & h3 {
        color: white;
      }
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: black;
      transition: transform 300ms ease-in-out;
      transform: scaleX(0);
      transform-origin: left;
    }
    
    &:hover::before,
    &:focus::before {
      transform: scaleX(1);
      /* z-index: 0; */
    }
  }
`;

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: #000;
  }
`;

export const NavHeaderText = styled.h3`
  color: #000;
  text-decoration: none;
`;

export const MobileBackgroundMarquee = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 3em;
  top: 3.7em;
  background-color: white;
  z-index: -2;
  border-bottom: 2px solid black;

  @media ${device.tablet} {
    display: none;
  }
`;
