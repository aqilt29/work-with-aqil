import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { device } from '../../styles/devices';
import parse from 'html-react-parser';

const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1.25em;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const BlogTitle = styled.h2`
  margin-top: .25em;
`;

const BlogPreview = ({ blog }) => {
  
  const imgSource = getImage(blog.featuredImage.node.localFile)
  const { excerpt } = blog;

  console.log(parse(excerpt))

  return (
    <div style={{ marginBottom: '2em' }}>
      <div>
        <GatsbyImage 
          image={imgSource}
          alt={blog.featuredImage.node.altText}
        />
        <BlogTitle>{blog.title}</BlogTitle>
        <div>
          {
            parse(excerpt)
          }
        </div>
      </div>
    </div>
  )
}

export const BlogList = ({ allBlogs }) => {
  console.log(allBlogs, '<--- in Bloglist')
  return (
    <>
      <BlogListContainer>
        {
          allBlogs.map((blog, idx) => <BlogPreview blog={blog} key={`${idx}`} />)
        }
      </BlogListContainer>
    </>
  )
}