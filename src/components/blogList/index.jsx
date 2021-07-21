import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from 'html-react-parser';


import {
  ExcerptContainer,
  BlogListContainer,
  BlogTitle,
  BlogPreviewContainer,
} from './styles';


const BlogPreview = ({ blog }) => {
  
  const imgSource = getImage(blog.featuredImage.node.localFile)
  const { excerpt } = blog;

  return (
    <BlogPreviewContainer>
      <GatsbyImage 
        image={imgSource}
        alt={blog.featuredImage.node.altText}
      />
      <BlogTitle>{blog.title}</BlogTitle>
      <ExcerptContainer>
        {
          parse(excerpt)
        }
      </ExcerptContainer>
    </BlogPreviewContainer>
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
        {
          allBlogs.map((blog, idx) => <BlogPreview blog={blog} key={`${idx}`} />)
        }
        {
          allBlogs.map((blog, idx) => <BlogPreview blog={blog} key={`${idx}`} />)
        }
        {
          allBlogs.map((blog, idx) => <BlogPreview blog={blog} key={`${idx}`} />)
        }
      </BlogListContainer>
    </>
  )
}