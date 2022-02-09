/**
 * Disabling no-var-requires here as this is a node file.
 * There is probably a better way to do this that we should
 * look into at some point.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const plugins = [
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      cssLoaderOptions: {
        esModule: false,
        modules: {
          namedExport: false,
        },
      },
    },
  },
  {
    resolve: `gatsby-plugin-social9-socialshare`,
    options: {
      content: process.env.SOCIAL_SHARE,
      async: true,
      defer: true,
    },
  },
  {
    resolve: "gatsby-plugin-hubspot",
    options: {
      trackingCode: process.env.HUBSPOT_TRACKING_ID,
      respectDNT: true,
      productionOnly: false,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `src/images/icon.png`,
    },
  },

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
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [process.env.GA4_TAG],
      pluginConfig: {
        head: true,
      },
    },
  },
];

/**
 * The site is useless without Contentful, lets kill the process
 * if Contentful is not set up
 */
if (process.env.CONTENTFUL_TOKEN && process.env.CONTENTFUL_SPACE) {
  plugins.push({
    resolve: `gatsby-source-contentful`,
    options: {
      accessToken: process.env.CONTENTFUL_TOKEN,
      spaceId: process.env.CONTENTFUL_SPACE,
    },
  });
} else {
  throw Error("Contentful is not set up. Set up contentful before continuing");
}

module.exports = {
  siteMetadata: {
    title: "Responsible AI",
    description:
      "Working together, we can create AI systems the world can trust.",
    author: "Responsible AI",
    siteUrl: "https://www.responsible.ai/",
  },
  plugins,
};
