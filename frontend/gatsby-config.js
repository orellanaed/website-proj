require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        accessToken:
          "0f4182550d4cfcb8c14fef836fdf4f89e7dff57b9c9977a53cead8b0aaf86897eb3365a83a5f846e1d686c8f73319539d24563891bf124c649f606a39c162a03ecbc0252df7f8495f2c8ecfaddad75dbebad2d6cfc04d4cfc7e2bc8611d0ada27f131495171840ad3520465bbd338ee3f11280d23761efe8fb3f50ee456c967a",
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};
