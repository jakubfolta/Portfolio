/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Folta | Software Engineer',
    description: `Software Engineer Portfolio`,
    author: 'Jakub Folta',
    siteUrl: `https://folta.me`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-plugin-transition-link", 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio-Folta`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/logo.png`,
      }
    },
    "gatsby-plugin-offline", "gatsby-plugin-remove-serviceworker", "gatsby-transformer-remark", "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-files`,
        path: `${__dirname}/src/markdown-files`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
};