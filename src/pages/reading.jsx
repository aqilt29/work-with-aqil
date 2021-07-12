import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { device } from '../styles/devices';
import { BlogList } from '../components/blogList';

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 2em;

  @media ${device.tablet} {
    margin-top: 2em;
  }
`;

const ReadingPage = ({ data: { allWpPost } }) => {
  return (
    <Layout>
      <StyledHeader>
        <h1>Up To Date on Crypto</h1>
      </StyledHeader>
      <BlogList
        allBlogs={allWpPost.nodes}
      />
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
      excerpt
      featuredImage {
        node {
          title
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 200
                width: 200
                placeholder: BLURRED
                transformOptions: {
                  fit: COVER
                }
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
