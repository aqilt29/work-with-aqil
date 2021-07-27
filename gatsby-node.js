const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost {
        nodes {
          title
          slug
          excerpt
          content
          author {
            node {
              firstName
              lastName
            }
          }
        }
      }
    }  
  `).then(result => {
    result.data.allWpPost.nodes.forEach((node) => {
      console.table(node)
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blogTemplate.jsx`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}