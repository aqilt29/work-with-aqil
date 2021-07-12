require('dotenv').config()
const siteURL = new URL(process.env.TARGET_ADDRESS)

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
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_WP_URL,
      }
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
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.CLOUD_BUCKET_NAME,
        protocol: siteURL.protocol.slice(0, -1),
        hostname: siteURL.hostname,
      },
    }
  ],
};
