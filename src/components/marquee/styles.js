import styled from 'styled-components';
import { device } from '../../styles/devices';

export const MarqueeContainer = styled.div` 
  top: 4.5em; 
  position: fixed;
  display: grid;
  

  @media ${device.tablet} {
    padding-top: 2.125em;
    top: 0;
  }
`;