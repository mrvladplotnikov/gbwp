const languages = require("./src/utils/languages")

module.exports = {
  siteMetadata: {
    title: `VP Production `,
    description: `Мы – команда людей, которые создают музыку, звуки и продюсируют дикторское озвучивание на грани чистого творчества и функциональности.`,
    languages,
    author: `@tarotum`,
    navMenu: [
      {
        link: {
          uk: "/#portfolio",
          ru: "/ru#portfolio",
          en: "/en#portfolio",
        },
        label: {
          uk: "Портфолио",
          ru: "Портфолио",
          en: "Portfolio",
        },
      },
      {
        label: {
          uk: "Послуги",
          ru: "Услуги",
          en: "Services",
        },
        child: [
          {
            link: {
              uk: "/services/music-сreation",
              ru: "/ru/services/music-сreation",
              en: "/en/services/music-сreation",
            },
            label: {
              uk: "Создание музыки",
              ru: "Создание музыки",
              en: "Music creation",
            },
          },
          {
            link: {
              uk: "/",
              en: "/",
              ru: "/",
            },
            label: {
              uk: "Создание музыки",
              ru: "Создание музыки",
              en: "Music creation",
            },
          },
        ],
      },
      {
        link: {
          uk: "/blog",
          ru: "/blog",
          en: "/blog",
        },
        label: {
          uk: "Блог",
          ru: "Блог",
          en: "Blog",
        },
      },
      {
        link: {
          uk: "/about",
          en: "/about",
          ru: "/about",
        },
        label: {
          uk: "О компании",
          ru: "О компании",
          en: "About",
        },
      },
    ],
    socialLinks: [
      {
        name: "facebook",
        showOnHome: true,
        link: "link",
        icon: "facebook-f",
      },
      {
        name: "instagram",
        showOnHome: true,
        link: "instagram",
        icon: "instagram",
      },
      {
        name: "soundcloud",
        showOnHome: false,
        link: "soundcloud",
        icon: "soundcloud",
      },
      {
        name: "vimeo",
        showOnHome: false,
        link: "vimeo",
        icon: "vimeo-v",
      },
      {
        name: "twitter",
        showOnHome: false,
        link: "twitter",
        icon: "twitter",
      },
      {
        name: "linkedin",
        showOnHome: true,
        link: "linkedin",
        icon: "linkedin-in",
      },
    ],
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
        debug: true,
        hostingWPCOM: false,
        protocol: "https",
        useACF: false,
        concurrentRequests: 10,
        includedRoutes: [
          "**/client_review",
          "**/work",
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
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
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
