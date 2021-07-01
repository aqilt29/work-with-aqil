module.exports = {
  siteMetadata: {
    title: "Work With Aqil",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter`,
          'Montserrat\:100'
        ],
        display: 'swap'
      }
    }
  ],
};
