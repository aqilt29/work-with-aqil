import styled from 'styled-components';
import { device } from '../../styles/devices';

export const TopMarqueeContainer = styled.div`
  display: grid;
  position: fixed;
  top: 4.5em;

  @media ${device.tablet} {
    padding-top: 2.125em;
    top: 0;
  }
`;