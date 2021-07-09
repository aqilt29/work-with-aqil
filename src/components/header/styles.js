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

  @media ${device.tablet} {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const TitleHolder = styled.div`
  display: contents;
  
  @media ${device.tablet} {
    display: block;
    border-right: 2px solid black;
    padding: 2em;
  }
`;

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: #000;
  }
`;