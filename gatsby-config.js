module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Wallet-dashboard`,
        short_name: `dashboard`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAlu8Y-dFpRMFlkMgEzZNM3MOUTMfdBL-8",
          authDomain: "dashboard-44678.firebaseapp.com",
          projectId: "dashboard-44678",
          storageBucket: "dashboard-44678.appspot.com",
          messagingSenderId: "820059612511",
          appId: "1:820059612511:web:aa0b1f6ce2e8c6876dc2ea"
        },
        features: {
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
        },
      },
      
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
        importScripts: `${__dirname}/src/notification-sw.js`,
      },
    },
  ],
}
