import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { device } from '../../styles/devices';

const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 2em;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const BlogPreview = ({ blog }) => {
  const blogThumbnail = getImage(blog.featuredImage.node.localFile)
  console.log(blog)
  return (
    <div style={{ marginBottom: '2em' }}>
      <h3>{blog.title}</h3>
      <div>
        <GatsbyImage
          image={blogThumbnail} 
        />
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