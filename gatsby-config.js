module.exports = {
  siteMetadata: {
    title: `funnystyle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `ko`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     custom: {
    //       families: [
    //         // 'Jeongum',
    //         // 'Godo',
    //         // 'Hankc',
    //         'Youth',
    //         'BareunBatang'
    //       ],
    //       // urls: ['/src/layouts/index.css'],
    //     },
    //     // google: {
    //     //   families: [
    //     //     `Gamja Flower`,
    //     //     `Yeon Sung`,
    //     //     `Stylish`,
    //     //     `Noto Serif KR`,
    //     //     `Black And White Picture`,
    //     //   ],
    //     // },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Gamja Flower`,
    //       `Yeon Sung`,
    //       `Stylish`,
    //       `Noto Serif KR`,
    //       `Black And White Picture`,

    //       // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- end -->`,
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 680,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: "nofollow"
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/posts/`,
      },
    },
  ],
}
