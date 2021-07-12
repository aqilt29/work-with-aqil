import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { device } from '../styles/devices';

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 2em;

  @media ${device.tablet} {
    margin-top: 2em;
  }
`;

const ReadingPage = ({ data: { allWpPost } }) => {
  console.log(allWpPost.nodes);

  return (
    <Layout>
      <StyledHeader>
        <h1>Up To Date on Crypto</h1>
      </StyledHeader>
      
    </Layout>
  )
};

export default ReadingPage;

export const query = graphql`
{
  allWpPost {
    nodes {
      title
      slug
      featuredImage {
        node {
          title
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
              )
            }
          }
          
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
    }
  }
}
`;
