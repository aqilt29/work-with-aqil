import React from 'react';
import { Layout } from '../components/layout/index'
import styled from 'styled-components'

export const BlogPost = ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      {/* <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div> */}
      <pre>
        {JSON.stringify(post, null, 2)}
      </pre>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: {eq: $slug}) {
      author {
        node {
          firstName
          lastName
        }
      }
    }
  }
`
