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
    max-width: 40vw;

  }
`;

export const BioHeader = styled.h1`

  @media ${device.tablet} {
    /* display: none; */
  }
`;