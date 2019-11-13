module.exports = {
  siteMetadata: {
    title: `VP Production `,
    description: `Мы – команда людей, которые создают музыку, звуки и продюсируют дикторское озвучивание на грани чистого творчества и функциональности.`,
    author: `@tarotum`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "gb.vp-production.com",
        hostingWPCOM: false,
        protocol: "https",
        useACF: false,
        concurrentRequests: 10,
        includedRoutes: [
          "**/work",
          "**/work_category",
          "**/work_genre",
          "**/work_service",
          "**/work_platform",
          "**/work_developer",
          "**/work_authors",
          "**/media",
          "**/pages",
          "**/posts",
          "**/media",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "uk",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
