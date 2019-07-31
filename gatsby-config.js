module.exports = {
  siteMetadata: {
    title: `David Lacarta`,
    titleMeta: `✨David Lacarta`,
    description: `Software developer. Passionate about Front End, Javascript, CSS, React.`,
    url: `http://davidlacarta.com`,
    image: `/images/icon.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `davidlacarta`,
        short_name: `davidlacarta`,
        start_url: `/`,
        background_color: "lightslategrey",
        theme_color: "lightslategrey",
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
