module.exports = {
  siteMetadata: {
    projects: [
      {
        title: 'ferwfre45v',
        description: 'loremsdsfrei vff fgffvfd frevd',
        technologies: ['React', 'Gatsby']
      },
      {
        title: 'ffrevvvvhhg',
        description: 'fdsfrfrev vvrb ergvfer erfc33regh54 rewdc w2 cr3e cre refd',
        technologies: ['React', 'Gatsby']
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-files`,
        path: `${__dirname}/src/markdown-files`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
