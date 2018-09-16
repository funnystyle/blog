---
title: web font loader
category: technotes
tags:
    - gatsby
    - web font loader
date: 2018-09-14T23:48:00.000Z
---

1.  참고자료

    > https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/
    > https://github.com/typekit/webfontloader#custom

2.  custom web font 를 css 파일에 추가

    ```css
    @font-face {
      font-family: 'Jeongum';
      font-style: normal;
      font-weight: 400;
      src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/seoul/Jeongum/Jeongum.woff2')
          format('woff2'), url
          (
            '//cdn.jsdelivr.net/korean-webfonts/1/corps/seoul/Jeongum/Jeongum.woff'
          )
          format ('woff');
    }
    ```

3.  gatsby-config.js 수정

    - google font 는 font-family 로 추가 가능
    - url 로 접근해야 하는 폰트는 css 에 추가 후 설정

    ```jsx{2-19}
    plugins: [
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: [
              `Gamja Flower`,
              `Yeon Sung`,
              `Stylish`,
              `Noto Serif KR`,
              `Black And White Picture`,
            ],
          },
          custom: {
            families: ['Jeongum'],
            // gatsby 는 css 를 html header 에 삽입하므로 아래 구문은 필요 없음
            // urls: ['/src/layouts/index.css'],
          },
        },
      },
    ]
    ```

4.  참고

    - gatsby-plugin-google-fonts 보다는 이게 범위도 넓고 custom font 도 넣을 수 있어서 더 좋은 것 같음.
