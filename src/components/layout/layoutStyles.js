import styled from 'styled-components';
import { device } from '../../styles/devices';

export const GradientOverlay = styled.div`
  
  height: 100vh;
  width: 100vw;
  opacity: 70%;
  position: absolute;
  z-index: -10;
`;

export const BodyContainer = styled.div`
  /* @media ${device.tablet} {
    padding: 0rem 5rem;
  } */
`;