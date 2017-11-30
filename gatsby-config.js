module.exports = {
  siteMetadata: {
    title: `Application Development`,
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
    },
`gatsby-transformer-remark`,        
  `gatsby-plugin-glamor`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
],
  pathPrefix: `/appdevhelp`
}
