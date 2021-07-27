import styled from 'styled-components';
import { device } from '../../styles/devices';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  justify-content: space-around;

  @media ${device.tablet} {
    flex-direction: row;
    height: 75vh;
    padding-bottom: 5em;
  }
`;

export const HeroImg = styled.img`
  display: block;
  max-height: 60vh;
  padding-bottom: 2em;
`;

export const BioText = styled.p`
  text-align: left;
  font-size: 1.5em;
  line-height: 1.5em;
  letter-spacing: 0.075em;
  margin: 1em 0;

`;

export const BioContainer = styled.div`
  
  @media ${device.tablet} {
    max-width: 50vw;
  }
`;

export const BioHeader = styled.h1`

  @media ${device.tablet} {
    /* display: none; */
  }
`;

export const MailButton = styled.div`
  border: 2px solid white;
  padding: 0.5em;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
  font-style: bold;
  width: 100%;
  background-color: black;

  &:hover {
    border: 2px solid black; 
    background-color: white;
    color: black;

    & > a {
      color: black;
    }
  }

  & > a {
    text-decoration: none;
    color: white;
  }
`;

export const MailAnchor = styled.a`
  text-decoration: none;
  color: white;
`;
