module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-files`,
        path: `${__dirname}/src/markdown-files`
      },
    },
    `gatsby-transformer-remark`
  ]
}
