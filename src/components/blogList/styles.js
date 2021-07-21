import styled from 'styled-components';
import { device } from '../../styles/devices';

export const BlogTitle = styled.h2`
  margin: .25em 0;
  text-decoration: underline;
`;

export const ExcerptContainer = styled.div`

  & > p {
    font-size: .875em;
    line-height: 1.5;
    letter-spacing: .06em;
  }

  @media ${device.table} {
    font-size: 1em;
  }
`;

export const BlogPreviewContainer = styled.div`
  margin-bottom: 2em;
  background-color: white;
  position: relative;

  @media ${device.tablet} { 
    max-width: 27vw;
    margin-bottom: 4em;
  }
`;

export const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1.4em;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0 2em;
  }
`;