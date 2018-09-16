---
title: prettier for markdown code block
category: technotes
tags:
    - gatsby
    - prettier
    - markdown
    - code block
date: 2018-09-17T01:00:00.000Z
---

markdown 문서의 code block 에 있는 code 를 prettier 로 formatting 해보자.

<!-- end -->

---

1. 참고자료
  > https://www.gatsbyjs.org/packages/gatsby-remark-prettier/

2. 설치
  ```shell
  npm install --save gatsby-transformer-remark gatsby-remark-prettier prettier
  ```

3. 설정
  ```javascript{8-17}
  // In your gatsby-config.js
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prettier`,
            options: {
              // Look for local .prettierrc file.
              // The same as `prettier.resolveConfig(process.cwd())`
              usePrettierrc: true,
              // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
              prettierOptions: {}
            },
          },
          // any highlight plugin should be after
          `gatsby-remark-prismjs`,
        ],
      },
    },
  ]
  ```
