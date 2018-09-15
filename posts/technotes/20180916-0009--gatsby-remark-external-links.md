---
title: gasby-remark-external-links
category: technotes
tags:
    - gatsby
    - gasby-remark-external-links
date: 2018-09-16T00:09:00.000Z
---

마크다운 문서에 외부 사이트 링크가 있는 경우, 브라우저의 현재 탭에서 열리게 된다. 외부 링크의 경우에는 새 탭으로 열리도록 설정해 보자.

<!-- end -->

`gatsby-remark-external-links` 를 이용하여 외부 링크에 `target="_blank"` 를 주어 새 탭에서 열리도록 할 수 있다. 또한, 검색엔진이 해당 링크를 탐색하지 않도록 `rel="nofollow"` 를 설정할 수 있다.

---

1. 참고자료
    > https://www.gatsbyjs.org/packages/gatsby-remark-external-links
    > https://github.com/remarkjs/remark-external-links

2. plugin 설치

    ```shell
    npm install --save gatsby-remark-external-links
    ```

3. gatsby-config.js 수정

    ```javascript{6-12}
    plugins: [      
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-external-links`,
              options: {
                target: `_blank`,
                rel: "nofollow"
              }
            }
          ]
        }
      }
    ]
    ```

4. 재시작
