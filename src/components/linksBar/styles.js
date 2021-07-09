import styled from 'styled-components';
import { device } from '../../styles/devices';

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
  }
`;

export const LinkBox = styled.div`
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

`;

export const LinkText = styled.h1`
  text-align: center;  

`;

