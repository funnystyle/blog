import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      개발서적 덕후가 쓰는 개발서적 리뷰<br />
      블로그를 만들면서 기술 문서 동시 작성
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
