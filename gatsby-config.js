module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-files`,
        path: `${__dirname}/src/markdown-files`
      },
    },
  ]
}
