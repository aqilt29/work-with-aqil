import styled from 'styled-components';
import { device } from '../../styles/devices';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LinksBarContainer = styled.div`
  border-top: 2px solid black;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    min-height: 15vh;
  }
`;

export const IconWrapper = styled.div`
  padding-right: 1em;

  svg {
    height: 3em;
  }

  @media ${device.laptop} {
    padding-right: 3em;

    svg {
      height: 4em;
    }
  }
`;

export const LinkBox = styled.div`
  position: relative;
  padding: 1em;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.laptop} {
    width: 34vw;
    border-right: 2px solid black;
    padding: 3em;
    padding-top: 4em;
  }

  &:hover {
    /* text-decoration: underline; */

    & > h1 {
      color: white;
    }

    & svg {
      fill: white;
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

`;

export const LinkText = styled.h1`
  text-align: center;
  color: black;
  
`;

