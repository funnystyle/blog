---
title: Title
category: technotes
tags:
    - gatsby
    - title
date: 2018-09-06T15:02:00.000Z
---

[Gatsby](https://www.gatsbyjs.org/)는 [GraphQL](https://graphql.org/)을 이용해서 data 를 입력받는다.

`gatsby-config.js`파일의 siteMetadata 프로퍼티를 이용하여 여러가지 정보를 넣어놓을 수 있는데, 각 페이지에서 사용할 title 를 설정해 보자.



```javascript
// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `funnyshelf`,
  },
};
```

```javascript
// src/pages/about.js

export default ({ data }) =>
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

```javascript
// src/layouts/index.js

import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right` })

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.H3 marginBottom={rhythm(2)} display={`inline-block`}>
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
  </g.Div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```
