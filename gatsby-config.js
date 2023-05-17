// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbywordpresshomepage.gatsbyjs.io/",
    title: "Gatsby WordPress Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with WordPress",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter WordPress Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    {
      // https://github.com/gatsby-uc/plugins/tree/main/packages/gatsby-source-strapi
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://webserver.stay22.com", // Replace with your Strapi site URL
        contentTypes: ["User"], // Replace with the name of your content type
        singleTypes: [], // Replace with the name of your single type
        queryLimit: 1000, // Adjust the limit as per your requirement
        accessToken: "4f6f676dfe85b8608f0a2ebf11d22656484e169ad0c40006058943d5f7c1e43583b3af2386846c96451a8e4ac9ec1c94bf693ad58f01dd88c7032daf8b3d11d65e788bb65c93d9504f302873b24a8e94add1ab146c125b933ee089cbef530bb9856acd1b1e5cb80be6540ca9aa4f7f1ae60a17521d181961aba6371d95d4da28", // Replace with your Strapi API key
      },
    }
  ],
}
