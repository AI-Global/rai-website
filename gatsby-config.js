// Environmental variables for access tokens
// SET LOCALLY, DO NOT INSTALL dot-env
const accessToken = process.env.CONTENTFUL_TOKEN;
const spaceID = process.env.CONTENTFUL_SPACE;

// Configuration file
// Proxy for manifest.json in regular React app
module.exports = {
  siteMetadata: {
    title: "RAI Website",
    description: "Responsible AI Institute Website",
    author: "Colin Phillips",
    siteUrl: "https://rai-website.herokuapp.com/",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: accessToken,
        spaceId: spaceID,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: true,
        base64Width: 20,
        forceBase64Format: `png`,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
