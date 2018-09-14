---
title: html attributes
category: technotes
tags:
    - gatsby
    - html attributes
date: 2018-09-14T10:37:00.000Z
---

1. 참고자료  
    > https://www.gatsbyjs.org/packages/gatsby-plugin-html-attributes/  
    > https://www.npmjs.com/package/gatsby-plugin-html-attributes

2. 설치
    ```shell
    npm install --save gatsby-plugin-html-attributes
    ```

3. 사용법
    ```javascript{4-9}
    // gatsby-config.js
    module.exports = {
      plugins: [
        {
          resolve: 'gatsby-plugin-html-attributes',
          options: {
            lang: 'ko'
          }
        }
      ]
    }
    ```

4. 참고

    > `gatsby develop` 에서는 적용이 안되고  
    > `gatsby build` 를 하면 적용이 되는 것 같다.
